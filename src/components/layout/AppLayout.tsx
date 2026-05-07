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
          <i>首</i>
          <span>首页</span>
        </button>
        <button className={activeRoute === 'culture-map' ? 'active' : ''} type="button" onClick={() => onNavigate('culture-map')}>
          <i>图</i>
          <span>文化地图</span>
        </button>
        <button className={currentRoute === 'buddhism' ? 'active' : ''} type="button" onClick={() => onNavigate('buddhism')}>
          <i>卷</i>
          <span>文脉长图</span>
        </button>
        <button className={activeRoute === 'experiences' ? 'active' : ''} type="button" onClick={() => onNavigate('experiences')}>
          <i>话</i>
          <span>交流社区</span>
        </button>
        <button className={activeRoute === 'shop' ? 'active' : ''} type="button" onClick={() => onNavigate('shop')}>
          <i>我</i>
          <span>我的</span>
        </button>
      </nav>
    </div>
  );
}
