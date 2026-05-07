import type { AppRoute } from '../../App';
import { cultureAssets } from '../../data/assets';

interface TopNavBarProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

const navItems: Array<{ route: AppRoute; label: string }> = [
  { route: 'home', label: '首页' },
  { route: 'culture-map', label: '文化地图' },
  { route: 'experiences', label: '交互体验' },
  { route: 'activities', label: '主题活动' },
  { route: 'shop', label: '文创商城' },
];

function getActiveRoute(route: AppRoute) {
  return route === 'buddhism' ? 'culture-map' : route;
}

export function TopNavBar({ currentRoute, onNavigate }: TopNavBarProps) {
  const activeRoute = getActiveRoute(currentRoute);

  return (
    <header className="top-nav">
      <button className="brand-mark" type="button" onClick={() => onNavigate('home')} aria-label="返回首页">
        <img className="brand-logo" src={cultureAssets.brandLogo} alt="中国文化" loading="lazy" decoding="async" />
        <span>
          <strong>中国文化</strong>
          <small>中华文明数字平台</small>
        </span>
      </button>

      <nav className="nav-links" aria-label="主导航">
        {navItems.map((item) => (
          <button
            className={activeRoute === item.route ? 'active' : ''}
            type="button"
            key={item.route}
            onClick={() => onNavigate(item.route)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="nav-actions">
        <label className="search-box">
          <span>检索</span>
          <input type="search" placeholder="搜索文化、地点、人物……" />
        </label>
        <button className="login-button" type="button">
          登录 / 注册
        </button>
      </div>
    </header>
  );
}
