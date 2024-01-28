import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Search, ShoppingCart, UserRound } from 'lucide-react';
import logo from './logo.png';
import { Button } from '../ui/button';

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

export default function Header() {
  const [isMenuExpand, setIsMenuExpand] = useState(false);

  const collapseMenu = () => {
    setIsMenuExpand(false);
  };

  const toggleMenu = () => {
    setIsMenuExpand((prev) => !prev);
  };

  return (
    <header
      className={`fixed w-full flex flex-col overflow-hidden ${isMenuExpand ? 'h-screen' : 'h-24'} md:h-24 transition-[height] duration-500 bg-white`}
    >
      <button
        type="button"
        onClick={toggleMenu}
        className="md:hidden m-[25px] ml-auto flex flex-col items-end gap-4"
      >
        <span
          className={`block w-[50px] h-[5px] bg-theme ${isMenuExpand ? 'translate-y-[21px] rotate-45' : ''} transition-[transform] duration-500`}
        />
        <span
          className={`block w-[40px] h-[5px] bg-theme ${isMenuExpand ? 'opacity-0' : 'opacity-100'} transition-[opacity] duration-500`}
        />
        <span
          className={`block w-[50px] h-[5px] bg-theme ${isMenuExpand ? '-translate-y-[21px] -rotate-45' : ''} transition-[transform] duration-500`}
        />
      </button>

      <div
        className={`flex-grow ${isMenuExpand ? 'opacity-100' : 'opacity-0'} md:opacity-100 transition-[opacity] duration-700`}
      >
        <div className="mx-auto max-w-screen-xl h-full px-5 lg:px-10 flex flex-col md:flex-row justify-around md:justify-between items-center gap-5">
          <div className="shrink-0">
            <NavLink to="/">
              <img src={logo} className="w-40 lg:w-44" alt="React logo" />
            </NavLink>
          </div>

          <nav>
            <ul className="flex gap-10 lg:gap-20 flex-col md:flex-row items-center font-medium">
              <NavItem to="/" name="Home" onClick={collapseMenu} />
              <NavItem to="shop" name="Shop" onClick={collapseMenu} />
              <NavItem to="about" name="About" onClick={collapseMenu} />
              <NavItem to="contact" name="Contact" onClick={collapseMenu} />
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
              <Button size="icon" variant="ghost" className="h-7 w-7">
                <ShoppingCart />
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
