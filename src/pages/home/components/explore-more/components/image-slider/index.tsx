import { useState } from 'react';
import { ChevronIcon } from '@/assets/icons';
import bedroom from '@/assets/bedroom.png';
import dining from '@/assets/dining.png';
import { cn } from '@/common/lib/utils';
import { ImageSlide } from '..';

export default function ImageSlider() {
  const [activeSlide, setActiveSlide] = useState(1);

  const changeSlide = (count: 1 | -1) => {
    setActiveSlide((prev) => prev + count);
  };

  return (
    <div className="flex gap-6 overflow-hidden relative min-h-[582px] ml-10 mt-20 xl:ml-0 xl:mt-0">
      <ImageSlide active={activeSlide} index={1} imageUrl={bedroom} />
      <ImageSlide active={activeSlide} index={2} imageUrl={dining} />
      <ImageSlide active={activeSlide} index={3} imageUrl={bedroom} />
      <ImageSlide active={activeSlide} index={4} imageUrl={dining} />

      <button
        type="button"
        className={cn(
          'w-12 h-12 rounded-full shadow-lg absolute left-5 bottom-1/2 flex justify-center items-center opacity-75 hover:opacity-100 transition-opacity duration-300 bg-white',
          activeSlide <= 1 && 'opacity-0 pointer-events-none'
        )}
        onClick={() => changeSlide(-1)}
      >
        <ChevronIcon className="rotate-180 h-6 w-6 text-theme" />
      </button>

      <button
        type="button"
        className={cn(
          'w-12 h-12 rounded-full shadow-lg absolute right-10 xl:right-16 bottom-1/2 flex justify-center items-center opacity-75 hover:opacity-100 transition-opacity duration-300 bg-white',
          activeSlide >= 4 && 'opacity-0 pointer-events-none'
        )}
        onClick={() => changeSlide(1)}
      >
        <ChevronIcon className=" h-6 w-6 text-theme" />
      </button>

      <div className="absolute bottom-0 left-[calc(400px_+_24px)] h-[calc(582px_-_480px)] p-2 flex items-center gap-5">
        {[1, 2, 3, 4].map((x) => (
          <div
            key={x}
            className={cn(
              'w-3 h-3 rounded-full cursor-pointer transition-all bg-gray-300 hover:bg-theme',
              activeSlide === x &&
                'cursor-default outline outline-1 outline-offset-8 outline-theme bg-theme'
            )}
            onClick={() => setActiveSlide(x)}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
}
