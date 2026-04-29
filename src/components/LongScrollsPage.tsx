import { longScrollPreviews } from '../data/themes';
import { ThemeLongScrollPreview } from './ThemeLongScrollPreview';

interface LongScrollsPageProps {
  onEnterBuddhism: () => void;
}

export function LongScrollsPage({ onEnterBuddhism }: LongScrollsPageProps) {
  return (
    <div className="page nav-page page-fade">
      <section className="nav-page-hero">
        <p className="eyebrow">文脉长图</p>
        <h1>把文化脉络收进一轴长卷</h1>
        <p className="hero-subtitle">
          以纵向长卷承载历史节点、地理空间与文化意象，适合从上到下慢慢浏览。
        </p>
      </section>

      <section className="section-block">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">长卷展厅</p>
            <h2>三类主题长卷预览</h2>
          </div>
          <button className="gold-button" type="button" onClick={onEnterBuddhism}>
            进入佛教长图之旅
          </button>
        </div>
        <div className="scroll-preview-grid long-scroll-gallery">
          {longScrollPreviews.map((preview) => (
            <ThemeLongScrollPreview key={preview.id} preview={preview} />
          ))}
        </div>
      </section>
    </div>
  );
}
