import { Section } from '@/common/components';
import {
  BrowseTheRange,
  ExploreMore,
  Gallery,
  OurProducts,
  Welcome,
} from './components';
import background from '@/assets/images/background/home.png';

export default function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-center bg-no-repeat bg-cover bg-fixed"
    >
      <Welcome />

      <Section>
        <BrowseTheRange />
      </Section>

      <Section wrapperClass="scroll-mt-24" id="products">
        <OurProducts />
      </Section>

      <Section wrapperClass="bg-theme-light" className="px-0 lg:px-0 xl:px-0">
        <ExploreMore />
      </Section>

      <Section wrapperClass="group" className="px-0 lg:px-0 xl:px-0">
        <Gallery />
      </Section>
    </div>
  );
}
