import { useFormContext } from 'react-hook-form';
import { Separator } from '@/common/components';
import { Button } from '@/common/components/ui/button';
import { formatPrice } from '@/common/lib/utils';
import { Inputs } from '../../schema';

const items = [{ id: 123, name: 'Asgaard sofa', price: 250000, quantity: 1 }];

export default function Payments() {
  const { register } = useFormContext<Inputs>();

  return (
    <div className="flex-1">
      <table className="w-full">
        <thead>
          <tr className="text-2xl">
            <th className="py-[10px] text-left font-medium">Product</th>
            <th className="py-[10px] text-right font-medium">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, name, quantity }) => (
            <tr key={id}>
              <td className="py-[10px]">
                <span className="text-text-t">{name}</span>
                <span className="font-medium">&ensp;X&ensp;{quantity}</span>
              </td>
              <td className="py-[10px] text-right">{formatPrice(250000)}</td>
            </tr>
          ))}

          <tr>
            <td className="py-[10px]">Subtotal</td>
            <td className="py-[10px] text-right">{formatPrice(250000)}</td>
          </tr>

          <tr>
            <td className="py-[10px]">Total</td>
            <td className="py-[10px] text-2xl font-bold text-right text-theme">
              {formatPrice(250000)}
            </td>
          </tr>
        </tbody>
      </table>

      <Separator className="mt-3 mb-6" />

      <div className="flex flex-col gap-6">
        <span>Direct Bank Transfer</span>

        <p className="font-light text-text-t">
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>

        <div className="flex flex-col gap-2 font-medium text-text-t">
          <label
            htmlFor="bankTransfer"
            className="flex items-center gap-4 w-fit cursor-pointer"
          >
            <input
              type="radio"
              id="bankTransfer"
              value="bankTransfer"
              className="hidden [&:checked+span]:bg-black"
              {...register('paymentMethod')}
            />
            <span className="block w-4 h-4 rounded-full border border-text-t" />
            <span>Direct Bank Transfer</span>
          </label>

          <label
            htmlFor="cashOnDelivery"
            className="flex items-center gap-4 w-fit cursor-pointer"
          >
            <input
              type="radio"
              id="cashOnDelivery"
              value="cashOnDelivery"
              className="hidden [&:checked+span]:bg-black"
              {...register('paymentMethod')}
            />
            <span className="block w-4 h-4 rounded-full border border-text-t" />
            <span>Cash On Delivery</span>
          </label>
        </div>

        <p className="font-light">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our{' '}
          <span className="font-semibold">privacy policy.</span>
        </p>

        <Button
          variant="secondary"
          type="submit"
          className="w-full sm:w-80 mx-auto"
        >
          Place order
        </Button>
      </div>
    </div>
  );
}
