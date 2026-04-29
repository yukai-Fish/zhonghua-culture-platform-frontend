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
    setToast('山门未启，敬请期待');
    window.setTimeout(() => setToast(''), 2200);
  };

  return (
    <div className="page home-page page-fade">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">山河入卷 · 文脉如灯 · 万象同辉</p>
          <h1>华夏山河文脉</h1>
          <p className="hero-subtitle">
            山河有迹，钟磬有声，千年风物在一卷烟岚中缓缓铺陈。
          </p>
          <p className="hero-note">
            从古道、名山与寺观之间拾取文明回响，让散落在天地间的故事重新相逢。
          </p>
        </div>
      </section>

      <section className="section-block" id="culture-map">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">山川有信</p>
            <h2>一图铺开千年烟火</h2>
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
            <p className="eyebrow">未启之门</p>
            <h2>风物尚在云深处</h2>
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
            <p className="eyebrow">长卷初展</p>
            <h2>云水之间，文脉成轴</h2>
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
