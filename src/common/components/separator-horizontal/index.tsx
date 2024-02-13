import { HTMLAttributes } from 'react';
import { cn } from '@/common/lib/utils';

export default function SeparatorHorizontal({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('h-0.5 bg-[#D9D9D9]', className)} {...rest} />;
}
