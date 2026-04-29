import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { cultureAssets } from '../../data/assets';

export function LongmenVideoDemo() {
  const [isOpen, setIsOpen] = useState(false);

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
        <p>岩壁千年，伊水无声，光影替沉默的石像重新点亮眉目。</p>
      </div>
    </div>
  );

  return (
    <section className="experience-module">
      <h3>龙门月下，石佛含光</h3>
      <button className="video-demo" type="button" onClick={() => setIsOpen(true)}>
        <span className="play-ring">播放</span>
        <strong>入石窟光影</strong>
        <small>山岩无言，佛面有光，一段影像从古龛深处缓缓醒来。</small>
      </button>

      {isOpen ? createPortal(modal, document.body) : null}
    </section>
  );
}
