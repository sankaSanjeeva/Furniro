import { useEffect, useState } from 'react';
import { Products } from '@/common/components';
import { Button } from '@/common/components/ui/button';
import { Product } from '@/common/types';

export default function OurProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/products?page=1')
      .then((res) => res.json())
      .then((res) => setProducts(res.data))
      .catch();
  }, []);

  return (
    <div className="font-semibold text-text-p">
      <h1 className="text-5xl font-bold text-center">Our Products</h1>

      <Products className="mt-8">
        {products.map((product) => (
          <Products.Card key={product.code} {...product} />
        ))}
      </Products>

      <div className="text-center mt-8">
        <Button variant="outline" className="w-60">
          Show More
        </Button>
      </div>
    </div>
  );
}
