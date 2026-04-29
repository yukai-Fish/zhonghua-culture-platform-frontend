import { useState } from 'react';
import { buddhistTimeline } from '../data/timeline';

export function BuddhistTimeline() {
  const [activeIndex, setActiveIndex] = useState(2);
  const active = buddhistTimeline[activeIndex];

  return (
    <section className="section-block timeline-section">
      <div className="section-title-row">
        <div>
          <p className="eyebrow">发展脉络</p>
          <h2>佛教中国化的历史时间轴</h2>
        </div>
      </div>
      <div className="timeline-track">
        {buddhistTimeline.map((item, index) => (
          <button
            className={index === activeIndex ? 'active' : ''}
            type="button"
            key={item.period}
            onClick={() => setActiveIndex(index)}
          >
            <span>{item.period}</span>
          </button>
        ))}
      </div>
      <div className="timeline-detail">
        <span>{active.focus}</span>
        <p>{active.description}</p>
      </div>
    </section>
  );
}
