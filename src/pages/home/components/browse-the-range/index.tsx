import bedroom from '@/assets/bedroom.png';
import dining from '@/assets/dining.png';
import living from '@/assets/living.png';

export default function BrowseTheRange() {
  return (
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
  );
}
