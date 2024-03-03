import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/common/components/ui/dropdown-menu';
import { FilterIcon, GridViewIcon, ListViewIcon } from '@/assets/icons';
import { cn } from '@/common/lib/utils';

export default function Filter({ itemCount = 0 }: { itemCount?: number }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const view = searchParams.get('view');
  const page = Number(searchParams.get('page'));
  const show = Number(searchParams.get('show'));
  const sortBy = searchParams.get('sortBy');

  const summeryText = useMemo(() => {
    const start = (page - 1) * show + 1;
    const end = page * show;

    return `Showing ${start}-${end > itemCount ? itemCount : end} of ${itemCount} results`;
  }, [itemCount, page, show]);

  const handleView = (value: string) => {
    setSearchParams((params) => {
      params.set('view', value);
      return params;
    });
  };

  const handleShow = (e: Event) => {
    const { textContent } = e.target as HTMLDivElement;
    setSearchParams((params) => {
      params.set('show', textContent!);
      params.set('page', '1');
      return params;
    });
  };

  const handleSortBy = (e: Event) => {
    const { textContent } = e.target as HTMLDivElement;
    setSearchParams((params) => {
      params.set('sortBy', textContent!);
      return params;
    });
  };

  return (
    <div className="flex justify-center lg:justify-between flex-wrap gap-10">
      <div className="flex justify-center items-center flex-col sm:flex-row gap-5">
        <div className="flex items-center gap-5">
          <button type="button">
            <FilterIcon />
          </button>
          <span>Filter</span>
          <button type="button" onClick={() => handleView('grid')}>
            <GridViewIcon
              className={cn(
                '[&>path]:fill-text-s [&>path]:hover:fill-black',
                view === 'grid' && '[&>path]:fill-black'
              )}
            />
          </button>
          <button type="button" onClick={() => handleView('list')}>
            <ListViewIcon
              className={cn(
                '[&>path]:fill-text-s [&>path]:hover:fill-black',
                view === 'list' && '[&>path]:fill-black'
              )}
            />
          </button>
          <div className="h-10 w-0.5 hidden sm:block bg-text-s" />
        </div>

        <span>{summeryText}</span>
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
                  onSelect={handleShow}
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
              {['default', 'name', 'price'].map((x) => (
                <DropdownMenuItem
                  key={x}
                  className="capitalize text-text-s"
                  onSelect={handleSortBy}
                >
                  {x}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
