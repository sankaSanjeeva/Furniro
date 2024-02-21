import { cn } from '@/common/lib/utils';

function Form({
  className,
  ...rest
}: React.FormHTMLAttributes<HTMLFormElement>) {
  return <form className={cn('flex flex-col gap-9', className)} {...rest} />;
}

function Field({ children }: React.PropsWithChildren) {
  return <div className="flex flex-col gap-[22px] relative">{children}</div>;
}

function Label({
  className,
  ...rest
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  return <label className={cn('font-medium w-fit', className)} {...rest} />;
}

function Error({ children }: React.PropsWithChildren) {
  return (
    <span className="absolute -bottom-6 left-2 text-sm text-red-500">
      {children}
    </span>
  );
}

export default Object.assign(Form, {
  Field,
  Label,
  Error,
});
