import { ThemeToggle } from '@/lib/components/theme-toggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-base-100/80 backdrop-blur-lg">
      <section className="mx-auto flex items-center justify-between py-2">
        <h4 className="text-2xl">📖 Marif</h4>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
};

export default Header;
