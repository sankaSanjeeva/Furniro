import { Button } from '@/common/components/ui/button';

export default function Home() {
  return (
    <div>
      {/* welcome content */}
      <div className="flex justify-center lg:justify-end items-center h-[calc(100vh_-_96px)]">
        <div className="p-10 rounded-[10px] bg-[#FFF3E3]">
          <h3 className="font-semibold tracking-widest mb-1">New Arrival</h3>
          <h1 className="text-[52px] leading-[64px] font-bold text-theme">
            Discover Our
            <br />
            New Collection
          </h1>
          <p className="text-lg font-medium max-w-[540px] mt-4 mb-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button className="h-16 w-56 font-bold">BUY NOW</Button>
        </div>
      </div>
    </div>
  );
}
