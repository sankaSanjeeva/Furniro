import { StarIcon } from '@/assets/icons';

export default function StarRate({ rate }: { rate: number }) {
  return (
    <div className="flex gap-[6px]">
      {[1, 2, 3, 4, 5].map((s) => (
        <StarIcon
          key={s}
          className={rate >= s ? 'text-[#FFC700]' : 'text-[#E3E3E3]'}
        />
      ))}
    </div>
  );
}
