import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cultureAssets } from '../../data/assets';
import { fortunes } from '../../data/fortunes';
import { BuddhistTimeline } from '../sections/BuddhistTimeline';
import { LongmenVideoDemo } from '../widgets/LongmenVideoDemo';
import { ScriptureExplain } from '../widgets/ScriptureExplain';
import { WishFortune } from '../widgets/WishFortune';

interface CultureMapPageProps {
  onEnterBuddhism: () => void;
}

type ThemeId = 'buddhism' | 'dao' | 'silk-road' | 'tea' | 'intangible' | 'folk';
type MobilePanel = 'scroll' | 'experience';
type MobileFeature = 'chat' | 'scripture' | 'wish' | 'fortune';

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
        photo: cultureAssets.siteLongmenBuddha,
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

const scrollTourNodes = [
  { id: 'longmen', name: '龙门石窟', x: 52, y: 44 },
  { id: 'putuo', name: '普陀山', x: 74, y: 62 },
  { id: 'lingyin', name: '灵隐寺', x: 34, y: 24 },
  { id: 'potala', name: '布达拉宫', x: 47, y: 70 },
  { id: 'wutai', name: '五台山', x: 30, y: 86 },
];

const mobileTimelineNodes: Array<{ id: string; title: string; period: string; siteId?: string }> = [
  { id: 'arrival', title: '佛教传入中国', period: '东汉时期' },
  { id: 'changan', title: '长安题壁', period: '隋唐时期' },
  { id: 'longmen', title: '龙门石窟', period: '北魏时期', siteId: 'longmen' },
  { id: 'wutai', title: '五台山', period: '文殊道场', siteId: 'wutai' },
  { id: 'putuo', title: '普陀山', period: '观音圣地', siteId: 'putuo' },
  { id: 'potala', title: '布达拉宫', period: '藏传佛教', siteId: 'potala' },
];

const mobileFeatureItems: Array<{ id: MobileFeature; title: string; icon: string }> = [
  { id: 'chat', title: '与神灵交流', icon: sharedIcons.dialogue },
  { id: 'scripture', title: '经文翻译', icon: sharedIcons.scroll },
  { id: 'wish', title: '许愿祈福', icon: sharedIcons.wish },
  { id: 'fortune', title: '摇签问卜', icon: sharedIcons.video },
];

const mobileVerses = [
  {
    text: '一切有为法，如梦幻泡影，如露亦如电，应作如是观。',
    source: '《金刚经》',
  },
  {
    text: '心若不动，万法皆安；念起觉照，处处清明。',
    source: '禅修偈语',
  },
  {
    text: '观自在，照见当下，愿以慈悲安住一念。',
    source: '观音偈语',
  },
];

export function CultureMapPage({ onEnterBuddhism: _onEnterBuddhism }: CultureMapPageProps) {
  const [toast, setToast] = useState('');
  const [isScrollViewerOpen, setIsScrollViewerOpen] = useState(false);
  const [tourSignal, setTourSignal] = useState(0);
  const videoSectionRef = useRef<HTMLDivElement | null>(null);
  const mobileViewportQuery = '(max-width: 767px), (max-device-width: 767px), (hover: none) and (pointer: coarse)';
  const [isMobileViewport, setIsMobileViewport] = useState(() => window.matchMedia(mobileViewportQuery).matches);
  const [activeMobilePanel, setActiveMobilePanel] = useState<MobilePanel>('scroll');
  const [activeMobileMilestone, setActiveMobileMilestone] = useState('longmen');
  const [activeMobileFeature, setActiveMobileFeature] = useState<MobileFeature>('chat');
  const [mobileChatText, setMobileChatText] = useState('');
  const [mobileChatReply, setMobileChatReply] = useState('静心片刻，把愿望说清楚，答案便会从当下的行动里慢慢显现。');
  const [mobileVerseIndex, setMobileVerseIndex] = useState(0);
  const [mobileScriptureText, setMobileScriptureText] = useState('');
  const [mobileScriptureResult, setMobileScriptureResult] = useState('');
  const [mobileWishText, setMobileWishText] = useState('');
  const [mobileWishSaved, setMobileWishSaved] = useState('');
  const [mobileFortuneIndex, setMobileFortuneIndex] = useState(0);
  const [activeThemeId, setActiveThemeId] = useState<ThemeId>('buddhism');
  const activeTheme = cultureMapThemes.find((theme) => theme.id === activeThemeId) ?? cultureMapThemes[0];
  const [activeSiteIdByTheme, setActiveSiteIdByTheme] = useState<Record<string, string>>({
    buddhism: 'longmen',
  });
  const activeSiteId = activeSiteIdByTheme[activeTheme.id] ?? getInitialSite(activeTheme);
  const activeSite = activeTheme.sites.find((site) => site.id === activeSiteId) ?? activeTheme.sites[0];
  const mobileVerse = mobileVerses[mobileVerseIndex];
  const mobileFortune = fortunes[mobileFortuneIndex % fortunes.length];

  useEffect(() => {
    const mobileQuery = window.matchMedia(mobileViewportQuery);
    const syncViewport = () => setIsMobileViewport(mobileQuery.matches);

    syncViewport();
    mobileQuery.addEventListener('change', syncViewport);
    return () => mobileQuery.removeEventListener('change', syncViewport);
  }, []);

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

  const selectScrollNode = (siteId: string, shouldCloseViewer = false) => {
    setActiveSiteIdByTheme((current) => ({ ...current, buddhism: siteId }));
    if (siteId === 'longmen') {
      setTourSignal((current) => current + 1);
      window.setTimeout(() => {
        videoSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
    if (shouldCloseViewer) {
      setIsScrollViewerOpen(false);
    }
  };

  const selectMobileMilestone = (node: (typeof mobileTimelineNodes)[number]) => {
    setActiveMobileMilestone(node.id);
    if (node.siteId) {
      setActiveSiteIdByTheme((current) => ({ ...current, buddhism: node.siteId ?? current.buddhism }));
    }
  };

  const openMobileImmersiveExperience = () => {
    setActiveMobilePanel('experience');
    setTourSignal((current) => current + 1);
    window.setTimeout(() => {
      videoSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  const askMobileGuanyin = () => {
    const trimmed = mobileChatText.trim();
    setMobileChatReply(trimmed ? `愿你安住此心，先把“${trimmed}”化成今日能做的一小步。` : '愿你先静心呼吸，再把心愿慢慢说给自己听。');
  };

  const translateMobileScripture = () => {
    const trimmed = mobileScriptureText.trim();
    setMobileScriptureResult(trimmed ? '可译为：放下执着，照见本心，在平常处生出清明与慈悲。' : '请输入一段经文，再开始翻译。');
  };

  const saveMobileWish = () => {
    const trimmed = mobileWishText.trim();
    setMobileWishSaved(trimmed ? `已写下愿望：${trimmed}` : '请先写下一个愿望。');
  };

  const drawMobileFortune = () => {
    setMobileFortuneIndex((current) => (current + 1) % fortunes.length);
  };

  const scrollViewer = isScrollViewerOpen ? createPortal(
    <div className="image-viewer scroll-viewer" role="dialog" aria-modal="true" aria-label="佛教文脉长图全屏预览">
      <div className="image-viewer-inner scroll-viewer-inner">
        <button className="close-button" type="button" onClick={() => setIsScrollViewerOpen(false)}>
          关闭
        </button>
        <div className="scroll-viewer-stage">
          <img src={cultureAssets.buddhistScroll} alt="佛教文脉长图全屏预览" />
          {scrollTourNodes.map((node) => (
            <button
              className={`scroll-site-node viewer-node ${activeSiteIdByTheme.buddhism === node.id ? 'is-selected' : ''}`}
              type="button"
              key={node.id}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onClick={() => selectScrollNode(node.id, true)}
            >
              {node.name}
            </button>
          ))}
        </div>
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
          {!isMobileViewport && (
          <aside className="map-scroll-rail" aria-label={activeTheme.scrollTitle}>
            <div className="rail-title">{activeTheme.scrollTitle}</div>
            <div className="rail-scroll-frame">
              <div className="rail-scroll-canvas">
                <img src={activeTheme.scrollImage} alt={activeTheme.scrollTitle} />
                {activeTheme.id === 'buddhism' && scrollTourNodes.map((node) => (
                  <button
                    className={`rail-site-node ${node.id === 'longmen' ? 'rail-longmen-node' : ''} ${activeSiteIdByTheme.buddhism === node.id ? 'is-selected' : ''}`}
                    type="button"
                    key={node.id}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    onClick={() => selectScrollNode(node.id)}
                  >
                    {node.name}
                  </button>
                ))}
              </div>
            </div>
            <button className="rail-action" type="button" onClick={() => setIsScrollViewerOpen(true)}>
              {activeTheme.actionText}
            </button>
          </aside>
          )}

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
            <p className="mobile-map-hint">点击地图上的标记，查看详细介绍。</p>
          </main>

          {!isMobileViewport && (
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
          )}
        </div>

        {activeTheme.id === 'buddhism' && isMobileViewport && (
          <div className="mobile-buddhist-panels">
            <div className="mobile-panel-tabs" role="tablist" aria-label="佛教文化移动端面板">
              <button
                className={activeMobilePanel === 'scroll' ? 'active' : ''}
                type="button"
                role="tab"
                aria-selected={activeMobilePanel === 'scroll'}
                onClick={() => setActiveMobilePanel('scroll')}
              >
                佛教文脉长图
              </button>
              <button
                className={activeMobilePanel === 'experience' ? 'active' : ''}
                type="button"
                role="tab"
                aria-selected={activeMobilePanel === 'experience'}
                onClick={() => setActiveMobilePanel('experience')}
              >
                佛教文化体验中心
              </button>
            </div>

            {activeMobilePanel === 'scroll' && (
              <section className="mobile-scroll-panel" aria-label="佛教文脉长图">
                <div className="mobile-panel-heading">
                  <div>
                    <p className="eyebrow">文脉长卷</p>
                    <h2>佛教文脉长图</h2>
                  </div>
                  <button type="button" onClick={openMobileImmersiveExperience}>
                    沉浸式体验
                  </button>
                </div>

                <div className="mobile-timeline" aria-label="佛教文脉时间节点">
                  {mobileTimelineNodes.map((node) => (
                    <button
                      className={activeMobileMilestone === node.id ? 'active' : ''}
                      type="button"
                      key={node.id}
                      onClick={() => selectMobileMilestone(node)}
                    >
                      <span>{node.title}</span>
                      <small>{node.period}</small>
                    </button>
                  ))}
                </div>

                <div className="mobile-scroll-card">
                  <div className="mobile-scroll-image">
                    <img src={cultureAssets.buddhistScroll} alt="佛教文脉长图" />
                    {scrollTourNodes.map((node) => (
                      <button
                        className={`mobile-scroll-node ${node.id === 'longmen' ? 'is-longmen' : ''} ${activeSiteIdByTheme.buddhism === node.id ? 'is-selected' : ''}`}
                        type="button"
                        key={node.id}
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        onClick={() => {
                          setActiveMobileMilestone(node.id);
                          setActiveSiteIdByTheme((current) => ({ ...current, buddhism: node.id }));
                        }}
                      >
                        {node.name}
                      </button>
                    ))}
                  </div>
                  <span>上滑查看更多</span>
                </div>

                <button className="mobile-fullscreen-button" type="button" onClick={() => setIsScrollViewerOpen(true)}>
                  全屏查看长卷
                </button>
              </section>
            )}

            {activeMobilePanel === 'experience' && (
              <section className="mobile-experience-panel" aria-label="佛教文化体验中心" ref={videoSectionRef}>
                <div className="mobile-experience-heading">
                  <p className="eyebrow">互动体验</p>
                  <h2>佛教文化体验中心</h2>
                  <p>探索佛教智慧，感悟心灵启迪</p>
                </div>

                <div className="mobile-feature-grid">
                  {mobileFeatureItems.map((item) => (
                    <button
                      className={activeMobileFeature === item.id ? 'active' : ''}
                      type="button"
                      key={item.id}
                      onClick={() => setActiveMobileFeature(item.id)}
                    >
                      <img src={item.icon} alt="" aria-hidden="true" />
                      <span>{item.title}</span>
                    </button>
                  ))}
                </div>

                <article className="mobile-experience-card">
                  <div className="mobile-card-copy">
                    <h3>与观音菩萨对话</h3>
                    <p>以虔诚之心，向观音菩萨诉说您的心愿</p>
                    <textarea
                      value={mobileChatText}
                      onChange={(event) => setMobileChatText(event.target.value)}
                      placeholder="请输入您想倾诉的心愿..."
                      rows={3}
                    />
                    <button type="button" onClick={askMobileGuanyin}>开始对话</button>
                    <small>{mobileChatReply}</small>
                  </div>
                  <img src={cultureAssets.siteLongmenBuddha} alt="观音菩萨造像" />
                </article>

                <article className="mobile-experience-card verse-card">
                  <div className="mobile-card-copy">
                    <h3>今日偈语</h3>
                    <blockquote>
                      “{mobileVerse.text}”
                      <cite>——{mobileVerse.source}</cite>
                    </blockquote>
                    <button type="button" onClick={() => setMobileVerseIndex((current) => (current + 1) % mobileVerses.length)}>
                      换一句
                    </button>
                  </div>
                  <img src={cultureAssets.siteLongmen} alt="佛教造像石刻" />
                </article>

                <article className="mobile-experience-card">
                  <div className="mobile-card-copy">
                    <h3>经文翻译</h3>
                    <textarea
                      value={mobileScriptureText}
                      onChange={(event) => setMobileScriptureText(event.target.value)}
                      placeholder="请输入经文或偈语..."
                      rows={3}
                    />
                    <button type="button" onClick={translateMobileScripture}>立即翻译</button>
                    {mobileScriptureResult && <small>{mobileScriptureResult}</small>}
                  </div>
                  <img src={cultureAssets.shopScroll} alt="经卷书册" />
                </article>

                <article className="mobile-experience-card">
                  <div className="mobile-card-copy">
                    <h3>许愿祈福</h3>
                    <input
                      value={mobileWishText}
                      onChange={(event) => setMobileWishText(event.target.value)}
                      placeholder="写下您的愿望"
                    />
                    <button type="button" onClick={saveMobileWish}>写下愿望</button>
                    {mobileWishSaved && <small>{mobileWishSaved}</small>}
                  </div>
                  <img src={cultureAssets.longmenCover} alt="祈福灯影" />
                </article>

                <article className="mobile-experience-card fortune-mobile-card">
                  <div className="mobile-card-copy">
                    <h3>摇签问卜</h3>
                    <p>{mobileFortune.name}：{mobileFortune.verse}</p>
                    <button type="button" onClick={drawMobileFortune}>开始摇签</button>
                    <small className="mobile-disclaimer">本功能仅为文化互动体验，不具有真实预测或宗教占卜含义。</small>
                  </div>
                  <div className="fortune-tube" aria-hidden="true">上上签</div>
                </article>

                <div className="mobile-longmen-video">
                  <LongmenVideoDemo openSignal={tourSignal} />
                </div>
              </section>
            )}
          </div>
        )}
      </section>

      {activeTheme.id === 'buddhism' && !isMobileViewport && (
        <section className="flat-buddhist-content" aria-label="佛教文化平铺内容">
          <div className="flat-content-section video-flat-section" ref={videoSectionRef}>
            <div className="flat-section-copy">
              <p className="eyebrow">沿图入境</p>
              <h3>龙门石窟沉浸式体验</h3>
            </div>
            <div className="immersive-tour-grid video-only">
              <LongmenVideoDemo openSignal={tourSignal} />
            </div>
          </div>

          <div className="flat-content-section ritual-scripture-section exhibit-stack-section">
            <div className="flat-section-copy exhibit-section-heading">
              <p className="eyebrow">禅意互动</p>
              <h3>经文释义与愿望摇签</h3>
            </div>
            <div className="quadrant-exhibit-grid">
              <div className="quadrant-column">
                <div className="quadrant-cell interaction-cell">
                  <ScriptureExplain />
                </div>
                <div className="quadrant-cell">
                  <div className="inline-video-card narrative-video-card">
                    <video src={cultureAssets.scriptureVideo} autoPlay muted loop controls playsInline />
                    <div className="video-caption">
                      <span>大佛静观</span>
                      <p>以大佛影像承接签文的静心片刻，让愿望在庄严造像前缓缓沉淀。</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="quadrant-column">
                <div className="quadrant-cell">
                  <div className="inline-video-card narrative-video-card">
                    <video src={cultureAssets.blessingVideo} autoPlay muted loop controls playsInline />
                    <div className="video-caption">
                      <span>红丝带祈福</span>
                      <p>红色愿带随风摇曳，与经文释义里的放下、清明和祝愿互相呼应。</p>
                    </div>
                  </div>
                </div>
                <div className="quadrant-cell interaction-cell">
                  <WishFortune />
                  <div className="exhibit-note-grid" aria-label="摇签祈福导览">
                    <span>写愿</span>
                    <span>摇签</span>
                    <span>读偈</span>
                    <span>观影</span>
                  </div>
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
