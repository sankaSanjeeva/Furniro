import { Button } from '@/common/components/ui/button';
import { ImageSlider } from './components';

export default function ExploreMore() {
  return (
    <section className="bg-[#FCF8F3]">
      <div className="mx-auto max-w-[1440px] py-11 flex flex-col xl:flex-row xl:items-center text-text-p">
        <div className="pl-24 pr-10 shrink-0 text-center mx-auto xl:text-left">
          <div className="mb-6 max-w-[420px]">
            <h1 className="text-[40px] leading-tight font-bold">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="font-medium text-text-s">
              Our designer already made a lot of beautiful prototype of rooms
              that inspire you
            </p>
          </div>
          <Button className="w-44">Explore More</Button>
        </div>
        <ImageSlider />
      </div>
    </section>
  );
}
