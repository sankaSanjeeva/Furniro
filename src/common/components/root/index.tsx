import { Outlet } from 'react-router-dom';
import { Footer, Header } from '..';

export default function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow mt-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
