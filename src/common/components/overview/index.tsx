import { ChevronIcon } from '@/assets/icons';
import background from '@/assets/images/background/cafe.jpg';

interface Props {
  name?: string;
  page: string;
}

export default function Overview({ name, page }: Props) {
  return (
    <section
      style={{ backgroundImage: `url(${background})` }}
      className="bg-top bg-no-repeat bg-cover"
    >
      <div className="backdrop-blur-sm py-28 bg-white/40">
        <div className="mx-auto w-fit text-center font-medium capitalize">
          <h1 className="text-5xl mb-2">{name ?? page}</h1>
          <p className="flex items-center justify-center gap-1">
            <span>Home</span>
            <ChevronIcon className="text-black" />
            <span className="font-light">{page}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
