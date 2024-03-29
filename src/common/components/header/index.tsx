import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Search, ShoppingCart, UserRound } from 'lucide-react';
import { MenuLink } from '@/router';
import { cn } from '@/common/lib/utils';
import logo from './logo.png';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Cart } from '..';

function NavItem({
  to,
  name,
  onClick,
}: {
  to: string;
  name: string;
  onClick: () => void;
}) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "relative after:block after:content-[''] after:absolute after:h-1 after:bg-theme after:w-full after:scale-x-100 after:transition"
            : "relative after:block after:content-[''] after:absolute after:h-1 after:bg-theme after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition"
        }
        onClick={onClick}
      >
        {name}
      </NavLink>
    </li>
  );
}

export default function Header({ hasScrolled }: { hasScrolled: boolean }) {
  const [isMenuExpand, setIsMenuExpand] = useState(false);

  const collapseMenu = () => {
    document.body.classList.remove('overflow-hidden');
    setIsMenuExpand(false);
  };

  const toggleMenu = () => {
    document.body.classList.toggle('overflow-hidden');
    setIsMenuExpand((prev) => !prev);
  };

  return (
    <header
      className={cn(
        'sticky top-0 w-full flex flex-col overflow-hidden h-24 z-[1000] transition-[height] shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/60',
        hasScrolled && 'h-16',
        isMenuExpand && 'h-screen'
      )}
    >
      <div
        className={cn(
          'flex justify-end items-center shrink-0 md:hidden transition-[height]',
          hasScrolled ? 'h-16' : 'h-24'
        )}
      >
        <button
          type="button"
          onClick={toggleMenu}
          className="mr-6 flex flex-col items-end gap-4"
        >
          <span
            className={cn(
              'block w-[50px] h-[5px] bg-theme transition-[transform] duration-500',
              isMenuExpand && 'translate-y-[21px] rotate-45'
            )}
          />
          <span
            className={cn(
              'block w-[40px] h-[5px] bg-theme transition-[opacity] duration-500',
              isMenuExpand ? 'opacity-0' : 'opacity-100'
            )}
          />
          <span
            className={cn(
              'block w-[50px] h-[5px] bg-theme transition-[transform] duration-500',
              isMenuExpand && '-translate-y-[21px] -rotate-45'
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          'flex-grow md:opacity-100 transition-[opacity] duration-700',
          isMenuExpand ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div className="mx-auto max-w-screen-xl h-full px-5 lg:px-10 flex flex-col md:flex-row justify-around md:justify-between items-center gap-5">
          <div className="shrink-0">
            <NavLink to={MenuLink.HOME}>
              <img src={logo} className="w-40 lg:w-44" alt="React logo" />
            </NavLink>
          </div>

          <nav>
            <ul className="flex gap-10 lg:gap-20 flex-col md:flex-row items-center font-medium">
              <NavItem to={MenuLink.HOME} name="Home" onClick={collapseMenu} />
              <NavItem to={MenuLink.SHOP} name="Shop" onClick={collapseMenu} />
              <NavItem to={MenuLink.BLOG} name="Blog" onClick={collapseMenu} />
              <NavItem
                to={MenuLink.CONTACT}
                name="Contact"
                onClick={collapseMenu}
              />
            </ul>
          </nav>

          <ul className="flex justify-around w-full md:w-fit gap-5 lg:gap-10">
            <li>
              <Button size="icon" variant="ghost" className="h-7 w-7">
                <UserRound />
              </Button>
            </li>
            <li>
              <Button size="icon" variant="ghost" className="h-7 w-7">
                <Search />
              </Button>
            </li>
            <li>
              <Button size="icon" variant="ghost" className="h-7 w-7">
                <Heart />
              </Button>
            </li>
            <li>
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="ghost" className="h-7 w-7">
                    <ShoppingCart />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <Cart />
                </SheetContent>
              </Sheet>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
