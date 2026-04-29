export interface BuddhistSite {
  id: string;
  name: string;
  location: string;
  description: string;
  x: number;
  y: number;
}

export const buddhistSites: BuddhistSite[] = [
  {
    id: 'baima',
    name: '白马寺',
    location: '河南洛阳',
    description: '中国第一座官办佛教寺院，被称为中国佛教祖庭。',
    x: 54,
    y: 50,
  },
  {
    id: 'longmen',
    name: '龙门石窟',
    location: '河南洛阳',
    description: '北魏至唐代石刻艺术高峰，体现佛教造像与中原审美融合。',
    x: 55,
    y: 54,
  },
  {
    id: 'dunhuang',
    name: '敦煌莫高窟',
    location: '甘肃敦煌',
    description: '丝绸之路上的佛教艺术宝库，保存大量壁画与经变图。',
    x: 30,
    y: 38,
  },
  {
    id: 'yungang',
    name: '云冈石窟',
    location: '山西大同',
    description: '北魏皇家石窟代表，体现早期佛教艺术中国化进程。',
    x: 56,
    y: 36,
  },
  {
    id: 'wutai',
    name: '五台山',
    location: '山西忻州',
    description: '中国佛教四大名山之一，文殊菩萨道场。',
    x: 59,
    y: 38,
  },
  {
    id: 'putuo',
    name: '普陀山',
    location: '浙江舟山',
    description: '观音信仰的重要圣地，海天佛国气象与民间信仰交汇。',
    x: 73,
    y: 67,
  },
  {
    id: 'jiuhua',
    name: '九华山',
    location: '安徽池州',
    description: '地藏菩萨道场，山岳信仰与寺院文化相互滋养。',
    x: 65,
    y: 64,
  },
  {
    id: 'emei',
    name: '峨眉山',
    location: '四川乐山',
    description: '普贤菩萨道场，寺院、山水与朝圣传统共同构成文化景观。',
    x: 43,
    y: 68,
  },
];
