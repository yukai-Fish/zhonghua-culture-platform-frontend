import { useState } from 'react';
import { coreThemes } from '../../data/themes';
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
          <p className="eyebrow">山河入卷 · 文脉如灯</p>
          <h1>选择一脉文化，进入一方天地</h1>
          <p className="hero-subtitle">
            佛教清净，道教玄远，妈祖护航。每一脉文化都有自己的山川、典籍、仪式与生活回响。
          </p>
          <p className="hero-note">
            从地图、长卷、经典与静修场景进入，在安静的浏览中与千年风物相逢。
          </p>
          <p className="hero-guide">请选择你想进入的文化脉络</p>
        </div>
      </section>

      <section className="section-block" id="culture-map">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">文化入口</p>
            <h2>佛教、道教、妈祖文化</h2>
          </div>
          <span className="line-label">文化选择</span>
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

      {toast && <div className="toast-panel">{toast}</div>}
    </div>
  );
}
