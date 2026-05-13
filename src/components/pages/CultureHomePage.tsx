import { useState } from 'react';
import { coreThemes } from '../../data/themes';

interface CultureHomePageProps {
  onEnterBuddhism: () => void;
}

export function CultureHomePage({ onEnterBuddhism }: CultureHomePageProps) {
  const [toast, setToast] = useState('');
  const homeHeroArtSrc = `${import.meta.env.BASE_URL}assets/home/home-bg-transparent.png`;
  const titleLine1Src = `${import.meta.env.BASE_URL}assets/home/title-1-transparent.png`;
  const titleLine2Src = `${import.meta.env.BASE_URL}assets/home/title-2-transparent.png`;

  const showComingSoon = () => {
    setToast('山门未启，敬请期待');
    window.setTimeout(() => setToast(''), 2200);
  };

  return (
    <div className="page home-page page-fade">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">山河入卷 · 文脉如灯</p>
          <div className="hero-title-images" aria-label="首页标题">
            <img className="hero-title-image hero-title-image-top" src={titleLine1Src} alt="" loading="eager" decoding="async" />
            <img className="hero-title-image hero-title-image-bottom" src={titleLine2Src} alt="" loading="eager" decoding="async" />
          </div>
        </div>
      </section>

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

      <div className="home-hero-art" aria-hidden="true">
        <img src={homeHeroArtSrc} alt="" loading="lazy" decoding="async" />
      </div>

      {toast && <div className="toast-panel">{toast}</div>}
    </div>
  );
}
