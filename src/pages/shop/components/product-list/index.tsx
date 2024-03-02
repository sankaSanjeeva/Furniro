import { Pagination, Products } from '@/common/components';
import { Product } from '@/common/types';

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <>
      <Products className="mb-16">
        {products.map((product) => (
          <Products.Card key={product.code} {...product} />
        ))}
      </Products>

      <Pagination pageCount={4} />
    </>
  );
}
