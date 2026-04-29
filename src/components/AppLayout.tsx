import type { ReactNode } from 'react';
import type { AppRoute } from '../App';
import { TopNavBar } from './TopNavBar';

interface AppLayoutProps {
  children: ReactNode;
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

export function AppLayout({ children, currentRoute, onNavigate }: AppLayoutProps) {
  return (
    <div className="museum-shell">
      <TopNavBar currentRoute={currentRoute} onNavigate={onNavigate} />
      <main>{children}</main>
    </div>
  );
}
