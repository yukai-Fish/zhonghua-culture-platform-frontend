import { useState } from 'react';
import { cultureAssets } from '../data/assets';

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
    description: '观音信仰的重要圣地，海天、岛屿与香火传统共同形成“海天佛国”的文化意象。',
  },
  {
    id: 'lingyin',
    name: '灵隐寺',
    label: '江南禅林',
    x: 38,
    y: 27,
    description: '江南佛教寺院代表，山林、飞来峰造像与禅宗传统交织，呈现寺院与城市生活的连接。',
  },
  {
    id: 'longmen',
    name: '龙门石窟',
    label: '石窟造像',
    x: 55,
    y: 43,
    description: '北魏至唐代石刻艺术高峰，体现佛教造像与中原审美、皇家礼制之间的深度融合。',
  },
  {
    id: 'potala',
    name: '布达拉宫',
    label: '高原佛宫',
    x: 49,
    y: 60,
    description: '高原佛教建筑与历史文化的重要象征，展现信仰空间、宫殿形制和雪域审美的复合景观。',
  },
  {
    id: 'wutai',
    name: '五台山',
    label: '文殊道场',
    x: 58,
    y: 79,
    description: '中国佛教四大名山之一，文殊信仰、山岳朝圣与寺院群落共同构成绵延至今的文化现场。',
  },
];

export function BuddhistJourneyScroll() {
  const [activeStopId, setActiveStopId] = useState(journeyStops[2].id);
  const activeStop = journeyStops.find((stop) => stop.id === activeStopId) ?? journeyStops[0];

  return (
    <section className="journey-scroll-section" aria-label="佛教文脉长图文化之旅">
      <div className="journey-scroll-heading">
        <div>
          <p className="eyebrow">佛教文化长图</p>
          <h2>点击长图点位，出现简介信息</h2>
        </div>
        <p>
          长图作为第二层页面的主视觉，点位围绕寺院、石窟、名山与信仰空间展开。点击左侧点位或右侧列表可切换介绍。
        </p>
      </div>

      <div className="journey-scroll-layout">
        <aside className="journey-map-guide">
          <p className="eyebrow">地图导览</p>
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
              aria-label={`查看${stop.name}简介`}
            >
              <span>{stop.name}</span>
            </button>
          ))}
        </div>

        <aside className="journey-info-card" aria-live="polite">
          <p className="eyebrow">点位简介</p>
          <span>{activeStop.label}</span>
          <h3>{activeStop.name}</h3>
          <p>{activeStop.description}</p>
          <button className="gold-button" type="button" onClick={() => document.getElementById('experience-center')?.scrollIntoView({ behavior: 'smooth' })}>
            进入沉浸体验
          </button>
        </aside>
      </div>
    </section>
  );
}
