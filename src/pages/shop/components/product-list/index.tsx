import { Products } from '@/common/components';
import { Filter, Pagination } from '..';

export default function ProductList() {
  return (
    <section className=" pb-10">
      <Filter itemCount={32} />

      <div className="max-w-screen-laptop mx-auto py-16 px-5 md:px-10 laptop:px-24">
        <Products className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((x) => (
            <Products.Card key={x} />
          ))}
        </Products>
      </div>

      <Pagination itemCount={32} />
    </section>
  );
}
