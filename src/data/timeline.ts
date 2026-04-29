export interface TimelineItem {
  period: string;
  description: string;
  focus: string;
}

export const buddhistTimeline: TimelineItem[] = [
  {
    period: '两汉',
    description: '佛教沿丝绸之路初步传入中国，译经与寺院营建开始出现。',
    focus: '白马寺、早期译经',
  },
  {
    period: '魏晋南北朝',
    description: '译经事业与石窟艺术迅速发展，佛教思想进入士人精神世界。',
    focus: '云冈石窟、敦煌莫高窟',
  },
  {
    period: '隋唐',
    description: '佛教宗派成熟，造像艺术、寺院制度与文学审美达到高峰。',
    focus: '龙门石窟、长安译场',
  },
  {
    period: '宋元',
    description: '禅宗、净土等传统持续传播，佛教与书画、园林、民间信仰交融。',
    focus: '江南寺院、禅林制度',
  },
  {
    period: '明清',
    description: '佛教进入更加广泛的民间生活，名山朝圣和地域信仰不断延展。',
    focus: '五台山、普陀山、九华山、峨眉山',
  },
  {
    period: '近现代',
    description: '文化遗产保护与数字传播兴起，石窟寺院和经典文献获得新的展示方式。',
    focus: '遗产保护、数字展馆',
  },
];
