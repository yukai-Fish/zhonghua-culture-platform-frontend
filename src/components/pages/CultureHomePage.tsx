import { useState } from 'react';
import { comingThemes, coreThemes, longScrollPreviews } from '../../data/themes';
import { ThemeLongScrollPreview } from '../cards/ThemeLongScrollPreview';
import { ThemeOverviewCard } from '../cards/ThemeOverviewCard';

interface CultureHomePageProps {
  onEnterBuddhism: () => void;
}

export function CultureHomePage({ onEnterBuddhism }: CultureHomePageProps) {
  const [toast, setToast] = useState('');

  const showComingSoon = () => {
    setToast('该文化主题为一期预留入口，后续展开完整内容');
    window.setTimeout(() => setToast(''), 2200);
  };

  return (
    <div className="page home-page page-fade">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">一期文化选择页</p>
          <h1>先选择文化，再进入沉浸路径</h1>
          <p className="hero-subtitle">
            平台先以佛教、道教、妈祖文化三类入口分流，避免不同信仰内容混杂；当前演示聚焦佛教完整闭环。
          </p>
          <p className="hero-note">
            一期围绕四川、福建试点，连接权威文化内容、智能释义、沉浸互动和个人修身空间。
          </p>
        </div>
      </section>

      <section className="section-block" id="culture-map">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">文化分流</p>
            <h2>佛教、道教、妈祖文化三大入口</h2>
          </div>
          <span className="line-label">Map Atlas</span>
        </div>
        <div className="theme-grid">
          {coreThemes.map((theme) => (
            <ThemeOverviewCard
              key={theme.id}
              theme={theme}
              onOpen={theme.status === 'open' ? onEnterBuddhism : showComingSoon}
            />
          ))}
        </div>
      </section>

      <section className="section-block compact" id="coming-themes">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">一期边界</p>
            <h2>先保留入口，再逐步扩展</h2>
          </div>
        </div>
        <div className="coming-theme-grid">
          {comingThemes.map((theme) => (
            <button className="coming-chip" type="button" key={theme} onClick={showComingSoon}>
              <span>{theme}</span>
              <small>一期预留</small>
            </button>
          ))}
        </div>
      </section>

      <section className="section-block" id="long-scrolls">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">文脉预览</p>
            <h2>三类文化的后续扩展方向</h2>
          </div>
          <span className="line-label">Scroll Preview</span>
        </div>
        <div className="scroll-preview-grid">
          {longScrollPreviews.map((preview) => (
            <ThemeLongScrollPreview key={preview.id} preview={preview} />
          ))}
        </div>
      </section>

      {toast && <div className="toast-panel">{toast}</div>}
    </div>
  );
}
