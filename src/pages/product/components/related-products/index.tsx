import { useEffect, useState } from 'react';
import { Products } from '@/common/components';
import { Button } from '@/common/components/ui/button';
import { Product } from '@/common/types';

export default function RelatedProducts({ productId }: { productId?: string }) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`/products/${productId}/related?page=1`)
      .then((res) => res.json())
      .then((res) => setProducts(res.data))
      .catch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3 className="text-4xl font-medium text-center">Related Products</h3>

      <Products className="mt-6 mb-11">
        {products.map((product) => (
          <Products.Card key={product.code} {...product} />
        ))}
      </Products>

      <div className="text-center">
        <Button variant="outline" className="w-60">
          Show More
        </Button>
      </div>
    </div>
  );
}
