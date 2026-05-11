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

  return (
    <div className="museum-shell">
      <TopNavBar currentRoute={currentRoute} onNavigate={onNavigate} />
      <main>{children}</main>
      <nav className="mobile-bottom-nav" aria-label="移动端底部导航">
        <button className={activeRoute === 'home' ? 'active' : ''} type="button" onClick={() => onNavigate('home')}>
          <i>选</i>
          <span>文化选择</span>
        </button>
        <button className={activeRoute === 'culture-map' ? 'active' : ''} type="button" onClick={() => onNavigate('culture-map')}>
          <i>图</i>
          <span>万象图</span>
        </button>
        <button className={currentRoute === 'buddhism' ? 'active' : ''} type="button" onClick={() => onNavigate('buddhism')}>
          <i>佛</i>
          <span>佛教主题</span>
        </button>
        <button className={activeRoute === 'experiences' ? 'active' : ''} type="button" onClick={() => onNavigate('experiences')}>
          <i>应</i>
          <span>感应场</span>
        </button>
        <button className={activeRoute === 'shop' ? 'active' : ''} type="button" onClick={() => onNavigate('shop')}>
          <i>修</i>
          <span>禅修房</span>
        </button>
      </nav>
    </div>
  );
}
