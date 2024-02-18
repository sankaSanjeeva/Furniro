import { Filter, ProductList } from './components';
import { Overview, PreFooter, Section } from '@/common/components';

export default function Shop() {
  return (
    <div>
      <Overview page="shop" />

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
