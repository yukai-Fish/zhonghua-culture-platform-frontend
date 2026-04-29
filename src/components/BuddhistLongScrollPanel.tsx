import { useState } from 'react';
import { cultureAssets } from '../data/assets';

const scrollTimeline = ['两汉：佛教初传', '魏晋南北朝：译经兴盛，石窟初盛', '隋唐：宗派繁荣，造像艺术高峰', '宋元明清：民间传播与文化融合', '近现代：遗产保护与数字传播'];

export function BuddhistLongScrollPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="ornate-panel long-scroll-panel" id="long-scrolls">
      <div className="panel-heading">
        <p className="eyebrow">文化长图</p>
        <h2>佛教文脉长图</h2>
      </div>
      <p className="panel-intro">
        沿着佛教传播、圣地营建与石窟造像的发展脉络，纵览佛教文化在中国的空间与历史展开。
      </p>
      <button className="scroll-frame" type="button" onClick={() => setIsOpen(true)} aria-label="展开佛教文脉长图">
        <img src={cultureAssets.buddhistScroll} alt="佛教文脉长图" />
      </button>
      <button className="gold-button full-width" type="button" onClick={() => setIsOpen(true)}>
        展开长图
      </button>
      <ol className="mini-timeline">
        {scrollTimeline.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      {isOpen && (
        <div className="image-viewer" role="dialog" aria-modal="true" aria-label="佛教文脉长图大图预览">
          <div className="image-viewer-inner">
            <button className="close-button" type="button" onClick={() => setIsOpen(false)}>
              关闭
            </button>
            <img src={cultureAssets.buddhistScroll} alt="佛教文脉长图大图" />
          </div>
        </div>
      )}
    </aside>
  );
}
