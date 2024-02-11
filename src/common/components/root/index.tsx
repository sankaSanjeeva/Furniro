import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '..';

export default function Root() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      setHasScrolled(!isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header hasScrolled={hasScrolled} />

      <div ref={ref} />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
