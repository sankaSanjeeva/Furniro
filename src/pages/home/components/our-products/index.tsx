import { Products } from '@/common/components';
import { Button } from '@/common/components/ui/button';
import { useGetProductsQuery } from '@/redux/services/product';

export default function OurProducts() {
  const { data } = useGetProductsQuery({
    page: 1,
    offset: 8,
    sortBy: 'default',
  });

  return (
    <div className="font-semibold text-text-p">
      <h1 className="text-5xl font-bold text-center">Our Products</h1>

      <Products className="mt-8">
        {data?.data.map((product) => (
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
