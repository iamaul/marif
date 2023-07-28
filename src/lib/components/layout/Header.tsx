'use client';

import { useEffect, useState } from 'react';

import { ThemeToggle } from '@/lib/components/theme-toggle';

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        scrollY > 100 ? 'bg-white dark:bg-gray-900 shadow-md' : ''
      } animate duration-500 z-20 sticky top-0 z-10 w-full bg-base-100/80 backdrop-blur-lg`}
    >
      <section className="mx-auto w-full max-w-lg px-4 flex items-center justify-between py-3">
        <h4 className="text-2xl">📖 Marif</h4>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
}
