import { useSearchParams } from 'react-router-dom';
import { Overview, PreFooter, Section } from '@/common/components';
import { Header, Table } from './components';

export default function Comparison() {
  const [searchParams] = useSearchParams();

  const ids = searchParams.getAll('productId');

  return (
    <div>
      <Overview name="Product Comparison" page="comparison" />

      <Section wrapperClass="overflow-auto" className="min-w-[920px]">
        <Header />
        <Table ids={ids} />
      </Section>

      <PreFooter />
    </div>
  );
}
