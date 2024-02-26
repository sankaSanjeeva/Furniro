import { HTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';
import { GitCompare, Heart, Share2 } from 'lucide-react';
import dining from '@/assets/dining.png';
import { cn, formatPrice } from '@/common/lib/utils';
import { Button } from '../ui/button';

const discount = null;

const getId = () => Math.floor(Math.random() * 1000);

function Grid({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8',
        className
      )}
      {...rest}
    />
  );
}

function Card() {
  const navigate = useNavigate();

  return (
    <div className="group relative mx-auto w-full max-w-72 bg-slate-100">
      <div
        className={cn(
          'absolute top-6 right-6 w-12 h-12 rounded-full flex justify-center items-center font-medium group-hover:opacity-0 transition-opacity duration-500 text-white',
          discount ? 'bg-[#E97171]' : 'bg-[#2EC1AC]'
        )}
      >
        {discount ? `-${discount}%` : 'New'}
      </div>

      <img
        src={dining}
        alt="dining"
        className="h-[300px] object-cover w-full"
      />

      <div className="flex flex-col gap-2 p-4 pb-8">
        <span className="text-2xl">Syltherine</span>
        <span className="font-medium text-text-s">Stylish cafe chair</span>
        <div className="flex justify-between">
          <span className="font-semibold text-xl">{formatPrice(75000)}</span>
          <s className="font-normal text-str text-text-s/75">
            <span className="text-text-s">{formatPrice(80000)}</span>
          </s>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#3A3A3A]/75">
        <Button
          variant="outline"
          className="w-[200px]"
          onClick={() => navigate(`/shop/${getId()}?size=L&color=%23816DFA`)}
        >
          Add to cart
        </Button>
        <div className="flex justify-evenly w-full text-white">
          <button
            type="button"
            className="flex items-center gap-0.5 hover:text-theme"
          >
            <Share2 width={16} height={16} />
            <span>Share</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-0.5 hover:text-theme"
            onClick={() => navigate(`/shop/comparison?productId=${getId()}`)}
          >
            <GitCompare width={16} height={16} />
            <span>Compare</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-0.5 hover:text-theme"
          >
            <Heart width={16} height={16} />
            <span>Like</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Object.assign(Grid, {
  Card,
});
