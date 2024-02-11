import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/common/components/ui/button';
import { cn } from '@/common/lib/utils';

export default function Pagination({ itemCount }: { itemCount: number }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page') ?? 1);
  const show = Number(searchParams.get('show') ?? 8);

  const pageCount = useMemo(() => {
    return Math.ceil(itemCount / show);
  }, [itemCount, show]);

  const makePageArray = (start: number, end: number) =>
    Array.from({ length: pageCount }, (_, k) => k + 1).slice(start, end);

  const [displayPages, setDisplayPages] = useState(makePageArray(0, 3));

  const changeSelectedPage = (p: number) => {
    setSearchParams((params) => {
      params.set('page', `${p}`);
      return params;
    });
  };

  const handlePrevClick = () => {
    const prevPage = page - 1;

    if (displayPages.at(0) === page) {
      setDisplayPages(makePageArray(prevPage - 1, prevPage + 2));
    }

    changeSelectedPage(prevPage);
  };

  const handleNextClick = () => {
    const nextPage = page + 1;

    if (displayPages.at(2) === page) {
      setDisplayPages(makePageArray(nextPage - 3, nextPage));
    }

    changeSelectedPage(nextPage);
  };

  return (
    <div className="flex justify-center items-center flex-col sm:flex-row gap-9">
      <Button
        className="rounded min-w-24 bg-theme-light text-black"
        disabled={page === 1}
        onClick={handlePrevClick}
      >
        Prev
      </Button>

      <div className="flex gap-9">
        {displayPages.map((p) => (
          <Button
            key={p}
            className={cn(
              'rounded min-w-12 bg-theme-light text-black hover:text-white',
              page === p && 'bg-theme text-white'
            )}
            onClick={() => changeSelectedPage(p)}
          >
            {p}
          </Button>
        ))}
      </div>

      <Button
        className="rounded min-w-24 bg-theme-light text-black"
        disabled={page === pageCount}
        onClick={handleNextClick}
      >
        Next
      </Button>
    </div>
  );
}
