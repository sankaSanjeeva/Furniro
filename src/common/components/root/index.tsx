import { Outlet } from 'react-router-dom';
import { Header } from '..';

export default function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer>
        <div />
      </footer>
    </div>
  );
}
