import { BuddhistLongScrollPanel } from './BuddhistLongScrollPanel';
import { BuddhistMapPanel } from './BuddhistMapPanel';
import { BuddhistTimeline } from './BuddhistTimeline';
import { ExperienceCenterPanel } from './ExperienceCenterPanel';

interface BuddhistDetailPageProps {
  onHome: () => void;
}

export function BuddhistDetailPage({ onHome }: BuddhistDetailPageProps) {
  return (
    <div className="page buddhist-page page-fade">
      <section className="detail-hero">
        <button className="back-link" type="button" onClick={onHome}>
          返回首页
        </button>
        <p className="eyebrow">佛教主题 · 文化地图 · 文脉长图</p>
        <h1>佛教文化地图</h1>
        <p className="hero-subtitle">
          从丝绸之路到石窟寺院，从经典传播到艺术融合，追溯佛教文化在中国的传播与中国化历程。
        </p>
        <p className="hero-note">
          佛教自传入中国后，在译经、造像、寺院制度、石窟艺术、民间信仰与文学审美中不断演化，形成了深刻而多元的文化景观。
        </p>
      </section>

      <section className="detail-grid" aria-label="佛教主题详情">
        <BuddhistLongScrollPanel />
        <BuddhistMapPanel />
        <ExperienceCenterPanel />
      </section>

      <BuddhistTimeline />

      <section className="section-block compact">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">其他主题入口</p>
            <h2>更多文化地图正在建设</h2>
          </div>
        </div>
        <div className="coming-theme-grid">
          {['道教文化地图', '丝绸之路文化地图', '茶文化地图', '民族文化地图'].map((theme) => (
            <button className="coming-chip" type="button" key={theme}>
              <span>{theme}</span>
              <small>敬请期待</small>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
