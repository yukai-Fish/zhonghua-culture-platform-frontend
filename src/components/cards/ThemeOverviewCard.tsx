import type { CultureTheme } from '../../data/themes';

interface ThemeOverviewCardProps {
  theme: CultureTheme;
  onOpen: () => void;
}

export function ThemeOverviewCard({ theme, onOpen }: ThemeOverviewCardProps) {
  const isOpen = theme.status === 'open';

  return (
    <article className={`theme-card ${isOpen ? 'is-open' : 'is-coming'}`}>
      <img src={theme.image} alt={theme.title} loading="lazy" decoding="async" />
      <div className="theme-card-overlay" />
      <div className="theme-card-content">
        <span className="theme-card-status">{isOpen ? '已开放' : '敬请期待'}</span>
        <h3>{theme.title}</h3>
        <p>{theme.subtitle}</p>
        <button type="button" onClick={onOpen}>
          {isOpen ? '查看详情' : '进入探索'}
        </button>
      </div>
    </article>
  );
}
