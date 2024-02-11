import { ChevronIcon } from '@/assets/icons';
import background from '@/assets/images/background/cafe.jpg';
import { Capabilities, ProductList } from './components';

export default function Shop() {
  return (
    <div>
      <section
        style={{ backgroundImage: `url(${background})` }}
        className="bg-top bg-no-repeat bg-cover bg-fixed"
      >
        <div className="backdrop-blur-sm py-28 bg-white/25">
          <div className="mx-auto w-fit text-center font-medium">
            <h1 className="text-5xl mb-2">Shop</h1>
            <p className="flex items-center justify-center gap-1">
              <span>Home</span>
              <ChevronIcon className="w-5 h-5 [&>path]:stroke-black" />
              <span className="font-light">Shop</span>
            </p>
          </div>
        </div>
      </section>

      <ProductList />

      <Capabilities />
    </div>
  );
}
