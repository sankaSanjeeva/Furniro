import { HTMLAttributes } from 'react';
import { cn } from '@/common/lib/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'vertical' | 'horizontal';
}

export default function Separator({
  orientation = 'horizontal',
  className,
  ...rest
}: Props) {
  return (
    <div
      className={cn(
        'bg-[#D9D9D9]',
        orientation === 'horizontal' ? 'h-[1px]' : 'w-0.5',
        className
      )}
      {...rest}
    />
  );
}
