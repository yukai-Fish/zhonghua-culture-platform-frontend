import { useEffect, useState } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { BuddhistDetailPage } from './components/pages/BuddhistDetailPage';
import { CultureHomePage } from './components/pages/CultureHomePage';
import { CultureMapPage } from './components/pages/CultureMapPage';
import { InteractiveExperiencePage } from './components/pages/InteractiveExperiencePage';
import { ThemeActivitiesPage } from './components/pages/ThemeActivitiesPage';
import { CreativeShopPage } from './components/pages/CreativeShopPage';

export type AppRoute = 'home' | 'culture-map' | 'experiences' | 'activities' | 'shop' | 'buddhism';

interface RouteMeta {
  title: string;
  description: string;
}

const routeMap: Record<string, AppRoute> = {
  '#/': 'home',
  '#/culture-map': 'culture-map',
  '#/experiences': 'experiences',
  '#/activities': 'activities',
  '#/shop': 'shop',
  '#/buddhism': 'buddhism',
};

const routeMetaMap: Record<AppRoute, RouteMeta> = {
  home: {
    title: '中华文化平台｜全域文化数字体验',
    description: '全域文化数字平台首页，汇集佛教、道教、丝路、茶文化与非遗主题入口，探索中华文明的多维叙事。',
  },
  'culture-map': {
    title: '万象图｜中华文化平台',
    description: '在万象图中按主题与地理线索探索中华文化遗产，查看代表性地标、长卷叙事与沉浸式图文内容。',
  },
  experiences: {
    title: '感应场｜中华文化平台',
    description: '体验木鱼、偈语、摇签、问答等互动内容，感受传统文化在数字场景中的参与感与仪式感。',
  },
  activities: {
    title: '藏书阁｜中华文化平台',
    description: '阅读经典与札记，结合书页翻阅与批注场景，建立可持续的文化阅读与学习路径。',
  },
  shop: {
    title: '禅修房｜中华文化平台',
    description: '在禅修房中查看静修主题内容与视觉化练习模块，获得更轻量的日常文化体验。',
  },
  buddhism: {
    title: '佛教专题｜中华文化平台',
    description: '聚焦佛教文化主题，串联时间线、地标、石窟与文脉长卷，建立结构化的专题浏览体验。',
  },
};

function getInitialRoute(): AppRoute {
  return routeMap[window.location.hash] ?? 'home';
}

function upsertMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let tag = document.head.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function syncSeoMeta(route: AppRoute) {
  const meta = routeMetaMap[route];
  const base = window.location.origin;
  const path = `${import.meta.env.BASE_URL}assets/longmen-cover.webp`;
  const imageUrl = new URL(path, base).toString();
  const canonicalUrl = `${base}${window.location.pathname}${window.location.hash || '#/'}`;

  document.title = meta.title;
  upsertMeta('description', meta.description);
  upsertMeta('og:title', meta.title, 'property');
  upsertMeta('og:description', meta.description, 'property');
  upsertMeta('og:type', 'website', 'property');
  upsertMeta('og:url', canonicalUrl, 'property');
  upsertMeta('og:image', imageUrl, 'property');
  upsertMeta('twitter:card', 'summary_large_image');
  upsertMeta('twitter:title', meta.title);
  upsertMeta('twitter:description', meta.description);
  upsertMeta('twitter:image', imageUrl);
}

export default function App() {
  const [route, setRoute] = useState<AppRoute>(getInitialRoute);

  useEffect(() => {
    const handleHashChange = () => setRoute(getInitialRoute());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    syncSeoMeta(route);
  }, [route]);

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
      {route === 'activities' && <ThemeActivitiesPage />}
      {route === 'shop' && <CreativeShopPage />}
      {route === 'buddhism' && <BuddhistDetailPage onHome={() => navigate('home')} />}
    </AppLayout>
  );
}

