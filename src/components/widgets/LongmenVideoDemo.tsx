import { type CSSProperties, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cultureAssets } from '../../data/assets';

interface LongmenVideoDemoProps {
  openSignal?: number;
}

export function LongmenVideoDemo({ openSignal = 0 }: LongmenVideoDemoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const previousSignal = useRef(openSignal);

  useEffect(() => {
    if (openSignal !== previousSignal.current) {
      previousSignal.current = openSignal;
      setIsOpen(true);
    }
  }, [openSignal]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const modal = (
    <div className="video-modal" role="dialog" aria-modal="true" aria-label="龙门石窟影像">
      <div className="video-modal-inner">
        <button className="close-button video-close-button" type="button" onClick={() => setIsOpen(false)}>
          关闭
        </button>
        <div className="video-stage">
          <video src={cultureAssets.longmenVideo} controls autoPlay playsInline />
        </div>
        <p>通过影像进入石窟空间，感受佛教艺术与东方审美的融合。</p>
      </div>
    </div>
  );

  return (
    <section className="experience-module longmen-exhibit">
      <h3>龙门月照，石佛含光</h3>
      <button
        className="video-demo"
        type="button"
        style={{ '--longmen-poster': `url(${cultureAssets.siteLongmen})` } as CSSProperties}
        onClick={() => setIsOpen(true)}
      >
        <span className="play-ring" aria-hidden="true">播放</span>
        <strong>龙门月照，石佛含光</strong>
        <small>通过影像进入石窟空间，感受佛教艺术与东方审美的融合。</small>
      </button>

      {isOpen ? createPortal(modal, document.body) : null}
    </section>
  );
}
