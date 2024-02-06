import { ProductCard } from '@/common/components';
import { Button } from '@/common/components/ui/button';

export default function OurProducts() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-5 md:px-10 py-10 font-semibold text-text-p">
        <h1 className="text-5xl font-bold text-center">Our Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
            <ProductCard key={x} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="w-60">
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
}
