import { useState } from 'react';
import { createPortal } from 'react-dom';
import { cultureAssets } from '../../data/assets';
import { BuddhistTimeline } from '../sections/BuddhistTimeline';
import { LongmenVideoDemo } from '../widgets/LongmenVideoDemo';
import { ScriptureExplain } from '../widgets/ScriptureExplain';
import { WishFortune } from '../widgets/WishFortune';

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
  location: string;
  period: string;
  keywords: string[];
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
    actionText: '入卷观影',
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
        location: '浙江舟山',
        period: '唐宋以后',
        keywords: ['观音道场', '海天佛国', '朝圣名山'],
      },
      {
        id: 'lingyin',
        name: '灵隐寺',
        label: '江南禅林',
        x: 72,
        y: 55,
        photo: cultureAssets.siteLingyin,
        description: '飞来峰下苔痕深浅，钟声穿过松影，把江南山水染成一片清寂。',
        location: '浙江杭州',
        period: '东晋以来',
        keywords: ['江南禅林', '飞来峰', '寺院山水'],
      },
      {
        id: 'longmen',
        name: '龙门石窟',
        label: '石窟造像',
        x: 57,
        y: 43,
        photo: cultureAssets.siteLongmen,
        description: '伊水两岸，万龛向光，北魏至唐的刀锋把慈悲与盛世一同刻入山岩。',
        location: '河南洛阳',
        period: '北魏至唐',
        keywords: ['石窟造像', '皇家营建', '中原审美'],
      },
      {
        id: 'potala',
        name: '布达拉宫',
        label: '高原佛宫',
        x: 26,
        y: 57,
        photo: cultureAssets.sitePotala,
        description: '白墙红宫倚雪域而起，云影、经幡与晨光共同托起高原的庄严。',
        location: '西藏拉萨',
        period: '吐蕃至清',
        keywords: ['高原佛宫', '藏传佛教', '宫堡建筑'],
      },
      {
        id: 'wutai',
        name: '五台山',
        label: '文殊道场',
        x: 58,
        y: 30,
        photo: cultureAssets.siteWutai,
        description: '五峰环抱，清凉入怀，朝山人的脚步在风雪与香火中绵延不息。',
        location: '山西忻州',
        period: '北魏以来',
        keywords: ['文殊道场', '清凉圣境', '佛教名山'],
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
        location: '四川成都',
        period: '东汉以来',
        keywords: ['洞天福地', '青城幽意', '道教名山'],
      },
      {
        id: 'wudang',
        name: '武当山',
        label: '玄岳仙山',
        x: 57,
        y: 50,
        photo: cultureAssets.daoMap,
        description: '金殿映日，群峰拱卫，武当把山势与道法凝成一线庄严。',
        location: '湖北十堰',
        period: '明代鼎盛',
        keywords: ['玄岳仙山', '真武信仰', '宫观群'],
      },
      {
        id: 'longhu',
        name: '龙虎山',
        label: '丹崖水府',
        x: 70,
        y: 60,
        photo: cultureAssets.daoScroll,
        description: '碧水绕丹崖而过，符箓与山水在此留下悠远的回声。',
        location: '江西鹰潭',
        period: '东汉以来',
        keywords: ['天师道', '丹霞水府', '符箓传统'],
      },
      {
        id: 'maoshan',
        name: '茅山',
        label: '上清故地',
        x: 72,
        y: 52,
        photo: cultureAssets.daoMap,
        description: '松风入殿，古坛沉静，上清一脉在江南烟雨里绵延。',
        location: '江苏句容',
        period: '魏晋南北朝',
        keywords: ['上清派', '江南道脉', '坛观遗韵'],
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
        location: '陕西西安',
        period: '汉唐',
        keywords: ['都城起点', '万邦来朝', '商旅汇聚'],
      },
      {
        id: 'dunhuang',
        name: '敦煌',
        label: '沙州明珠',
        x: 38,
        y: 42,
        photo: cultureAssets.siteLongmen,
        description: '鸣沙与月牙相望，壁画、经卷和胡旋舞在洞窟中留住远方。',
        location: '甘肃敦煌',
        period: '十六国至元',
        keywords: ['莫高窟', '壁画经变', '沙州绿洲'],
      },
      {
        id: 'jiayuguan',
        name: '嘉峪关',
        label: '天下雄关',
        x: 43,
        y: 39,
        photo: cultureAssets.silkRoadMap,
        description: '关城横卧戈壁，出入之间便是中原与西域的辽阔交界。',
        location: '甘肃嘉峪关',
        period: '明代',
        keywords: ['关城', '河西走廊', '边塞交通'],
      },
      {
        id: 'turpan',
        name: '吐鲁番',
        label: '绿洲火州',
        x: 28,
        y: 36,
        photo: cultureAssets.oceanScroll,
        description: '葡萄沟与古城遗址相互照面，绿洲托住往来商旅的歇脚处。',
        location: '新疆吐鲁番',
        period: '汉唐以来',
        keywords: ['绿洲', '高昌故城', '西域交通'],
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
        location: '福建武夷山',
        period: '宋元以来',
        keywords: ['岩茶', '山场', '焙火'],
      },
      {
        id: 'longjing',
        name: '西湖龙井',
        label: '江南春芽',
        x: 73,
        y: 55,
        photo: cultureAssets.shopPostcard,
        description: '一湖春水映着茶垄，新芽把江南的清明留在杯中。',
        location: '浙江杭州',
        period: '明清以来',
        keywords: ['绿茶', '江南春芽', '西湖山水'],
      },
      {
        id: 'yunnan',
        name: '云南普洱',
        label: '古树茶山',
        x: 48,
        y: 72,
        photo: cultureAssets.shopScroll,
        description: '古茶树扎根云岭，岁月在一饼茶里慢慢陈成温润。',
        location: '云南茶山',
        period: '唐宋以来',
        keywords: ['古树茶', '茶马古道', '陈化'],
      },
      {
        id: 'anjxi',
        name: '安溪',
        label: '观音兰韵',
        x: 69,
        y: 68,
        photo: cultureAssets.daoScroll,
        description: '兰香入盏，山风穿堂，乌龙茶韵在闽南丘陵间流转。',
        location: '福建安溪',
        period: '清代以来',
        keywords: ['乌龙茶', '铁观音', '兰韵'],
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
        location: '江苏苏州',
        period: '宋元以来',
        keywords: ['缂丝', '织造', '丝线工艺'],
      },
      {
        id: 'jingdezhen',
        name: '景德镇',
        label: '瓷火千年',
        x: 66,
        y: 61,
        photo: cultureAssets.shopPostcard,
        description: '窑火昼夜不息，泥土经由火焰成为温润如玉的器物。',
        location: '江西景德镇',
        period: '宋代以来',
        keywords: ['瓷都', '窑火', '青白瓷'],
      },
      {
        id: 'yangzhou',
        name: '扬州雕版',
        label: '墨香入木',
        x: 71,
        y: 51,
        photo: cultureAssets.shopScroll,
        description: '刀锋行于木上，字迹与书香从刻痕里慢慢醒来。',
        location: '江苏扬州',
        period: '明清',
        keywords: ['雕版印刷', '书坊', '墨香'],
      },
      {
        id: 'foshan',
        name: '佛山醒狮',
        label: '鼓点生风',
        x: 63,
        y: 74,
        photo: cultureAssets.oceanScroll,
        description: '鼓声一响，狮头昂起，岭南街巷便有了热烈的精神。',
        location: '广东佛山',
        period: '明清以来',
        keywords: ['醒狮', '鼓点', '岭南民俗'],
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
        location: '福建莆田',
        period: '宋代以来',
        keywords: ['妈祖信俗', '海祭', '祖庭'],
      },
      {
        id: 'quanzhou',
        name: '泉州',
        label: '海丝遗韵',
        x: 69,
        y: 66,
        photo: cultureAssets.silkRoadMap,
        description: '古港回声仍在，多元信俗随着商船与市井一同生长。',
        location: '福建泉州',
        period: '宋元',
        keywords: ['海丝古港', '多元信俗', '商贸城市'],
      },
      {
        id: 'chaoshan',
        name: '潮汕',
        label: '游神赛会',
        x: 67,
        y: 72,
        photo: cultureAssets.shopPostcard,
        description: '锣鼓、灯彩与街巷人潮汇成节庆，热闹里藏着乡土秩序。',
        location: '广东潮汕',
        period: '明清以来',
        keywords: ['游神赛会', '灯彩', '乡土礼俗'],
      },
      {
        id: 'tianjin',
        name: '天津天后宫',
        label: '河海同祈',
        x: 61,
        y: 32,
        photo: cultureAssets.oceanScroll,
        description: '河海交会之处，庙宇守着商旅与船家的平安愿望。',
        location: '天津',
        period: '元明以来',
        keywords: ['天后宫', '漕运', '河海祈愿'],
      },
    ],
  },
];

function getInitialSite(theme: CultureMapTheme) {
  return theme.sites[Math.min(2, theme.sites.length - 1)].id;
}

export function CultureMapPage({ onEnterBuddhism: _onEnterBuddhism }: CultureMapPageProps) {
  const [toast, setToast] = useState('');
  const [isScrollViewerOpen, setIsScrollViewerOpen] = useState(false);
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

  const scrollViewer = isScrollViewerOpen ? createPortal(
    <div className="image-viewer scroll-viewer" role="dialog" aria-modal="true" aria-label="佛教文脉长图全屏预览">
      <div className="image-viewer-inner scroll-viewer-inner">
        <button className="close-button" type="button" onClick={() => setIsScrollViewerOpen(false)}>
          关闭
        </button>
        <img src={cultureAssets.buddhistScroll} alt="佛教文脉长图全屏预览" />
      </div>
    </div>,
    document.body,
  ) : null;

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

        <div className="culture-map-grid flat-map-grid">
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
          </main>

          <aside className="map-side-panel">
            <div className="side-card site-portrait-card" aria-live="polite">
              <p className="eyebrow">画中一隅</p>
              <figure className="site-portrait-figure">
                <img src={activeSite.photo} alt={`${activeSite.name}图景`} />
                <figcaption>{activeSite.label}</figcaption>
              </figure>
              <div className="site-meta-grid">
                <span>位置：{activeSite.location}</span>
                <span>时期：{activeSite.period}</span>
              </div>
              <h2>{activeSite.name}</h2>
              <div className="keyword-row">
                {activeSite.keywords.map((keyword) => (
                  <em key={keyword}>{keyword}</em>
                ))}
              </div>
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

      {activeTheme.id === 'buddhism' && (
        <section className="flat-buddhist-content" aria-label="佛教文化平铺内容">
          <div className="flat-content-section video-flat-section">
            <div className="flat-section-copy">
              <p className="eyebrow">时空漫游</p>
              <h3>沉浸式游览</h3>
              <p>以长图与影像并置，沿佛教圣地与石窟造像的路径向前游览。</p>
              <button className="ghost-button" type="button" onClick={() => setIsScrollViewerOpen(true)}>
                全屏查看长卷
              </button>
            </div>
            <div className="immersive-tour-grid">
              <div className="flat-scroll-frame">
                <img src={cultureAssets.buddhistScroll} alt="佛教文脉长图" />
              </div>
              <LongmenVideoDemo />
            </div>
          </div>

          <div className="flat-content-section ritual-flat-section exhibit-stack-section">
            <div className="flat-section-copy exhibit-section-heading">
              <p className="eyebrow">清风一签</p>
              <h3>摇签与红丝带祈福</h3>
              <p>把一念愿望交给签文，也让红丝带在风中留下温柔的祈愿。展项以签文互动、祈福影像和愿望回响共同组成一段静心仪式。</p>
            </div>
            <div className="exhibit-content-grid">
              <div className="interaction-column">
                <WishFortune />
                <div className="exhibit-note-grid" aria-label="摇签祈福导览">
                  <span>写愿</span>
                  <span>摇签</span>
                  <span>读偈</span>
                  <span>观带</span>
                </div>
              </div>
              <div className="inline-video-card narrative-video-card">
                <video src={cultureAssets.blessingVideo} autoPlay muted loop controls playsInline />
                <div className="video-caption">
                  <span>红丝带祈福</span>
                  <p>红色愿带随风摇曳，象征人们把祝愿寄托于山门、古树与清风之间。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flat-content-section scripture-flat-section exhibit-stack-section">
            <div className="flat-section-copy exhibit-section-heading">
              <p className="eyebrow">经声如水</p>
              <h3>经文释义与大佛影像</h3>
              <p>在经文释义中理解佛教思想，再以影像回望大佛的庄严与静默。文字、白话释义与造像影像彼此呼应，形成可读、可观的展陈单元。</p>
            </div>
            <div className="exhibit-content-grid">
              <div className="interaction-column">
                <ScriptureExplain />
                <div className="exhibit-note-grid" aria-label="经文释义导览">
                  <span>选句</span>
                  <span>释义</span>
                  <span>换读</span>
                  <span>观佛</span>
                </div>
              </div>
              <div className="inline-video-card narrative-video-card">
                <video src={cultureAssets.scriptureVideo} autoPlay muted loop controls playsInline />
                <div className="video-caption">
                  <span>大佛影像</span>
                  <p>以近景影像呈现佛像面容、衣纹与石壁肌理，让经文释义落回可感知的艺术现场。</p>
                </div>
              </div>
            </div>
          </div>

          <BuddhistTimeline />
        </section>
      )}
      {scrollViewer}
      {toast && <div className="toast-panel">{toast}</div>}
    </div>
  );
}
