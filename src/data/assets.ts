const assetBase = import.meta.env.BASE_URL;

export const cultureAssets = {
  daoMap: `${assetBase}assets/dao-map.png`,
  buddhistMap: `${assetBase}assets/buddhist-map.png`,
  silkRoadMap: `${assetBase}assets/silk-road-map.png`,
  daoScroll: `${assetBase}assets/dao-scroll.png`,
  buddhistScroll: `${assetBase}assets/buddhist-scroll.png`,
  oceanScroll: `${assetBase}assets/ocean-scroll.png`,
  longmenVideo: `${assetBase}assets/longmen-demo.mp4`,
} as const;
