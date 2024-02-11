import { useCallback } from 'react';
import { ArrowIcon } from '@/assets/icons';
import { cn } from '@/common/lib/utils';
import { Button } from '@/common/components/ui/button';

interface Props {
  active: number;
  index: number;
  imageUrl: string;
}

export default function ImageSlide({ active, index, imageUrl }: Props) {
  const getImageStyle = useCallback(() => {
    let position: string;

    switch (active) {
      case 2:
        position = '-translate-x-[399px]';
        break;
      case 3:
        position = '-translate-x-[798px]';
        break;
      case 4:
        position = '-translate-x-[1197px]';
        break;
      default:
        position = '';
        break;
    }

    return cn(
      'w-[375px] h-[480px] shrink-0 bg-cover transition-all duration-500',
      active === index && 'w-[400px] h-[582px]',
      position
    );
  }, [active, index]);

  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={getImageStyle()}
    >
      <div
        className={cn(
          'h-full p-6 flex items-end opacity-0 transition-opacity duration-500',
          active === index && 'opacity-100'
        )}
      >
        <div className="py-8 px-4 backdrop-blur-sm bg-white/70">
          <p className="flex items-center gap-2">
            <span>{index}</span>
            <span className="h-[1px] w-4 bg-text-s" />
            <span>Bed Room</span>
          </p>
          <span className="font-semibold text-[28px] text-text-p">
            Inner Peace
          </span>
        </div>
        <Button>
          <ArrowIcon />
        </Button>
      </div>
    </div>
  );
}
