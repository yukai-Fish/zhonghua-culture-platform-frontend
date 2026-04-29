import { useState } from 'react';
import { cultureAssets } from '../data/assets';

export function LongmenVideoDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="experience-module">
      <h3>龙门石窟沉浸式体验</h3>
      <button className="video-demo" type="button" onClick={() => setIsOpen(true)}>
        <span className="play-ring">播放</span>
        <strong>龙门石窟沉浸式视频 Demo</strong>
        <small>通过影像进入石窟空间，感受佛教艺术与东方审美的融合。</small>
      </button>

      {isOpen && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label="龙门石窟沉浸式视频">
          <div className="video-modal-inner">
            <button className="close-button" type="button" onClick={() => setIsOpen(false)}>
              关闭
            </button>
            <video src={cultureAssets.longmenVideo} controls autoPlay />
            <p>龙门石窟以北魏至唐代造像闻名，本 demo 用影像呈现石窟空间、佛教造像与东方审美的融合。</p>
          </div>
        </div>
      )}
    </section>
  );
}
