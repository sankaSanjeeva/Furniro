import bedroom from '@/assets/bedroom.png';
import dining from '@/assets/dining.png';
import living from '@/assets/living.png';
import { cn } from '@/common/lib/utils';

function Image({
  url,
  className,
  ...rest
}: { url: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className={cn(
        'bg-cover group-hover:grayscale hover:!grayscale-0 hover:scale-[1.05] transition-all duration-300 cursor-pointer',
        className
      )}
      {...rest}
    />
  );
}

export default function Gallery() {
  return (
    <section className="bg-white py-12">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-text-s">
          Share your setup with
        </h2>
        <h1 className="text-2xl sm:text-[40px] font-bold mt-2 text-text-p">
          #FurniroFurniture
        </h1>
      </div>

      <div className="mx-auto max-w-screen-laptop grid grid-cols-[repeat(14,minmax(0,1fr))] grid-rows-[repeat(8,minmax(5.53vw,1fr))] laptop:grid-rows-[repeat(8,minmax(80px,1fr))] gap-[1.1vw] laptop:gap-4 group">
        <Image url={bedroom} className="row-span-4" />
        <Image
          url={dining}
          className="col-span-4 row-span-3 row-start-2 col-start-2"
        />
        <Image url={living} className="col-span-3 row-span-4 row-start-3" />
        <Image url={bedroom} className="col-span-3 row-span-4 row-start-2" />
        <Image url={dining} className="col-span-3 row-span-5" />
        <Image url={living} className="col-span-2 row-span-4" />
        <Image url={bedroom} className="col-span-3 row-span-3" />
        <Image url={dining} className="col-span-2 row-span-3" />
        <Image url={living} className="col-span-3 row-span-2" />
      </div>
    </section>
  );
}
