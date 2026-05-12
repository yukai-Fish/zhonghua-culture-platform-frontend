import type { AppRoute } from '../../App';
import { cultureAssets } from '../../data/assets';

interface TopNavBarProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

const navItems: Array<{ route: AppRoute; label: string }> = [
  { route: 'culture-map', label: '万象图' },
  { route: 'experiences', label: '感应场' },
  { route: 'activities', label: '藏书阁' },
  { route: 'shop', label: '禅修房' },
];

function getActiveRoute(route: AppRoute) {
  return route === 'buddhism' ? 'culture-map' : route;
}

export function TopNavBar({ currentRoute, onNavigate }: TopNavBarProps) {
  const activeRoute = getActiveRoute(currentRoute);
  const isHome = currentRoute === 'home';

  return (
    <header className={`top-nav ${isHome ? 'home-nav' : 'section-nav'}`}>
      <button className="brand-mark" type="button" onClick={() => onNavigate('home')} aria-label="返回文化选择页">
        <img className="brand-logo" src={cultureAssets.brandLogo} alt="全域文化传播平台" loading="lazy" decoding="async" />
        <span>
          <strong>全域文化传播平台</strong>
          <small>权威传播 · 沉浸体验 · 个人修身</small>
        </span>
      </button>

      {!isHome && (
        <nav className="nav-links" aria-label="佛教文化空间导航">
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
      )}

      <div className="nav-actions">
        {!isHome && (
          <label className="search-box">
            <span>检索</span>
            <input type="search" placeholder="搜索经典、地标、释义……" />
          </label>
        )}
        <button className="login-button" type="button">
          登录 / 个人空间
        </button>
      </div>
    </header>
  );
}
