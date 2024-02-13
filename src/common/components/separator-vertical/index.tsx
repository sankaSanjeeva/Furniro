import { HTMLAttributes } from 'react';
import { cn } from '@/common/lib/utils';

export default function SeparatorVertical({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('h-9 w-0.5 bg-text-t', className)} {...rest} />;
}
