import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Section, Separator, StarRate } from '@/common/components';
import {
  AdditionalDetails,
  Breadcrumb,
  Gallery,
  RelatedProducts,
} from './components';
import { Button } from '@/common/components/ui/button';
import { cn, formatPrice } from '@/common/lib/utils';
import { FacebookIcon, InstagramIcon, TwitterXIcon } from '@/assets/icons';

const sizes = ['L', 'XL', 'XS'];
const colors = ['#816DFA', '#000000', '#B88E2F'];

export default function Product() {
  const [count, setCount] = useState(1);

  const { productId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const size = searchParams.get('size');
  const color = searchParams.get('color');

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleSearchParamsChange = (key: string, value: string) => {
    setSearchParams((params) => {
      params.set(key, value);
      return params;
    });
  };

  useEffect(() => {
    if (!size) {
      handleSearchParamsChange('size', sizes[0]);
    }
    if (!color) {
      handleSearchParamsChange('color', colors[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Section wrapperClass="bg-theme-light text-text-t" className="py-8">
        <Breadcrumb productName="Asgaard sofa" />
      </Section>

      <Section>
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-24">
          <Gallery
            images={[
              'https://media.istockphoto.com/id/1186545523/photo/narrow-living-room.jpg?s=612x612&w=0&k=20&c=f26cCLhQ-bChR0iLRKJPh89EfUfMTzwXZzDgmeNDL0c=',
              'https://media.istockphoto.com/id/1254852844/photo/balcony-with-rattan-furniture.jpg?s=612x612&w=0&k=20&c=L5zbcFWazkRTWXavI-GPXJKDKOqQpJTYO6pI06XGthU=',
              'https://m.media-amazon.com/images/I/41g9yMVDzDL.jpg',
              'https://media.istockphoto.com/id/1428131201/photo/cozy-luxury-and-modern-living-room-with-large-windows-sofa-chairs-decoration-and-fireplace.jpg?s=612x612&w=0&k=20&c=GI0Ub0OydbfHl0mQLtQSTbBpokKVaA_Run-dlOoSmYs=',
            ]}
          />

          <div>
            <h1 className="text-[42px]">Asgaard sofa</h1>
            <span className="font-medium text-text-t">
              {formatPrice(250000)}
            </span>

            <div className="flex items-center gap-5 mt-[10px]">
              <StarRate rate={4} />
              <Separator orientation="vertical" className="h-7" />
              <span className="text-sm text-text-t">5 Customer Review</span>
            </div>

            <p className="text-sm mt-3">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            <div className="mt-5">
              <span className="text-sm text-text-t">Size</span>
              <div className="flex gap-4 mt-3">
                {sizes.map((s) => (
                  <Button
                    key={s}
                    className={cn(
                      'w-[30px] h-[30px] text-sm rounded-[5px] bg-theme-light text-black hover:bg-theme hover:text-white',
                      size === s && 'bg-theme text-white'
                    )}
                    onClick={() => handleSearchParamsChange('size', s)}
                  >
                    {s}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <span className="text-sm text-text-t">Color</span>
              <div className="flex gap-4 mt-3">
                {colors.map((c) => (
                  <button
                    type="button"
                    key={c}
                    onClick={() => handleSearchParamsChange('color', c)}
                  >
                    <div
                      style={{ backgroundColor: c, outlineColor: c }}
                      className={cn(
                        'w-[30px] h-[30px] rounded-full transition-[outline-offset]',
                        color === c && 'outline outline-2 outline-offset-2'
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-center xl:justify-start flex-wrap gap-[10px] mt-8">
              <div className="flex gap-2 h-12 text-black border border-black rounded-2xl">
                <button
                  type="button"
                  className="px-4 hover:text-black/75"
                  onClick={decrementCount}
                >
                  -
                </button>
                <span className="my-auto min-w-6 text-center">{count}</span>
                <button
                  type="button"
                  className="px-4 hover:text-black/75"
                  onClick={incrementCount}
                >
                  +
                </button>
              </div>

              <div className="flex gap-[10px]">
                <Button variant="secondary">Add To Cart</Button>
                <Button
                  variant="secondary"
                  onClick={() =>
                    navigate(`/shop/comparison?productId=${productId}`)
                  }
                >
                  + Compare
                </Button>
              </div>
            </div>

            <Separator className="mt-14 mb-10" />

            <table className="text-text-t">
              <tbody>
                <tr>
                  <td>SKU</td>
                  <td className="pl-4 pr-3 py-[6px]">:</td>
                  <td>SS001</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td className="pl-4 pr-3 py-[6px]">:</td>
                  <td>Sofas</td>
                </tr>
                <tr>
                  <td>Tags</td>
                  <td className="pl-4 pr-3 py-[6px]">:</td>
                  <td>Sofa, Chair, Home, Shop</td>
                </tr>
                <tr>
                  <td>Share</td>
                  <td className="pl-4 pr-3 py-[6px]">:</td>
                  <td>
                    <div className="flex gap-6 text-black">
                      <FacebookIcon />
                      <InstagramIcon />
                      <TwitterXIcon />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Separator />

      <Section>
        <AdditionalDetails />
      </Section>

      <Separator />

      <Section>
        <RelatedProducts />
      </Section>
    </div>
  );
}
