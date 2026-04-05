import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import AnnouncementBanner from './AnnouncementBanner';

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBanner />
      <Header />
      {!isHome && <div className="pt-16 sm:pt-[72px]"><Breadcrumb /></div>}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
