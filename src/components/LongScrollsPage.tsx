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
        <h1>卷上风烟，纸中山海</h1>
        <p className="hero-subtitle">
          云气自上而下流转，寺塔、古道与人间愿景在长卷深处相逢。
        </p>
      </section>

      <section className="section-block">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">画轴微启</p>
            <h2>一卷未尽，千里已远</h2>
          </div>
          <button className="gold-button" type="button" onClick={onEnterBuddhism}>
            入佛教长卷
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
