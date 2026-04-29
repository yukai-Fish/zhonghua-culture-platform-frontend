import { useState } from 'react';
import { comingThemes, coreThemes, longScrollPreviews } from '../data/themes';
import { ThemeLongScrollPreview } from './ThemeLongScrollPreview';
import { ThemeOverviewCard } from './ThemeOverviewCard';

interface CultureHomePageProps {
  onEnterBuddhism: () => void;
}

export function CultureHomePage({ onEnterBuddhism }: CultureHomePageProps) {
  const [toast, setToast] = useState('');

  const showComingSoon = () => {
    setToast('该主题正在建设中，敬请期待');
    window.setTimeout(() => setToast(''), 2200);
  };

  return (
    <div className="page home-page page-fade">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">数字展馆 · 山河文脉 · 主题文化地图</p>
          <h1>中华文化地图</h1>
          <p className="hero-subtitle">
            沿着山河与文脉，探索佛教、道教、丝绸之路等中华文化主题的传播、交汇与演变。
          </p>
          <p className="hero-note">
            以文化地图、主题长卷与互动体验的方式，构建可浏览、可感知、可参与的中华文化数字平台。
          </p>
        </div>
      </section>

      <section className="section-block" id="culture-map">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">主题文化概览</p>
            <h2>以地图进入中华文明的多重现场</h2>
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
            <p className="eyebrow">更多主题</p>
            <h2>正在展开的文化入口</h2>
          </div>
        </div>
        <div className="coming-theme-grid">
          {comingThemes.map((theme) => (
            <button className="coming-chip" type="button" key={theme} onClick={showComingSoon}>
              <span>{theme}</span>
              <small>即将开放</small>
            </button>
          ))}
        </div>
      </section>

      <section className="section-block" id="long-scrolls">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">主题长卷预告</p>
            <h2>以古画长卷收束文脉与空间</h2>
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
