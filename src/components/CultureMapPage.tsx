import { useState } from 'react';
import { coreThemes } from '../data/themes';
import { ThemeOverviewCard } from './ThemeOverviewCard';

interface CultureMapPageProps {
  onEnterBuddhism: () => void;
}

export function CultureMapPage({ onEnterBuddhism }: CultureMapPageProps) {
  const [toast, setToast] = useState('');

  const showComingSoon = () => {
    setToast('山门未启，敬请期待');
    window.setTimeout(() => setToast(''), 2200);
  };

  return (
    <div className="page nav-page page-fade">
      <section className="nav-page-hero">
        <p className="eyebrow">文化地图</p>
        <h1>山河落笔，万象归图</h1>
        <p className="hero-subtitle">
          从海岱到西陲，从古刹到云路，文明的足音在山水之间相互照见。
        </p>
      </section>

      <section className="section-block">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">图中有路</p>
            <h2>一枚坐标，半部春秋</h2>
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
        {['循山河', '见古迹', '听遗响', '入长卷'].map((item, index) => (
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
