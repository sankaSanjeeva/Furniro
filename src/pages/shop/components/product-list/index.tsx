import { Pagination, Products } from '@/common/components';

export default function ProductList() {
  return (
    <>
      <Products className="mb-16">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((x) => (
          <Products.Card key={x} />
        ))}
      </Products>

      <Pagination pageCount={4} />
    </>
  );
}
