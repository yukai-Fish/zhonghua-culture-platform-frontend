import type { ReactNode } from 'react';
import { TopNavBar } from './TopNavBar';

interface AppLayoutProps {
  children: ReactNode;
  currentRoute: 'home' | 'buddhism';
  onHome: () => void;
  onBuddhism: () => void;
}

export function AppLayout({ children, currentRoute, onHome, onBuddhism }: AppLayoutProps) {
  return (
    <div className="museum-shell">
      <TopNavBar currentRoute={currentRoute} onHome={onHome} onBuddhism={onBuddhism} />
      <main>{children}</main>
    </div>
  );
}
