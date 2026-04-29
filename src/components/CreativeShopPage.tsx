import { cultureAssets } from '../data/assets';

const products = [
  {
    title: '佛国山河笺',
    image: cultureAssets.buddhistMap,
    tag: '展陈海报',
  },
  {
    title: '丝路驼铃札',
    image: cultureAssets.silkRoadMap,
    tag: '文创预告',
  },
  {
    title: '洞天云水卷',
    image: cultureAssets.daoMap,
    tag: '文创预告',
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
              <p>静候上架</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
