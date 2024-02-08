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

      <BrowseTheRange />

      <OurProducts />

      <ExploreMore />

      <Gallery />
    </div>
  );
}
