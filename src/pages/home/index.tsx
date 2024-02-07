import {
  BrowseTheRange,
  ExploreMore,
  Gallery,
  OurProducts,
  Welcome,
} from './components';

export default function Home() {
  return (
    <div className="bg-img bg-center bg-no-repeat bg-cover bg-fixed">
      <Welcome />

      <BrowseTheRange />

      <OurProducts />

      <ExploreMore />

      <Gallery />
    </div>
  );
}
