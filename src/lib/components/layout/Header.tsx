'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { ThemeToggle } from '@/lib/components/theme-toggle';

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [currentTheme, setCurrentTheme] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    if (theme === 'dark') {
      setCurrentTheme('assets/header_logo_dark.png');
    } else {
      setCurrentTheme('assets/header_logo.png');
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentTheme, theme]);
  return (
    <header
      className={`${
        scrollY > 100 ? 'bg-white dark:bg-gray-900 shadow-md' : ''
      } animate duration-500 z-20 sticky top-0 z-10 w-full bg-base-100/80 backdrop-blur-lg`}
    >
      <section className="mx-auto w-full max-w-lg px-4 flex items-center justify-between py-3">
        <div className="flex-shrink-0">
          <img className="h-10 w-20" src={currentTheme} alt="Header Logo" />
        </div>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
}
