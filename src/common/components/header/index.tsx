import { NavLink } from 'react-router-dom';
import { Heart, Search, ShoppingCart, UserRound } from 'lucide-react';
import logo from './logo.png';
import { Button } from '../ui/button';

function NavItem({ to, name }: { to: string; name: string }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "relative after:block after:content-[''] after:absolute after:h-1 after:bg-theme after:w-full after:scale-x-100 after:transition"
            : "relative after:block after:content-[''] after:absolute after:h-1 after:bg-theme after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition"
        }
      >
        {name}
      </NavLink>
    </li>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="mx-auto max-w-screen-xl px-10 h-24 flex justify-between items-center">
        <div className="shrink-0">
          <NavLink to="/">
            <img src={logo} className="logo react" alt="React logo" />
          </NavLink>
        </div>

        <nav>
          <ul className="flex gap-20 font-medium">
            <NavItem to="/" name="Home" />
            <NavItem to="shop" name="Shop" />
            <NavItem to="about" name="About" />
            <NavItem to="contact" name="Contact" />
          </ul>
        </nav>

        <ul className="flex gap-10">
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
    </header>
  );
}
