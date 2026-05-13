import { useState } from 'react';
import { coreThemes } from '../../data/themes';

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
          <p className="eyebrow">山河入卷 · 文脉如灯</p>
          <h1>选择一脉文化，进入一方天地</h1>
          <p className="hero-subtitle">
            佛教清净，道教玄远，妈祖护航。每一脉文化都有自己的山川、典籍、仪式与生活回响。
          </p>
          <p className="hero-note">
            从地图、长卷、经典与静修场景进入，在安静的浏览中与千年风物相逢。
          </p>
          <p className="hero-guide">点击图标进入文化空间</p>
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

      {toast && <div className="toast-panel">{toast}</div>}
    </div>
  );
}
