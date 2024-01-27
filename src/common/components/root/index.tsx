import { Outlet } from 'react-router-dom';
import { Footer, Header } from '..';

export default function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-[url('src/common/images/background.png')] bg-center bg-no-repeat bg-cover bg-fixed">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
