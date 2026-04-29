interface TopNavBarProps {
  currentRoute: 'home' | 'buddhism';
  onHome: () => void;
  onBuddhism: () => void;
}

export function TopNavBar({ currentRoute, onHome, onBuddhism }: TopNavBarProps) {
  const scrollTo = (targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="top-nav">
      <button className="brand-mark" type="button" onClick={onHome} aria-label="返回首页">
        <span className="seal">文</span>
        <span>
          <strong>中国文化</strong>
          <small>中华文明数字平台</small>
        </span>
      </button>

      <nav className="nav-links" aria-label="主导航">
        <button className={currentRoute === 'home' ? 'active' : ''} type="button" onClick={onHome}>
          首页
        </button>
        <button className={currentRoute === 'buddhism' ? 'active' : ''} type="button" onClick={onBuddhism}>
          文化地图
        </button>
        <button type="button" onClick={() => scrollTo('long-scrolls')}>
          文脉长图
        </button>
        <button type="button" onClick={() => scrollTo('experience-center')}>
          交互体验
        </button>
        <button type="button" onClick={() => scrollTo('coming-themes')}>
          主题活动
        </button>
        <button type="button" disabled>
          文创商城
        </button>
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
