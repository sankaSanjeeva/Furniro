import { Link } from 'react-router-dom';
import { Heart, Search, ShoppingCart, UserRound } from 'lucide-react';
import logo from './logo.png';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className="shadow">
      <div className="mx-auto max-w-screen-xl px-10 h-24 flex justify-between items-center">
        <div className="shrink-0">
          <Link to="/">
            <img src={logo} className="logo react" alt="React logo" />
          </Link>
        </div>

        <nav>
          <ul className="flex gap-20 font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="shop">Shop</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
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
