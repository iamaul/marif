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
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="flex w-full flex-col items-center">
        <main className="flex flex-col bg-gray-100 dark:bg-gradient-to-br from-black to-neutral-900 items-center w-full">
          <div className="w-full bg-white dark:bg-gray-800 shadow-md max-w-lg flex flex-col">
            <Header />
            {children}
          </div>
          <Navigation />
        </main>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
