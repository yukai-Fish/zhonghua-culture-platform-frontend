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
    subtitle: '一期重点演示：万象图、感应场、藏书阁、禅修房形成完整体验闭环',
    image: cultureAssets.buddhistMap,
    status: 'open',
  },
  {
    id: 'dao',
    title: '道教',
    subtitle: '一期保留入口，后续扩展青城山、道教典籍与修身场景',
    image: cultureAssets.daoMap,
    status: 'coming',
  },
  {
    id: 'mazu',
    title: '妈祖文化',
    subtitle: '一期保留入口，后续承接福建湄洲岛、海丝地图与文化出海模板',
    image: cultureAssets.oceanScroll,
    status: 'coming',
  },
];

export const comingThemes = ['四川全域文旅', '福建文化出海', '经典译解', '智能问答', '同修小组', '多语言传播'];

export const longScrollPreviews: LongScrollPreview[] = [
  {
    id: 'dao-scroll',
    title: '道教文脉长卷',
    image: cultureAssets.daoScroll,
    statusText: '一期预留',
    description: '保留青城山、洞天福地、宫观谱系的扩展位，后续接入完整内容。',
  },
  {
    id: 'buddhist-scroll',
    title: '佛教文脉长卷',
    image: cultureAssets.buddhistScroll,
    statusText: '重点演示',
    description: '沿四川峨眉山、乐山大佛与福建佛教节点，展示一期万象图主路径。',
  },
  {
    id: 'ocean-scroll',
    title: '妈祖文化出海长卷',
    image: cultureAssets.oceanScroll,
    statusText: '一期预留',
    description: '预留湄洲岛、沿海庙宇、海上丝绸之路和海外华侨社群传播路径。',
  },
];
