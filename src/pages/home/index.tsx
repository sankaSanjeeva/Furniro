import { Button } from '@/common/components/ui/button';
import bedroom from '@/assets/bedroom.png';
import dining from '@/assets/dining.png';
import living from '@/assets/living.png';

export default function Home() {
  return (
    <div className="bg-img bg-center bg-no-repeat bg-cover bg-fixed">
      <section className="flex justify-center lg:justify-end items-center min-h-[calc(100vh_-_96px)] mx-auto max-w-screen-xl px-10">
        <div className="p-10 my-10 rounded-[10px] text-center lg:text-left max-w-[620px] text-text-p bg-[#FFF3E3]">
          <h3 className="font-semibold tracking-widest mb-1">New Arrival</h3>
          <h1 className="text-5xl lg:text-6xl font-bold text-theme">
            Discover Our&nbsp;
            <br className="hidden lg:inline" />
            New Collection
          </h1>
          <p className="text-base lg:text-lg font-medium mt-4 mb-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button className="h-16 w-56 font-bold">BUY NOW</Button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-10 lg:px-20 py-10 grid grid-cols-3 gap-x-5 text-2xl leading-none text-center font-semibold text-text-p">
          <div className="col-span-3 text-3xl font-bold">Browse The Range</div>
          <div className="col-span-3 text-xl font-normal text-text-s mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="col-span-3 md:col-span-1">
            <img
              src={dining}
              alt="dining"
              className="h-[480px] w-full object-cover rounded-[10px]"
            />
            <div className="my-5">Dining</div>
          </div>
          <div className="col-span-3 md:col-span-1">
            <img
              src={living}
              alt="living"
              className="h-[480px] w-full object-cover rounded-[10px]"
            />
            <div className="my-5">Living</div>
          </div>
          <div className="col-span-3 md:col-span-1">
            <img
              src={bedroom}
              alt="bedroom"
              className="h-[480px] w-full object-cover rounded-[10px]"
            />
            <div className="my-5">Bedroom</div>
          </div>
        </div>
      </section>
    </div>
  );
}
