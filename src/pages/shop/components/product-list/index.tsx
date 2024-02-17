import { Products } from '@/common/components';
import { Pagination } from '..';

export default function ProductList() {
  return (
    <>
      <Products className="mb-16">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((x) => (
          <Products.Card key={x} />
        ))}
      </Products>

      <Pagination itemCount={32} />
    </>
  );
}
