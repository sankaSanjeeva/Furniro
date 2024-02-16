import { ChevronIcon } from '@/assets/icons';
import background from '@/assets/images/background/cafe.jpg';
import { Filter, ProductList } from './components';
import { PreFooter, Section } from '@/common/components';

export default function Shop() {
  return (
    <div>
      <section
        style={{ backgroundImage: `url(${background})` }}
        className="bg-top bg-no-repeat bg-cover"
      >
        <div className="backdrop-blur-sm py-28 bg-white/40">
          <div className="mx-auto w-fit text-center font-medium">
            <h1 className="text-5xl mb-2">Shop</h1>
            <p className="flex items-center justify-center gap-1">
              <span>Home</span>
              <ChevronIcon className="text-black" />
              <span className="font-light">Shop</span>
            </p>
          </div>
        </div>
      </section>

      <Section wrapperClass="text-nowrap bg-theme-light" className="py-6">
        <Filter itemCount={32} />
      </Section>

      <Section>
        <ProductList />
      </Section>

      <Section
        wrapperClass="bg-theme-light"
        className="py-24 px-10 lg:px-14 xl:px-14"
      >
        <PreFooter />
      </Section>
    </div>
  );
}
