import { Button } from '@/common/components/ui/button';

export default function Welcome() {
  return (
    <section className="flex justify-center lg:justify-end items-center min-h-[calc(100vh_-_96px)] mx-auto max-w-screen-laptop px-14">
      <div className="p-10 my-10 rounded-[10px] text-center lg:text-left max-w-[620px] text-text-p bg-theme-light">
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
        <a href="#products">
          <Button className="h-16 w-56 font-bold">BUY NOW</Button>
        </a>
      </div>
    </section>
  );
}
