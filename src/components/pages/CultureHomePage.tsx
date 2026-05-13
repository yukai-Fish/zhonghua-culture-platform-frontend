import { useState } from 'react';
import { coreThemes } from '../../data/themes';

interface CultureHomePageProps {
  onEnterBuddhism: () => void;
}

export function CultureHomePage({ onEnterBuddhism }: CultureHomePageProps) {
  const [toast, setToast] = useState('');
  const homeHeroArtSrc = `${import.meta.env.BASE_URL}assets/home/home-bg-transparent.png`;

  const showComingSoon = () => {
    setToast('山门未启，敬请期待');
    window.setTimeout(() => setToast(''), 2200);
  };

  return (
    <div className="page home-page page-fade">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">山河入卷 · 文脉如灯</p>
          <h1 className="hero-title-split" aria-label="选择一脉天地，进入一方天地">
            <span className="hero-title-line hero-title-line-top">选择一脉天地</span>
            <span className="hero-title-line hero-title-line-bottom">进入一方天地</span>
          </h1>
        </div>
      </section>

      <div className="home-hero-art" aria-hidden="true">
        <img src={homeHeroArtSrc} alt="" loading="lazy" decoding="async" />
      </div>

      <section className="section-block minimal-entry" id="culture-map">
        <div className="minimal-theme-grid" aria-label="文化入口">
          {coreThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`minimal-theme-button ${theme.status === 'open' ? 'is-open' : 'is-coming'}`}
              onClick={theme.status === 'open' ? onEnterBuddhism : showComingSoon}
              aria-label={theme.status === 'open' ? `进入${theme.title}` : `${theme.title}敬请期待`}
            >
              <img src={theme.icon} alt="" loading="lazy" decoding="async" />
              <span>{theme.title}</span>
            </button>
          ))}
        </div>
      </section>

      {toast && <div className="toast-panel">{toast}</div>}
    </div>
  );
}
