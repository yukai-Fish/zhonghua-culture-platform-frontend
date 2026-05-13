import { useState } from 'react';
import { buddhistTimeline } from '../../data/timeline';

export function BuddhistTimeline() {
  const [activeIndex, setActiveIndex] = useState(2);
  const active = buddhistTimeline[activeIndex];
  const eraRanges = ['约公元 67-220 年', '220-589 年', '581-907 年', '960-1368 年', '1368-1911 年', '1912 年至今'];

  return (
    <section className="section-block timeline-section timeline-section-redesign">
      <div className="timeline-heading">
        <p className="eyebrow">发展脉络</p>
        <h2>中国化历史时间轴</h2>
      </div>
      <div className="timeline-track">
        {buddhistTimeline.map((item, index) => (
          <button
            className={index === activeIndex ? 'active' : ''}
            type="button"
            key={item.period}
            onClick={() => setActiveIndex(index)}
          >
            <i aria-hidden="true" />
            <span>{item.period}</span>
          </button>
        ))}
      </div>
      <div className="timeline-detail timeline-detail-redesign">
        <span>{active.period}（{eraRanges[activeIndex]}）</span>
        <h3>{active.focus}</h3>
        <p>{active.description}</p>
      </div>
    </section>
  );
}
