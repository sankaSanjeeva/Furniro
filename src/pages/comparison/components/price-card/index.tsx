import { Separator, StarRate } from '@/common/components';
import { formatPrice } from '@/common/lib/utils';

interface Props {
  image: string;
  name: string;
  price: number;
  starts: number;
  reviews: number;
}

export default function PriceCard({
  image,
  name,
  price,
  starts,
  reviews,
}: Props) {
  return (
    <div>
      <img
        src={image}
        alt={name}
        className="h-44 w-full object-cover rounded-[10px]"
      />
      <div className="flex flex-col gap-1 mt-4 font-medium">
        <span className="text-2xl">{name}</span>
        <span className="text-lg">{formatPrice(price)}</span>
        <div className="flex items-center gap-[6px]">
          <span className="text-lg">{starts}</span>
          <StarRate rate={starts} />
          <Separator orientation="vertical" className="h-[30px]" />
          <span className="text-sm font-normal text-text-t">
            {reviews} Review
          </span>
        </div>
      </div>
    </div>
  );
}
