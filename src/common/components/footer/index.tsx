import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export default function Footer() {
  return (
    <footer className="border-t border-t-black/15">
      <div className="mx-auto max-w-screen-laptop px-5 sm:px-10 xl:px-24">
        <div className="py-12 flex flex-col md:flex-row justify-between gap-10">
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

        <div className="py-8 leading-none border-t border-t-black/15">
          2024 furino. All rights reserved
        </div>
      </div>
    </footer>
  );
}
