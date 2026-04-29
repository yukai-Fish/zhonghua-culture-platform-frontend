import { useEffect, useState } from 'react';
import { AppLayout } from './components/AppLayout';
import { BuddhistDetailPage } from './components/BuddhistDetailPage';
import { CultureHomePage } from './components/CultureHomePage';
import { CultureMapPage } from './components/CultureMapPage';
import { InteractiveExperiencePage } from './components/InteractiveExperiencePage';
import { LongScrollsPage } from './components/LongScrollsPage';
import { ThemeActivitiesPage } from './components/ThemeActivitiesPage';
import { CreativeShopPage } from './components/CreativeShopPage';

export type AppRoute = 'home' | 'culture-map' | 'long-scrolls' | 'experiences' | 'activities' | 'shop' | 'buddhism';

const routeMap: Record<string, AppRoute> = {
  '#/': 'home',
  '#/culture-map': 'culture-map',
  '#/long-scrolls': 'long-scrolls',
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
      {route === 'home' && <CultureHomePage onEnterBuddhism={() => navigate('buddhism')} />}
      {route === 'culture-map' && <CultureMapPage onEnterBuddhism={() => navigate('buddhism')} />}
      {route === 'long-scrolls' && <LongScrollsPage />}
      {route === 'experiences' && <InteractiveExperiencePage />}
      {route === 'activities' && <ThemeActivitiesPage onEnterBuddhism={() => navigate('buddhism')} />}
      {route === 'shop' && <CreativeShopPage />}
      {route === 'buddhism' && <BuddhistDetailPage onHome={() => navigate('home')} />}
    </AppLayout>
  );
}
