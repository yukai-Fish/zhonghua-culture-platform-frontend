import { useEffect, useState } from 'react';
import { AppLayout } from './components/AppLayout';
import { BuddhistDetailPage } from './components/BuddhistDetailPage';
import { CultureHomePage } from './components/CultureHomePage';

const BUDDHIST_ROUTE = '#/buddhism';

function getInitialRoute() {
  return window.location.hash === BUDDHIST_ROUTE ? 'buddhism' : 'home';
}

export default function App() {
  const [route, setRoute] = useState<'home' | 'buddhism'>(getInitialRoute);

  useEffect(() => {
    const handleHashChange = () => setRoute(getInitialRoute());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateHome = () => {
    window.location.hash = '#/';
    setRoute('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateBuddhism = () => {
    window.location.hash = BUDDHIST_ROUTE;
    setRoute('buddhism');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppLayout currentRoute={route} onHome={navigateHome} onBuddhism={navigateBuddhism}>
      {route === 'buddhism' ? (
        <BuddhistDetailPage onHome={navigateHome} />
      ) : (
        <CultureHomePage onEnterBuddhism={navigateBuddhism} />
      )}
    </AppLayout>
  );
}
