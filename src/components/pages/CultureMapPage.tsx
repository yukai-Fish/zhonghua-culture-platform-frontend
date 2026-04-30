import { useState } from 'react';
import { cultureAssets } from '../../data/assets';

interface CultureMapPageProps {
  onEnterBuddhism: () => void;
}

interface MapThemeTab {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  status: 'open' | 'coming';
}

interface MapSite {
  id: string;
  name: string;
  label: string;
  x: number;
  y: number;
  photo: string;
  description: string;
}

const mapThemes: MapThemeTab[] = [
  { id: 'buddhism', title: '佛教', subtitle: '石窟寺院', icon: '卍', status: 'open' },
  { id: 'dao', title: '道教', subtitle: '洞天福地', icon: '山', status: 'coming' },
  { id: 'silk-road', title: '丝路', subtitle: '古道商旅', icon: '驼', status: 'coming' },
  { id: 'tea', title: '茶文化', subtitle: '茶烟入山', icon: '茶', status: 'coming' },
  { id: 'intangible', title: '非遗文化', subtitle: '百工百艺', icon: '艺', status: 'coming' },
  { id: 'folk', title: '更多主题', subtitle: '万象待启', icon: '···', status: 'coming' },
];

const buddhistSites: MapSite[] = [
  {
    id: 'putuo',
    name: '普陀山',
    label: '海天佛国',
    x: 78,
    y: 58,
    photo: cultureAssets.sitePutuo,
    description: '潮声绕岛，香云接海，观音信愿在海天之间化作温柔灯火。',
  },
  {
    id: 'lingyin',
    name: '灵隐寺',
    label: '江南禅林',
    x: 72,
    y: 55,
    photo: cultureAssets.siteLingyin,
    description: '飞来峰下苔痕深浅，钟声穿过松影，把江南山水染成一片清寂。',
  },
  {
    id: 'longmen',
    name: '龙门石窟',
    label: '石窟造像',
    x: 57,
    y: 43,
    photo: cultureAssets.siteLongmen,
    description: '伊水两岸，万龛向光，北魏至唐的刀锋把慈悲与盛世一同刻入山岩。',
  },
  {
    id: 'potala',
    name: '布达拉宫',
    label: '高原佛宫',
    x: 26,
    y: 57,
    photo: cultureAssets.sitePotala,
    description: '白墙红宫倚雪域而起，云影、经幡与晨光共同托起高原的庄严。',
  },
  {
    id: 'wutai',
    name: '五台山',
    label: '文殊道场',
    x: 58,
    y: 30,
    photo: cultureAssets.siteWutai,
    description: '五峰环抱，清凉入怀，朝山人的脚步在风雪与香火中绵延不息。',
  },
];

const timelineMarks = ['东汉', '魏晋', '隋唐', '宋元', '明清', '近现代'];

export function CultureMapPage({ onEnterBuddhism }: CultureMapPageProps) {
  const [toast, setToast] = useState('');
  const [activeSiteId, setActiveSiteId] = useState('longmen');
  const activeSite = buddhistSites.find((site) => site.id === activeSiteId) ?? buddhistSites[0];

  const showComingSoon = () => {
    setToast('此路仍在云深处，敬请期待');
    window.setTimeout(() => setToast(''), 2200);
  };

  return (
    <div className="page culture-map-page page-fade">
      <section className="culture-map-console" aria-label="佛教文化地图">
        <div className="culture-theme-tabs" aria-label="文化主题菜单">
          {mapThemes.map((theme) => (
            <button
              className={theme.status === 'open' ? 'active' : ''}
              type="button"
              key={theme.id}
              onClick={theme.status === 'open' ? undefined : showComingSoon}
            >
              <i>{theme.icon}</i>
              <span>{theme.title}</span>
              <small>{theme.subtitle}</small>
            </button>
          ))}
        </div>

        <div className="culture-map-grid">
          <aside className="map-scroll-rail">
            <div className="rail-title">佛教文脉长图</div>
            <div className="rail-scroll-frame">
              <img src={cultureAssets.buddhistScroll} alt="佛教文脉长图" />
              <button type="button" onClick={onEnterBuddhism} aria-label="进入佛教行旅详情">
                入卷
              </button>
            </div>
            <button className="rail-action" type="button" onClick={onEnterBuddhism}>
              进入佛教行旅
            </button>
          </aside>

          <main className="map-stage-panel">
            <div className="map-stage-heading">
              <div>
                <p className="eyebrow">莲开东土 · 梵音入山河</p>
                <h1>佛教文化地图</h1>
                <p>古道带来经声，石壁留住光影，寺塔在山河间静候一次回望。</p>
              </div>
              <div className="map-compass" aria-hidden="true">
                <span>北</span>
                <i />
              </div>
            </div>

            <div className="china-map-canvas">
              <img src={cultureAssets.buddhistMap} alt="中国佛教文化地图" />
              {buddhistSites.map((site) => (
                <button
                  className={`culture-map-hotspot ${activeSite.id === site.id ? 'active' : ''}`}
                  type="button"
                  key={site.id}
                  style={{ left: `${site.x}%`, top: `${site.y}%` }}
                  onClick={() => setActiveSiteId(site.id)}
                >
                  <span>{site.name}</span>
                </button>
              ))}
            </div>

            <div className="map-era-strip" aria-label="佛教文化时间轴">
              <button className="play-orb" type="button" onClick={onEnterBuddhism} aria-label="进入完整行旅">
                ▶
              </button>
              {timelineMarks.map((mark) => (
                <span key={mark}>{mark}</span>
              ))}
            </div>
          </main>

          <aside className="map-side-panel">
            <div className="side-card culture-center-card">
              <p className="eyebrow">佛教文化体验中心</p>
              <div className="experience-icons">
                {['与达摩交流', '经文释义', '愿望摇签', '石窟影像'].map((item) => (
                  <button type="button" key={item} onClick={onEnterBuddhism}>
                    <span>{item.slice(0, 1)}</span>
                    <small>{item}</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="side-card site-portrait-card" aria-live="polite">
              <p className="eyebrow">画中一隅</p>
              <img src={activeSite.photo} alt={`${activeSite.name}实景照片`} />
              <span>{activeSite.label}</span>
              <h2>{activeSite.name}</h2>
              <p>{activeSite.description}</p>
            </div>

            <div className="side-card site-list-card">
              <p className="eyebrow">热门节点</p>
              {buddhistSites.map((site) => (
                <button
                  className={activeSite.id === site.id ? 'active' : ''}
                  type="button"
                  key={site.id}
                  onClick={() => setActiveSiteId(site.id)}
                >
                  <span>{site.name}</span>
                  <small>{site.label}</small>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {toast && <div className="toast-panel">{toast}</div>}
    </div>
  );
}
