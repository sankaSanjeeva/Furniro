import { useNavigate } from 'react-router-dom';
import { BinIcon } from '@/assets/icons';
import { Overview, PreFooter, Section } from '@/common/components';
import { Button } from '@/common/components/ui/button';
import { Input } from '@/common/components/ui/input';
import { formatPrice } from '@/common/lib/utils';

export default function Cart() {
  const navigate = useNavigate();

  return (
    <div>
      <Overview page="cart" />

      <Section>
        <div className="flex gap-8 flex-col xl:flex-row">
          <div className="flex-grow overflow-auto">
            <table className="w-full min-w-[720px]">
              <thead className="text-left bg-theme-light">
                <tr>
                  <th className="p-4">
                    <span />
                  </th>
                  <th className="p-4 font-medium">Product</th>
                  <th className="p-4 font-medium">Price</th>
                  <th className="p-4 font-medium">Quantity</th>
                  <th className="p-4 font-medium">Subtotal</th>
                  <th className="p-4">
                    <span />
                  </th>
                </tr>
              </thead>
              <tbody className="text-text-s">
                <tr>
                  <td className="p-4 pl-0">
                    <img
                      src="https://m.media-amazon.com/images/I/41g9yMVDzDL.jpg"
                      alt=""
                      className="w-[105px] h-[105px] rounded-[10px] object-cover"
                    />
                  </td>
                  <td className="p-4">Asgaard sofa</td>
                  <td className="p-4">{formatPrice(250000)}</td>
                  <td className="p-4">
                    <Input className="w-12 h-10" />
                  </td>
                  <td className="p-4">{formatPrice(250000)}</td>
                  <td className="p-4">
                    <button type="button">
                      <BinIcon className="text-theme/80 hover:text-theme transition-colors" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-20 pt-4 flex flex-col items-center gap-8 bg-theme-light">
            <h3 className="font-semibold text-[32px]">Cart Totals</h3>
            <div className="flex justify-between items-center gap-12">
              <span className="font-medium">Subtotal</span>
              <span className="text-text-t">{formatPrice(250000)}</span>
            </div>
            <div className="flex justify-between items-center gap-12">
              <span className="font-medium">Total</span>
              <span className="text-xl text-theme">{formatPrice(250000)}</span>
            </div>
            <Button
              variant="secondary"
              className="w-56"
              onClick={() => navigate('/shop/cart/checkout')}
            >
              Checkout
            </Button>
          </div>
        </div>
      </Section>

      <PreFooter />
    </div>
  );
}
