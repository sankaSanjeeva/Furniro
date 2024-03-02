import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ProductList } from './components';
import { Overview, PreFooter, Section } from '@/common/components';
import { Product } from '@/common/types';

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [itemCount, setItemCount] = useState<number>();

  const [searchParams] = useSearchParams();

  const page = searchParams.get('page');
  const offset = searchParams.get('show');

  useEffect(() => {
    fetch(`/products?page=${page}&offset=${offset}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.data);
        setItemCount(res.pagination.total_records);
      })
      .catch();
  }, [offset, page]);

  return (
    <div>
      <Overview page="shop" />

      <Section wrapperClass="text-nowrap bg-theme-light" className="py-6">
        <Filter itemCount={itemCount} />
      </Section>

      <Section>
        <ProductList products={products} />
      </Section>

      <PreFooter />
    </div>
  );
}
