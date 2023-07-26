import type { ReactNode } from 'react';

import { ThemeProvider } from '@/lib/components/theme-provider';

// import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex max-w-lg mx-auto flex-col">
        <main className="wrapper shadow-md">
          <Header />
          {children}
          <Navigation />
        </main>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
