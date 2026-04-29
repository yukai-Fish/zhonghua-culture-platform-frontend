import { useState } from 'react';
import { cultureAssets } from '../../data/assets';

interface JourneyStop {
  id: string;
  name: string;
  label: string;
  x: number;
  y: number;
  description: string;
}

const journeyStops: JourneyStop[] = [
  {
    id: 'putuo',
    name: '普陀山',
    label: '海天佛国',
    x: 68,
    y: 12,
    description: '潮声绕岛，香云接海，观音信愿在海天之间化作温柔灯火。',
  },
  {
    id: 'lingyin',
    name: '灵隐寺',
    label: '江南禅林',
    x: 38,
    y: 27,
    description: '飞来峰下苔痕深浅，钟声穿过松影，把江南山水染成一片清寂。',
  },
  {
    id: 'longmen',
    name: '龙门石窟',
    label: '石窟造像',
    x: 55,
    y: 43,
    description: '伊水两岸，万龛向光，北魏至唐的刀锋把慈悲与盛世一同刻入山岩。',
  },
  {
    id: 'potala',
    name: '布达拉宫',
    label: '高原佛宫',
    x: 49,
    y: 60,
    description: '白墙红宫倚雪域而起，云影、经幡与晨光共同托起高原的庄严。',
  },
  {
    id: 'wutai',
    name: '五台山',
    label: '文殊道场',
    x: 58,
    y: 79,
    description: '五峰环抱，清凉入怀，朝山人的脚步在风雪与香火中绵延不息。',
  },
];

export function BuddhistJourneyScroll() {
  const [activeStopId, setActiveStopId] = useState(journeyStops[2].id);
  const activeStop = journeyStops.find((stop) => stop.id === activeStopId) ?? journeyStops[0];

  return (
    <section className="journey-scroll-section" aria-label="佛教文脉长图">
      <div className="journey-scroll-heading">
        <div>
          <p className="eyebrow">长卷生云</p>
          <h2>山水之间，佛光次第明灭</h2>
        </div>
        <p>
          一轴画卷向下铺开，寺院、石窟与名山如星辰散落，等待风从画中吹来。
        </p>
      </div>

      <div className="journey-scroll-layout">
        <aside className="journey-map-guide">
          <p className="eyebrow">山河小引</p>
          <img src={cultureAssets.buddhistMap} alt="佛教文化地图导览" />
          <div className="journey-stop-list">
            {journeyStops.map((stop) => (
              <button
                className={activeStop.id === stop.id ? 'active' : ''}
                type="button"
                key={stop.id}
                onClick={() => setActiveStopId(stop.id)}
              >
                <span>{stop.name}</span>
                <small>{stop.label}</small>
              </button>
            ))}
          </div>
        </aside>

        <div className="journey-long-image">
          <img src={cultureAssets.buddhistScroll} alt="佛教文脉长图" />
          {journeyStops.map((stop) => (
            <button
              className={`journey-pin ${activeStop.id === stop.id ? 'active' : ''}`}
              type="button"
              key={stop.id}
              style={{ left: `${stop.x}%`, top: `${stop.y}%` }}
              onClick={() => setActiveStopId(stop.id)}
              aria-label={`查看${stop.name}`}
            >
              <span>{stop.name}</span>
            </button>
          ))}
        </div>

        <aside className="journey-info-card" aria-live="polite">
          <p className="eyebrow">画中一隅</p>
          <span>{activeStop.label}</span>
          <h3>{activeStop.name}</h3>
          <p>{activeStop.description}</p>
          <button className="gold-button" type="button" onClick={() => document.getElementById('experience-center')?.scrollIntoView({ behavior: 'smooth' })}>
            循光而下
          </button>
        </aside>
      </div>
    </section>
  );
}
