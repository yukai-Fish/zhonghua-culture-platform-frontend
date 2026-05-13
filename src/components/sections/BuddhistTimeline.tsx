import { useState } from 'react';
import { buddhistTimeline } from '../../data/timeline';

export function BuddhistTimeline() {
  const [activeIndex, setActiveIndex] = useState(2);
  const active = buddhistTimeline[activeIndex];
  const eraRanges = ['约公元1-220年', '220-589年', '581-907年', '960-1368年', '1368-1911年', '1912年至今'];

  return (
    <section className="section-block timeline-section timeline-section-redesign">
      <div className="timeline-heading">
        <p className="eyebrow">发展脉络</p>
        <h2>????????</h2>
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
