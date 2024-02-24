import { Overview, Pagination, PreFooter, Section } from '@/common/components';
import { Article, Categories, RecentPosts } from './components';
import { Input } from '@/common/components/ui/input';
import { SearchIcon } from '@/assets/icons';
import { ScrollArea } from '@/common/components/ui/scroll-area';

export default function Blog() {
  return (
    <div>
      <Overview page="blog" />

      <Section>
        <div className="flex gap-10 lg:gap-24">
          <div className="flex flex-col gap-14 flex-grow">
            <Article />
            <Article />
            <Article />
          </div>

          <div className="hidden md:block shrink-0 sticky top-24 h-fit">
            <ScrollArea className="h-[calc(100vh_-_112px)] w-64 lg:w-80">
              <div className="pr-4">
                <div className="relative mb-10">
                  <Input className="pr-10" placeholder="Search" />
                  <SearchIcon className="absolute top-1/2 -translate-y-1/2 right-[10px] text-text-t" />
                </div>

                <Categories />

                <RecentPosts />
              </div>
            </ScrollArea>
          </div>
        </div>

        <Pagination pageCount={4} className="mt-14" />
      </Section>

      <PreFooter />
    </div>
  );
}
