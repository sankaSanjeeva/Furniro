import { useNavigate } from 'react-router-dom';
import { Button } from '@/common/components/ui/button';
import { PriceCard } from '..';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-4 gap-12">
      <div>
        <div className="font-medium text-[28px] leading-tight">
          Go to Product page for more Products
        </div>
        <Button
          variant="link"
          className="mt-5 p-0 h-auto text-text-s"
          onClick={() => navigate('/shop')}
        >
          View More
        </Button>
      </div>

      <PriceCard
        image="https://m.media-amazon.com/images/I/41g9yMVDzDL.jpg"
        name="Asgaard Sofa"
        price={100}
        starts={4}
        reviews={220}
      />

      <PriceCard
        image="https://m.media-amazon.com/images/I/41g9yMVDzDL.jpg"
        name="Outdoor Sofa Set"
        price={100}
        starts={4}
        reviews={220}
      />

      <div>
        <div className="font-semibold text-2xl">Add A Product</div>
        <Button className="mt-3">Choose a Product</Button>
      </div>
    </div>
  );
}
