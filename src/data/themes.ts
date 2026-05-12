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
    id: 'buddhism',
    title: '佛教',
    subtitle: '入山观寺，读经听钟，在万象图、感应场、藏书阁与禅修房之间缓步游历',
    image: cultureAssets.buddhistMap,
    status: 'open',
  },
  {
    id: 'dao',
    title: '道教',
    subtitle: '青城幽径、洞天福地与宫观云烟，待你循着清气慢慢探访',
    image: cultureAssets.daoMap,
    status: 'coming',
  },
  {
    id: 'mazu',
    title: '妈祖文化',
    subtitle: '海潮、帆影与湄洲香火，照见护航信俗与远洋乡愁',
    image: cultureAssets.oceanScroll,
    status: 'coming',
  },
];

export const comingThemes = ['四川山水', '福建海潮', '经典译解', '文化问答', '同修小组', '海丝故事'];

export const longScrollPreviews: LongScrollPreview[] = [
  {
    id: 'dao-scroll',
    title: '道教文脉长卷',
    image: cultureAssets.daoScroll,
    statusText: '即将开放',
    description: '青城山、洞天福地与宫观谱系在云水之间舒展开来。',
  },
  {
    id: 'buddhist-scroll',
    title: '佛教文脉长卷',
    image: cultureAssets.buddhistScroll,
    statusText: '已开放',
    description: '沿峨眉山、乐山大佛与闽南寺院，展开山海之间的佛教行旅。',
  },
  {
    id: 'ocean-scroll',
    title: '妈祖文化出海长卷',
    image: cultureAssets.oceanScroll,
    statusText: '即将开放',
    description: '湄洲岛、沿海庙宇与海上丝路相连，香火随帆影远行。',
  },
];
