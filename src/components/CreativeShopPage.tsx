import { cultureAssets } from '../data/assets';

const products = [
  {
    title: '佛教文化地图海报',
    image: cultureAssets.buddhistMap,
    tag: '展陈海报',
  },
  {
    title: '丝绸之路地图明信片',
    image: cultureAssets.silkRoadMap,
    tag: '文创预告',
  },
  {
    title: '道教文化地图卷轴',
    image: cultureAssets.daoMap,
    tag: '文创预告',
  },
];

export function CreativeShopPage() {
  return (
    <div className="page nav-page page-fade">
      <section className="nav-page-hero">
        <p className="eyebrow">文创商城</p>
        <h1>从数字展馆延伸到文创想象</h1>
        <p className="hero-subtitle">
          当前为商城占位页面，先展示可转化为海报、明信片、卷轴装帧的视觉素材方向。
        </p>
      </section>

      <section className="shop-grid">
        {products.map((product) => (
          <article className="shop-card" key={product.title}>
            <img src={product.image} alt={product.title} />
            <div>
              <span>{product.tag}</span>
              <h2>{product.title}</h2>
              <p>敬请期待</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
