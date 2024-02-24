import { Link } from 'react-router-dom';
import { MenuLink } from '@/router';
import { Button } from '../ui/button';
import { Separator } from '..';

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex gap-10 flex-row md:flex-col">
          <h1 className="text-2xl font-bold">Furniro</h1>
          <div className="text-[#9F9F9F]">
            <div>400 University Drive Suite 200 Coral</div>
            <div>Gables,</div>
            <div>FL 33134 USA</div>
          </div>
        </div>

        <div>
          <span className="text-[#9F9F9F]">Links</span>
          <ul className="mt-5 md:mt-12 flex flex-row md:flex-col gap-10 flex-wrap font-medium">
            <li>
              <Link to={MenuLink.HOME}>Home</Link>
            </li>
            <li>
              <Link to={MenuLink.SHOP}>Shop</Link>
            </li>
            <li>
              <Link to={MenuLink.BLOG}>Blog</Link>
            </li>
            <li>
              <Link to={MenuLink.CONTACT}>Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <span className="text-[#9F9F9F]">Help</span>
          <ul className="mt-5 md:mt-12 flex flex-row md:flex-col gap-10 flex-wrap font-medium">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        <div>
          <span className="text-[#9F9F9F]">Newsletter</span>
          <div className="mt-5 md:mt-10">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="text-sm focus-visible:outline-none border-b border-black"
            />
            <Button variant="link">SUBSCRIBE</Button>
          </div>
        </div>
      </div>

      <Separator className="mt-12" />

      <div className="py-8 leading-none">2024 furino. All rights reserved</div>
    </div>
  );
}
