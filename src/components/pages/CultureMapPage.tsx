import { useState } from 'react';
import { cultureAssets } from '../../data/assets';

interface CultureMapPageProps {
  onEnterBuddhism: () => void;
}

type ThemeId = 'buddhism' | 'dao' | 'silk-road' | 'tea' | 'intangible' | 'folk';

interface MapSite {
  id: string;
  name: string;
  label: string;
  x: number;
  y: number;
  photo: string;
  description: string;
}

interface ThemeExperience {
  title: string;
  icon: string;
}

interface CultureMapTheme {
  id: ThemeId;
  title: string;
  shortTitle: string;
  subtitle: string;
  icon: string;
  enabled: boolean;
  eyebrow: string;
  headline: string;
  intro: string;
  mapImage: string;
  scrollImage: string;
  scrollTitle: string;
  centerTitle: string;
  actionText: string;
  sites: MapSite[];
  timeline: string[];
  experiences: ThemeExperience[];
}

const sharedIcons = {
  dialogue: cultureAssets.iconDharmaDialog,
  scroll: cultureAssets.iconScriptureScroll,
  wish: cultureAssets.iconWishLot,
  video: cultureAssets.iconGrottoVideo,
};

const cultureMapThemes: CultureMapTheme[] = [
  {
    id: 'buddhism',
    title: '佛教文化地图',
    shortTitle: '佛教',
    subtitle: '石窟寺院',
    icon: cultureAssets.iconThemeBuddhism,
    enabled: true,
    eyebrow: '莲开东土 · 梵音入山河',
    headline: '佛教文化地图',
    intro: '古道带来经声，石壁留住光影，寺塔在山河间静候一次回望。',
    mapImage: cultureAssets.buddhistMap,
    scrollImage: cultureAssets.buddhistScroll,
    scrollTitle: '佛教文脉长图',
    centerTitle: '佛教文化体验中心',
    actionText: '进入佛教行旅',
    timeline: ['东汉', '魏晋', '隋唐', '宋元', '明清', '近现代'],
    experiences: [
      { title: '与达摩交流', icon: sharedIcons.dialogue },
      { title: '经文释义', icon: sharedIcons.scroll },
      { title: '愿望摇签', icon: sharedIcons.wish },
      { title: '石窟影像', icon: sharedIcons.video },
    ],
    sites: [
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
    ],
  },
  {
    id: 'dao',
    title: '道教文化地图',
    shortTitle: '道教',
    subtitle: '洞天福地',
    icon: cultureAssets.iconThemeDao,
    enabled: true,
    eyebrow: '云篆开山 · 清气归洞天',
    headline: '道教文化地图',
    intro: '宫观隐入青山，洞天沿着云气展开，丹炉、松风与古道相互照映。',
    mapImage: cultureAssets.daoMap,
    scrollImage: cultureAssets.daoScroll,
    scrollTitle: '道教文脉长图',
    centerTitle: '道教文化体验中心',
    actionText: '循山访道',
    timeline: ['先秦', '两汉', '魏晋', '唐宋', '元明', '近现代'],
    experiences: [
      { title: '问道清谈', icon: sharedIcons.dialogue },
      { title: '符箓释读', icon: sharedIcons.scroll },
      { title: '洞天抽签', icon: sharedIcons.wish },
      { title: '名山影像', icon: sharedIcons.video },
    ],
    sites: [
      {
        id: 'qingcheng',
        name: '青城山',
        label: '幽林洞天',
        x: 46,
        y: 58,
        photo: cultureAssets.daoScroll,
        description: '山色深处藏着清响，石径与宫观在云雾间缓缓相接。',
      },
      {
        id: 'wudang',
        name: '武当山',
        label: '玄岳仙山',
        x: 57,
        y: 50,
        photo: cultureAssets.daoMap,
        description: '金殿映日，群峰拱卫，武当把山势与道法凝成一线庄严。',
      },
      {
        id: 'longhu',
        name: '龙虎山',
        label: '丹崖水府',
        x: 70,
        y: 60,
        photo: cultureAssets.daoScroll,
        description: '碧水绕丹崖而过，符箓与山水在此留下悠远的回声。',
      },
      {
        id: 'maoshan',
        name: '茅山',
        label: '上清故地',
        x: 72,
        y: 52,
        photo: cultureAssets.daoMap,
        description: '松风入殿，古坛沉静，上清一脉在江南烟雨里绵延。',
      },
    ],
  },
  {
    id: 'silk-road',
    title: '丝绸之路文化地图',
    shortTitle: '丝路',
    subtitle: '古道商旅',
    icon: cultureAssets.iconThemeSilkRoad,
    enabled: true,
    eyebrow: '驼铃穿沙 · 星河照关山',
    headline: '丝绸之路文化地图',
    intro: '商旅沿着风沙与绿洲前行，语言、器物、信仰与乐舞在古道上相逢。',
    mapImage: cultureAssets.silkRoadMap,
    scrollImage: cultureAssets.oceanScroll,
    scrollTitle: '丝路风物长卷',
    centerTitle: '丝路文化体验中心',
    actionText: '沿路西行',
    timeline: ['张骞', '汉唐', '敦煌', '高昌', '长安', '海陆互通'],
    experiences: [
      { title: '驼铃问路', icon: sharedIcons.dialogue },
      { title: '文书释读', icon: sharedIcons.scroll },
      { title: '商旅签语', icon: sharedIcons.wish },
      { title: '古道影像', icon: sharedIcons.video },
    ],
    sites: [
      {
        id: 'changan',
        name: '长安',
        label: '万邦来朝',
        x: 60,
        y: 45,
        photo: cultureAssets.silkRoadMap,
        description: '城阙之下车马汇聚，东方都城成为古道启程的灿烂灯火。',
      },
      {
        id: 'dunhuang',
        name: '敦煌',
        label: '沙州明珠',
        x: 38,
        y: 42,
        photo: cultureAssets.siteLongmen,
        description: '鸣沙与月牙相望，壁画、经卷和胡旋舞在洞窟中留住远方。',
      },
      {
        id: 'jiayuguan',
        name: '嘉峪关',
        label: '天下雄关',
        x: 43,
        y: 39,
        photo: cultureAssets.silkRoadMap,
        description: '关城横卧戈壁，出入之间便是中原与西域的辽阔交界。',
      },
      {
        id: 'turpan',
        name: '吐鲁番',
        label: '绿洲火州',
        x: 28,
        y: 36,
        photo: cultureAssets.oceanScroll,
        description: '葡萄沟与古城遗址相互照面，绿洲托住往来商旅的歇脚处。',
      },
    ],
  },
  {
    id: 'tea',
    title: '茶文化地图',
    shortTitle: '茶文化',
    subtitle: '茶烟入山',
    icon: cultureAssets.iconThemeTea,
    enabled: false,
    eyebrow: '松风煮水 · 一盏见山河',
    headline: '茶文化地图',
    intro: '茶烟从山野升起，流入市井、文会与远行之路，清苦回甘之间藏着风雅。',
    mapImage: cultureAssets.daoMap,
    scrollImage: cultureAssets.shopScroll,
    scrollTitle: '茶事风雅长卷',
    centerTitle: '茶文化体验中心',
    actionText: '入席闻香',
    timeline: ['神农', '唐煎茶', '宋点茶', '明清', '茶马道', '今日茶席'],
    experiences: [
      { title: '茶席问答', icon: sharedIcons.dialogue },
      { title: '茶经摘读', icon: sharedIcons.scroll },
      { title: '闻香签', icon: sharedIcons.wish },
      { title: '茶山影像', icon: sharedIcons.video },
    ],
    sites: [
      {
        id: 'wuyi',
        name: '武夷山',
        label: '岩骨花香',
        x: 70,
        y: 62,
        photo: cultureAssets.shopPoster,
        description: '岩壁与溪声养出茶香，焙火之后仍有山骨清气。',
      },
      {
        id: 'longjing',
        name: '西湖龙井',
        label: '江南春芽',
        x: 73,
        y: 55,
        photo: cultureAssets.shopPostcard,
        description: '一湖春水映着茶垄，新芽把江南的清明留在杯中。',
      },
      {
        id: 'yunnan',
        name: '云南普洱',
        label: '古树茶山',
        x: 48,
        y: 72,
        photo: cultureAssets.shopScroll,
        description: '古茶树扎根云岭，岁月在一饼茶里慢慢陈成温润。',
      },
      {
        id: 'anjxi',
        name: '安溪',
        label: '观音兰韵',
        x: 69,
        y: 68,
        photo: cultureAssets.daoScroll,
        description: '兰香入盏，山风穿堂，乌龙茶韵在闽南丘陵间流转。',
      },
    ],
  },
  {
    id: 'intangible',
    title: '非遗文化地图',
    shortTitle: '非遗文化',
    subtitle: '百工百艺',
    icon: cultureAssets.iconThemeIntangible,
    enabled: false,
    eyebrow: '手上山河 · 人间百艺',
    headline: '非遗文化地图',
    intro: '一针一线，一锤一火，技艺把生活磨成光，也把乡土记忆留给后来人。',
    mapImage: cultureAssets.oceanScroll,
    scrollImage: cultureAssets.shopPoster,
    scrollTitle: '非遗百工长卷',
    centerTitle: '非遗文化体验中心',
    actionText: '观作入艺',
    timeline: ['口传', '家学', '行会', '展演', '保护', '新生'],
    experiences: [
      { title: '匠人问答', icon: sharedIcons.dialogue },
      { title: '谱录释读', icon: sharedIcons.scroll },
      { title: '灵感抽签', icon: sharedIcons.wish },
      { title: '工坊影像', icon: sharedIcons.video },
    ],
    sites: [
      {
        id: 'suzhou',
        name: '苏州缂丝',
        label: '通经断纬',
        x: 74,
        y: 54,
        photo: cultureAssets.shopPoster,
        description: '丝线在指尖交错，花鸟楼阁被一寸寸织进光影。',
      },
      {
        id: 'jingdezhen',
        name: '景德镇',
        label: '瓷火千年',
        x: 66,
        y: 61,
        photo: cultureAssets.shopPostcard,
        description: '窑火昼夜不息，泥土经由火焰成为温润如玉的器物。',
      },
      {
        id: 'yangzhou',
        name: '扬州雕版',
        label: '墨香入木',
        x: 71,
        y: 51,
        photo: cultureAssets.shopScroll,
        description: '刀锋行于木上，字迹与书香从刻痕里慢慢醒来。',
      },
      {
        id: 'foshan',
        name: '佛山醒狮',
        label: '鼓点生风',
        x: 63,
        y: 74,
        photo: cultureAssets.oceanScroll,
        description: '鼓声一响，狮头昂起，岭南街巷便有了热烈的精神。',
      },
    ],
  },
  {
    id: 'folk',
    title: '民俗信仰地图',
    shortTitle: '更多主题',
    subtitle: '万象待启',
    icon: cultureAssets.iconThemeMore,
    enabled: false,
    eyebrow: '海潮有信 · 人间同愿',
    headline: '民俗信仰地图',
    intro: '灯会、庙会、海祭与岁时仪式，托起人们对平安、丰收与远行的共同想象。',
    mapImage: cultureAssets.oceanScroll,
    scrollImage: cultureAssets.oceanScroll,
    scrollTitle: '海洋信俗长卷',
    centerTitle: '民俗文化体验中心',
    actionText: '随潮观礼',
    timeline: ['岁首', '上元', '清明', '端午', '中秋', '岁暮'],
    experiences: [
      { title: '民俗问答', icon: sharedIcons.dialogue },
      { title: '祭文释读', icon: sharedIcons.scroll },
      { title: '平安签', icon: sharedIcons.wish },
      { title: '海祭影像', icon: sharedIcons.video },
    ],
    sites: [
      {
        id: 'meizhou',
        name: '湄洲岛',
        label: '妈祖祖庭',
        x: 70,
        y: 68,
        photo: cultureAssets.oceanScroll,
        description: '潮水拍岸，香火连船，人们把远航的祈愿交给海风。',
      },
      {
        id: 'quanzhou',
        name: '泉州',
        label: '海丝遗韵',
        x: 69,
        y: 66,
        photo: cultureAssets.silkRoadMap,
        description: '古港回声仍在，多元信俗随着商船与市井一同生长。',
      },
      {
        id: 'chaoshan',
        name: '潮汕',
        label: '游神赛会',
        x: 67,
        y: 72,
        photo: cultureAssets.shopPostcard,
        description: '锣鼓、灯彩与街巷人潮汇成节庆，热闹里藏着乡土秩序。',
      },
      {
        id: 'tianjin',
        name: '天津天后宫',
        label: '河海同祈',
        x: 61,
        y: 32,
        photo: cultureAssets.oceanScroll,
        description: '河海交会之处，庙宇守着商旅与船家的平安愿望。',
      },
    ],
  },
];

function getInitialSite(theme: CultureMapTheme) {
  return theme.sites[Math.min(2, theme.sites.length - 1)].id;
}

export function CultureMapPage({ onEnterBuddhism }: CultureMapPageProps) {
  const [toast, setToast] = useState('');
  const [activeThemeId, setActiveThemeId] = useState<ThemeId>('buddhism');
  const activeTheme = cultureMapThemes.find((theme) => theme.id === activeThemeId) ?? cultureMapThemes[0];
  const [activeSiteIdByTheme, setActiveSiteIdByTheme] = useState<Record<string, string>>({
    buddhism: 'longmen',
  });
  const activeSiteId = activeSiteIdByTheme[activeTheme.id] ?? getInitialSite(activeTheme);
  const activeSite = activeTheme.sites.find((site) => site.id === activeSiteId) ?? activeTheme.sites[0];

  const selectTheme = (themeId: ThemeId) => {
    const nextTheme = cultureMapThemes.find((theme) => theme.id === themeId);
    if (!nextTheme) {
      return;
    }
    if (!nextTheme.enabled) {
      setToast('此卷尚未启封，敬请期待');
      window.setTimeout(() => setToast(''), 2200);
      return;
    }
    setActiveThemeId(themeId);
    setActiveSiteIdByTheme((current) => ({
      ...current,
      [themeId]: current[themeId] ?? getInitialSite(nextTheme),
    }));
  };

  const selectSite = (siteId: string) => {
    setActiveSiteIdByTheme((current) => ({
      ...current,
      [activeTheme.id]: siteId,
    }));
  };

  const handleThemeAction = () => {
    if (activeTheme.id === 'buddhism') {
      onEnterBuddhism();
    }
  };

  return (
    <div className="page culture-map-page page-fade">
      <section className="culture-map-console" aria-label={activeTheme.title}>
        <div className="culture-theme-tabs" aria-label="文化主题菜单">
          {cultureMapThemes.map((theme) => (
            <button
              className={activeTheme.id === theme.id ? 'active' : ''}
              type="button"
              key={theme.id}
              aria-disabled={!theme.enabled}
              onClick={() => selectTheme(theme.id)}
            >
              <i>
                <img src={theme.icon} alt="" aria-hidden="true" />
              </i>
              <span>{theme.shortTitle}</span>
              <small>{theme.subtitle}</small>
            </button>
          ))}
        </div>

        <div className="culture-map-grid">
          <aside className="map-scroll-rail">
            <div className="rail-title">{activeTheme.scrollTitle}</div>
            <div className="rail-scroll-frame">
              <img src={activeTheme.scrollImage} alt={activeTheme.scrollTitle} />
              <button type="button" onClick={handleThemeAction} aria-label={activeTheme.actionText}>
                入卷
              </button>
            </div>
            <button className="rail-action" type="button" onClick={handleThemeAction}>
              {activeTheme.actionText}
            </button>
          </aside>

          <main className="map-stage-panel">
            <div className="map-stage-heading">
              <div>
                <p className="eyebrow">{activeTheme.eyebrow}</p>
                <h1>{activeTheme.headline}</h1>
                <p>{activeTheme.intro}</p>
              </div>
              <div className="map-compass" aria-hidden="true">
                <span>北</span>
                <i />
              </div>
            </div>

            <div className="china-map-canvas">
              <img src={activeTheme.mapImage} alt={activeTheme.title} />
              {activeTheme.sites.map((site) => (
                <button
                  className={`culture-map-hotspot ${activeSite.id === site.id ? 'active' : ''}`}
                  type="button"
                  key={site.id}
                  style={{ left: `${site.x}%`, top: `${site.y}%` }}
                  onClick={() => selectSite(site.id)}
                >
                  <span>{site.name}</span>
                </button>
              ))}
            </div>

            <div className="map-era-strip" aria-label={`${activeTheme.shortTitle}时间轴`}>
              <button className="play-orb" type="button" onClick={handleThemeAction} aria-label={activeTheme.actionText}>
                ▶
              </button>
              {activeTheme.timeline.map((mark) => (
                <span key={mark}>{mark}</span>
              ))}
            </div>
          </main>

          <aside className="map-side-panel">
            <div className="side-card culture-center-card">
              <p className="eyebrow">{activeTheme.centerTitle}</p>
              <div className="experience-icons">
                {activeTheme.experiences.map((item) => (
                  <button type="button" key={item.title} onClick={handleThemeAction}>
                    <span>
                      <img src={item.icon} alt="" aria-hidden="true" />
                    </span>
                    <small>{item.title}</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="side-card site-portrait-card" aria-live="polite">
              <p className="eyebrow">画中一隅</p>
              <img src={activeSite.photo} alt={`${activeSite.name}图景`} />
              <span>{activeSite.label}</span>
              <h2>{activeSite.name}</h2>
              <p>{activeSite.description}</p>
            </div>

            <div className="side-card site-list-card">
              <p className="eyebrow">热门节点</p>
              {activeTheme.sites.map((site) => (
                <button
                  className={activeSite.id === site.id ? 'active' : ''}
                  type="button"
                  key={site.id}
                  onClick={() => selectSite(site.id)}
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
