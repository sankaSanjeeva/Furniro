import { Pagination, Products } from '@/common/components';
import { PaginationResponse, Product } from '@/common/types';

export default function ProductList({
  data,
  pagination: { totalPages },
}: PaginationResponse<Product>) {
  return (
    <>
      <Products className="mb-16">
        {data.map((product) => (
          <Products.Card key={product.code} {...product} />
        ))}
      </Products>

      <Pagination pageCount={totalPages} />
    </>
  );
}
