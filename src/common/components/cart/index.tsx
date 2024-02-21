import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartCloseIcon, CartRemoveIcon } from '@/assets/icons';
import { SheetClose } from '@/common/components/ui/sheet';
import { Separator } from '..';
import { Button } from '../ui/button';
import { formatPrice } from '@/common/lib/utils';

const items = [
  {
    id: 123,
    image: 'https://m.media-amazon.com/images/I/41g9yMVDzDL.jpg',
    name: 'Asgaard sofa',
    quantity: 1,
    price: 250000,
  },
  {
    id: 456,
    image: 'https://m.media-amazon.com/images/I/41g9yMVDzDL.jpg',
    name: 'Asgaard sofa',
    quantity: 1,
    price: 250000,
  },
];

function Item({
  image,
  name,
  quantity,
  price,
}: {
  image: string;
  name: string;
  quantity: number;
  price: number;
}) {
  return (
    <div className="flex justify-between items-center gap-8">
      <img
        src={image}
        alt={name}
        className="w-[105px] h-[105px] object-cover rounded-lg"
      />

      <div className="flex-grow">
        <div>{name}</div>
        <div className="flex items-center gap-4 mt-4">
          <span className="font-light">{quantity}</span>
          <span className="text-xs font-light">X</span>
          <span className="text-xs text-theme">{formatPrice(price)}</span>
        </div>
      </div>

      <button type="button">
        <CartRemoveIcon className="text-text-t hover:text-text-s transition-colors" />
      </button>
    </div>
  );
}

export default function Cart() {
  const navigate = useNavigate();

  const productIds = useMemo(
    () =>
      items.reduce((prev, curr) => {
        prev.append('productId', curr.id.toString());
        return prev;
      }, new URLSearchParams()),
    /**
     * TODO: Update dependencies
     */
    []
  ).toString();

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between">
        <h3 className="font-semibold text-2xl text-black">Shopping Cart</h3>
        <SheetClose>
          <CartCloseIcon className="text-text-t hover:text-text-s transition-colors" />
        </SheetClose>
      </div>

      <Separator className="mt-6 mb-10" />

      <div className="flex flex-col gap-5 flex-grow">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>

      <div className="flex justify-between gap-5 mt-6">
        <span>Subtotal</span>
        <span className="font-semibold text-theme">{formatPrice(520000)}</span>
      </div>

      <Separator className="my-6" />

      <div className="flex justify-center sm:justify-between gap-4 flex-wrap">
        <SheetClose asChild>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate('/shop/cart')}
          >
            Cart
          </Button>
        </SheetClose>

        <SheetClose asChild>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate('/shop/cart/checkout')}
          >
            Checkout
          </Button>
        </SheetClose>

        <SheetClose asChild>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate(`/shop/comparison?${productIds}`)}
          >
            Comparison
          </Button>
        </SheetClose>
      </div>
    </div>
  );
}
