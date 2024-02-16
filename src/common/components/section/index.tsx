import { cn } from '@/common/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  wrapperClass?: string;
}

export default function Section({
  wrapperClass,
  className,
  id,
  ...rest
}: Props) {
  return (
    <section className={cn('bg-white', wrapperClass)} id={id}>
      <div
        className={cn(
          'mx-auto max-w-screen-laptop px-10 lg:px-20 xl:px-32 py-10',
          className
        )}
        {...rest}
      />
    </section>
  );
}
