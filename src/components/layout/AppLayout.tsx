import type { ReactNode } from 'react';
import type { AppRoute } from '../../App';
import { TopNavBar } from './TopNavBar';

interface AppLayoutProps {
  children: ReactNode;
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

export function AppLayout({ children, currentRoute, onNavigate }: AppLayoutProps) {
  const activeRoute = currentRoute === 'buddhism' ? 'culture-map' : currentRoute;
  const showSectionNav = currentRoute !== 'home';

  return (
    <div className="museum-shell">
      <TopNavBar currentRoute={currentRoute} onNavigate={onNavigate} />
      <main>{children}</main>
      {showSectionNav && (
      <nav className="mobile-bottom-nav" aria-label="佛教文化空间导航">
        <button className={activeRoute === 'culture-map' ? 'active' : ''} type="button" onClick={() => onNavigate('culture-map')}>
          <i>图</i>
          <span>万象图</span>
        </button>
        <button className={activeRoute === 'experiences' ? 'active' : ''} type="button" onClick={() => onNavigate('experiences')}>
          <i>应</i>
          <span>感应场</span>
        </button>
        <button className={activeRoute === 'activities' ? 'active' : ''} type="button" onClick={() => onNavigate('activities')}>
          <i>书</i>
          <span>藏书阁</span>
        </button>
        <button className={activeRoute === 'shop' ? 'active' : ''} type="button" onClick={() => onNavigate('shop')}>
          <i>修</i>
          <span>禅修房</span>
        </button>
      </nav>
      )}
    </div>
  );
}
