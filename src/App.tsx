import { useEffect, useState } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { BuddhistDetailPage } from './components/pages/BuddhistDetailPage';
import { CultureHomePage } from './components/pages/CultureHomePage';
import { CultureMapPage } from './components/pages/CultureMapPage';
import { InteractiveExperiencePage } from './components/pages/InteractiveExperiencePage';
import { ThemeActivitiesPage } from './components/pages/ThemeActivitiesPage';
import { CreativeShopPage } from './components/pages/CreativeShopPage';

export type AppRoute = 'home' | 'culture-map' | 'experiences' | 'activities' | 'shop' | 'buddhism';

const routeMap: Record<string, AppRoute> = {
  '#/': 'home',
  '#/culture-map': 'culture-map',
  '#/experiences': 'experiences',
  '#/activities': 'activities',
  '#/shop': 'shop',
  '#/buddhism': 'buddhism',
};

function getInitialRoute(): AppRoute {
  return routeMap[window.location.hash] ?? 'home';
}

export default function App() {
  const [route, setRoute] = useState<AppRoute>(getInitialRoute);

  useEffect(() => {
    const handleHashChange = () => setRoute(getInitialRoute());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (nextRoute: AppRoute) => {
    const hash = Object.entries(routeMap).find(([, value]) => value === nextRoute)?.[0] ?? '#/';
    window.location.hash = hash;
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppLayout currentRoute={route} onNavigate={navigate}>
      {route === 'home' && <CultureHomePage onEnterBuddhism={() => navigate('culture-map')} />}
      {route === 'culture-map' && <CultureMapPage onEnterBuddhism={() => navigate('buddhism')} />}
      {route === 'experiences' && <InteractiveExperiencePage />}
      {route === 'activities' && <ThemeActivitiesPage onEnterBuddhism={() => navigate('buddhism')} />}
      {route === 'shop' && <CreativeShopPage />}
      {route === 'buddhism' && <BuddhistDetailPage onHome={() => navigate('home')} />}
    </AppLayout>
  );
}
