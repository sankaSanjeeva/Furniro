import { Button } from '@/common/components/ui/button';
import { ImageSlider } from './components';

export default function ExploreMore() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center text-text-p">
      <div className="px-10 xl:pl-24 shrink-0 text-center mx-auto xl:text-left">
        <div className="mb-6 max-w-[420px]">
          <h1 className="text-[40px] leading-tight font-bold">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="font-medium text-text-s">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
        </div>
        <Button className="w-44">Explore More</Button>
      </div>
      <ImageSlider />
    </div>
  );
}
