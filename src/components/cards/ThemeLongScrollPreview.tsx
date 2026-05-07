import type { LongScrollPreview } from '../../data/themes';

interface ThemeLongScrollPreviewProps {
  preview: LongScrollPreview;
}

export function ThemeLongScrollPreview({ preview }: ThemeLongScrollPreviewProps) {
  return (
    <article className="long-preview-card">
      <div className="long-preview-image">
        <img src={preview.image} alt={preview.title} loading="lazy" decoding="async" />
      </div>
      <div className="long-preview-body">
        <span>{preview.statusText}</span>
        <h3>{preview.title}</h3>
        <p>{preview.description}</p>
      </div>
    </article>
  );
}
