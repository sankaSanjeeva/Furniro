import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/common/components/ui/dropdown-menu';
import { FilterIcon, GridViewIcon, ListViewIcon } from '@/assets/icons';
import { cn } from '@/common/lib/utils';

export default function Filter({ itemCount }: { itemCount: number }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const view = searchParams.get('view');
  const show = searchParams.get('show');
  const sortBy = searchParams.get('sort_by');

  const updateSearchParams = (key: string, value: string) => {
    setSearchParams((params) => {
      params.set(key, value!);
      return params;
    });
  };

  const handleSelect = (e: Event, key: string) => {
    const { textContent } = e.target as HTMLDivElement;
    updateSearchParams(key, textContent!);
  };

  useEffect(() => {
    const params = new URLSearchParams({
      view: view ?? 'grid',
      show: show ?? '8',
      sort_by: sortBy ?? 'default',
    });
    setSearchParams(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-nowrap bg-theme-light">
      <div className="max-w-screen-laptop mx-auto flex justify-center lg:justify-between flex-wrap gap-10 py-6 px-5 md:px-10 laptop:px-24 ">
        <div className="flex justify-center items-center flex-col sm:flex-row gap-5">
          <div className="flex items-center gap-5">
            <button type="button">
              <FilterIcon />
            </button>
            <span>Filter</span>
            <button
              type="button"
              onClick={() => updateSearchParams('view', 'grid')}
            >
              <GridViewIcon
                className={cn(
                  '[&>path]:fill-text-s [&>path]:hover:fill-black',
                  view === 'grid' && '[&>path]:fill-black'
                )}
              />
            </button>
            <button
              type="button"
              onClick={() => updateSearchParams('view', 'list')}
            >
              <ListViewIcon
                className={cn(
                  '[&>path]:fill-text-s [&>path]:hover:fill-black',
                  view === 'list' && '[&>path]:fill-black'
                )}
              />
            </button>
            <div className="h-10 w-0.5 hidden sm:block bg-text-s" />
          </div>

          <span>
            Showing 1-{show} of {itemCount} results
          </span>
        </div>

        <div className="flex justify-center flex-wrap gap-5">
          <div className="flex items-center gap-5">
            <span>show</span>
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center whitespace-nowrap h-14 px-5 text-text-s hover:text-white bg-white hover:bg-theme focus-visible:outline-none transition-colors">
                {show}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-0">
                {[8, 16, 24, 32].map((x) => (
                  <DropdownMenuItem
                    key={x}
                    className="text-text-s"
                    onSelect={(e) => handleSelect(e, 'show')}
                  >
                    {x}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center gap-5">
            <span>sort by</span>
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center whitespace-nowrap h-14 px-5 text-text-s hover:text-white bg-white hover:bg-theme focus-visible:outline-none transition-colors capitalize">
                {sortBy}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-0">
                {['default', 'name', 'date'].map((x) => (
                  <DropdownMenuItem
                    key={x}
                    className="capitalize text-text-s"
                    onSelect={(e) => handleSelect(e, 'sort_by')}
                  >
                    {x}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
