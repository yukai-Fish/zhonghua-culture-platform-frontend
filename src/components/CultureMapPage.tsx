import { useState } from 'react';
import { coreThemes } from '../data/themes';
import { ThemeOverviewCard } from './ThemeOverviewCard';

interface CultureMapPageProps {
  onEnterBuddhism: () => void;
}

export function CultureMapPage({ onEnterBuddhism }: CultureMapPageProps) {
  const [toast, setToast] = useState('');

  const showComingSoon = () => {
    setToast('该主题正在建设中，敬请期待');
    window.setTimeout(() => setToast(''), 2200);
  };

  return (
    <div className="page nav-page page-fade">
      <section className="nav-page-hero">
        <p className="eyebrow">文化地图</p>
        <h1>山河之上，展开主题文化坐标</h1>
        <p className="hero-subtitle">
          以地图作为第一入口，进入道教名山、佛教寺窟与丝绸之路等文化传播路径。
        </p>
      </section>

      <section className="section-block">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">地图入口</p>
            <h2>选择一个主题开始探索</h2>
          </div>
          <span className="line-label">Map Gate</span>
        </div>
        <div className="theme-grid focus-grid">
          {coreThemes.map((theme) => (
            <ThemeOverviewCard
              key={theme.id}
              theme={theme}
              onOpen={theme.status === 'open' ? onEnterBuddhism : showComingSoon}
            />
          ))}
        </div>
      </section>

      <section className="map-process-strip">
        {['选主题', '看地图', '点地点', '入旅程'].map((item, index) => (
          <div className="process-step" key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </section>

      {toast && <div className="toast-panel">{toast}</div>}
    </div>
  );
}
