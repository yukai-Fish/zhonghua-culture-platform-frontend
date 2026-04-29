import { cultureAssets } from './assets';

export type ThemeStatus = 'open' | 'coming';

export interface CultureTheme {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  status: ThemeStatus;
}

export interface LongScrollPreview {
  id: string;
  title: string;
  image: string;
  statusText: string;
  description: string;
}

export const coreThemes: CultureTheme[] = [
  {
    id: 'dao',
    title: '道教文化地图',
    subtitle: '追溯道教洞天福地、名山宫观与修真文化的空间脉络',
    image: cultureAssets.daoMap,
    status: 'coming',
  },
  {
    id: 'buddhism',
    title: '佛教文化地图',
    subtitle: '从寺院石窟到经文传播，感受佛教文化在中国的融合发展',
    image: cultureAssets.buddhistMap,
    status: 'open',
  },
  {
    id: 'silk-road',
    title: '丝绸之路文化地图',
    subtitle: '沿着古道商旅与文明交流路线，探索中外文化互鉴之路',
    image: cultureAssets.silkRoadMap,
    status: 'coming',
  },
];

export const comingThemes = ['茶文化', '民族文化', '非遗文化', '海洋文化', '民俗信仰', '更多主题'];

export const longScrollPreviews: LongScrollPreview[] = [
  {
    id: 'dao-scroll',
    title: '道教文脉长卷',
    image: cultureAssets.daoScroll,
    statusText: '敬请期待',
    description: '以山川洞天、宫观人物与修真谱系构成长卷式文化预览。',
  },
  {
    id: 'buddhist-scroll',
    title: '佛教文脉长卷',
    image: cultureAssets.buddhistScroll,
    statusText: '已开放',
    description: '沿佛教圣地与石窟造像，纵览中国佛教艺术与信仰空间。',
  },
  {
    id: 'ocean-scroll',
    title: '海洋信俗长卷',
    image: cultureAssets.oceanScroll,
    statusText: '敬请期待',
    description: '以妈祖信俗和沿海民间仪式为线索，展开海洋文化图景。',
  },
];
