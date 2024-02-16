import { Products } from '@/common/components';
import { Button } from '@/common/components/ui/button';

export default function OurProducts() {
  return (
    <section className="scroll-mt-24 bg-white" id="products">
      <div className="mx-auto max-w-screen-laptop px-5 md:px-10 laptop:px-24 py-10 font-semibold text-text-p">
        <h1 className="text-5xl font-bold text-center">Our Products</h1>

        <Products className="mt-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
            <Products.Card key={x} />
          ))}
        </Products>

        <div className="text-center mt-8">
          <Button variant="outline" className="w-60">
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
}
