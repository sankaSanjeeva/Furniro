import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  SeparatorHorizontal,
  SeparatorVertical,
  StarRate,
} from '@/common/components';
import { Breadcrumb } from './components';
import { Button } from '@/common/components/ui/button';
import { cn } from '@/common/lib/utils';
import { FacebookIcon, InstagramIcon, TwitterXIcon } from '@/assets/icons';
import background from '@/assets/dining.png';

const sizes = ['L', 'XL', 'XS'];
const colors = ['#816DFA', '#000000', '#B88E2F'];

export default function Product() {
  const [count, setCount] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();

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
    <section>
      <Breadcrumb productName="Asgaard sofa" />

      <div className="max-w-screen-laptop mx-auto px-5 sm:px-10 xl:px-24 pt-9 pb-16 flex flex-col lg:flex-row gap-10 xl:gap-24">
        <div className="flex gap-8">
          <div className="flex flex-col gap-8">
            <div
              style={{ backgroundImage: `url(${background})` }}
              className="h-20 w-20 bg-cover bg-center bg-no-repeat rounded-[10px]"
            />
            <div
              style={{ backgroundImage: `url(${background})` }}
              className="h-20 w-20 bg-cover bg-center bg-no-repeat rounded-[10px]"
            />
            <div
              style={{ backgroundImage: `url(${background})` }}
              className="h-20 w-20 bg-cover bg-center bg-no-repeat rounded-[10px]"
            />
            <div
              style={{ backgroundImage: `url(${background})` }}
              className="h-20 w-20 bg-cover bg-center bg-no-repeat rounded-[10px]"
            />
          </div>
          <div
            style={{ backgroundImage: `url(${background})` }}
            className="h-[420px] w-[420px] bg-cover bg-center bg-no-repeat  rounded-[10px]"
          />
        </div>

        <div>
          <h1 className="text-[42px]">Asgaard sofa</h1>
          <span className="font-medium text-text-t">Rs. 250,000.00</span>

          <div className="flex items-center gap-5 mt-[10px]">
            <StarRate rate={4} />
            <SeparatorVertical className="h-7" />
            <span className="text-sm text-text-t">5 Customer Review</span>
          </div>

          <p className="text-sm mt-3">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
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
            <div className="flex gap-2 h-12 rounded-xl border border-black opacity-75 hover:opacity-100 transition-opacity">
              <button type="button" className="px-4" onClick={decrementCount}>
                -
              </button>
              <span className="my-auto min-w-6 text-center">{count}</span>
              <button type="button" className="px-4" onClick={incrementCount}>
                +
              </button>
            </div>

            <div className="flex gap-[10px]">
              <button
                type="button"
                className="h-12 px-4 rounded-xl border border-black opacity-75 hover:opacity-100 transition-opacity"
              >
                Add To Cart
              </button>
              <button
                type="button"
                className="h-12 px-4 rounded-xl border border-black opacity-75 hover:opacity-100 transition-opacity"
              >
                + Compare
              </button>
            </div>
          </div>

          <SeparatorHorizontal className="mt-14 mb-10" />

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
    </section>
  );
}
