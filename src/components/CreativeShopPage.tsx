import { cultureAssets } from '../data/assets';

const products = [
  {
    title: '佛国山河海报',
    image: cultureAssets.shopPoster,
    tag: '展陈海报',
    desc: '佛教文化地图化作案头画幅，山河、寺塔与金线纹样同入一纸。',
  },
  {
    title: '丝路驼铃明信片',
    image: cultureAssets.shopPostcard,
    tag: '明信片',
    desc: '把古道风沙与驼铃远影收进掌心，寄给远方的一缕文明回声。',
  },
  {
    title: '洞天云水卷轴',
    image: cultureAssets.shopScroll,
    tag: '长卷装帧',
    desc: '道教山水舒展成卷，烟岚、宫观与仙踪在木案上缓缓铺开。',
  },
];

export function CreativeShopPage() {
  return (
    <div className="page nav-page page-fade">
      <section className="nav-page-hero">
        <p className="eyebrow">文创商城</p>
        <h1>把山河收进掌心</h1>
        <p className="hero-subtitle">
          一纸一物皆可藏风月，让地图、长卷与古意从屏幕走向案头。
        </p>
      </section>

      <section className="shop-grid">
        {products.map((product) => (
          <article className="shop-card" key={product.title}>
            <img src={product.image} alt={product.title} />
            <div>
              <span>{product.tag}</span>
              <h2>{product.title}</h2>
              <p>{product.desc}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
