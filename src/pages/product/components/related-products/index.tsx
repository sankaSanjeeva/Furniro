import { Products } from '@/common/components';
import { Button } from '@/common/components/ui/button';

export default function RelatedProducts() {
  return (
    <div>
      <h3 className="text-4xl font-medium text-center">Related Products</h3>

      <Products className="mt-6 mb-11">
        {[1, 2, 3, 4].map((x) => (
          <Products.Card key={x} />
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
