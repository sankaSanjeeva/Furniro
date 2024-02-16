import { ChevronIcon } from '@/assets/icons';
import { Separator } from '@/common/components';

export default function Breadcrumb({ productName }: { productName: string }) {
  return (
    <div>
      <div className="flex items-center gap-5">
        <span>Home</span>
        <ChevronIcon className="text-black" />
        <span>Shop</span>
        <Separator orientation="vertical" className="h-9" />
        <span className="text-black">{productName}</span>
      </div>
    </div>
  );
}
