import { useSearchParams } from 'react-router-dom';
import { Filter, ProductList } from './components';
import { Overview, PreFooter, Section } from '@/common/components';
import { useGetProductsQuery } from '@/redux/services/product';

export default function Shop() {
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get('page'));
  const offset = Number(searchParams.get('show'));
  const sortBy = searchParams.get('sortBy');

  const { data } = useGetProductsQuery({ page, offset, sortBy });

  return (
    <div>
      <Overview page="shop" />

      <Section wrapperClass="text-nowrap bg-theme-light" className="py-6">
        <Filter itemCount={data?.pagination.totalRecords} />
      </Section>

      <Section>{data && <ProductList {...data} />}</Section>

      <PreFooter />
    </div>
  );
}
