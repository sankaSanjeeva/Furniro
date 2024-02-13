import { ChevronIcon } from '@/assets/icons';
import { SeparatorVertical } from '@/common/components';

export default function Breadcrumb({ productName }: { productName: string }) {
  return (
    <div className="bg-theme-light text-text-t">
      <div className="max-w-screen-laptop mx-auto px-5 sm:px-10 lg:px-24 py-8 flex items-center gap-5">
        <span>Home</span>
        <ChevronIcon className="text-black" />
        <span>Shop</span>
        <SeparatorVertical />
        <span className="text-black">{productName}</span>
      </div>
    </div>
  );
}
