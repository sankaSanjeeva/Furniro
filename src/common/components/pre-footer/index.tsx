import { ReactNode } from 'react';
import {
  GuaranteeIcon,
  ShippingIcon,
  SupportIcon,
  TrophyIcon,
} from '@/assets/icons';

function Card({
  icon,
  name,
  description,
}: {
  icon: ReactNode;
  name: string;
  description: string;
}) {
  return (
    <div className="flex gap-[10px]">
      <div>{icon}</div>
      <div>
        <h2 className="font-semibold text-2xl text-text-p">{name}</h2>
        <p className="font-medium text-xl text-text-s">{description}</p>
      </div>
    </div>
  );
}

export default function PreFooter() {
  return (
    <section className=" bg-theme-light">
      <div className="max-w-screen-laptop w-fit mx-auto py-24 px-14 grid grid-cols-1 lg:grid-cols-2 laptop:flex gap-14">
        <Card
          icon={<TrophyIcon />}
          name="High Quality"
          description="crafted from top materials"
        />
        <Card
          icon={<GuaranteeIcon />}
          name="Warranty Protection"
          description="Over 2 years"
        />
        <Card
          icon={<ShippingIcon />}
          name="Free Shipping"
          description="Order over 150 $"
        />
        <Card
          icon={<SupportIcon />}
          name="24 / 7 Support"
          description="Dedicated support"
        />
      </div>
    </section>
  );
}
