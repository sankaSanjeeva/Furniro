import { useEffect, useRef, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Footer, Header, Section, Separator } from '..';

export default function Root() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        setHasScrolled(!isIntersecting);
      },
      { rootMargin: '96px' }
    );

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

      <Separator />

      <footer>
        <Section>
          <Footer />
        </Section>
      </footer>

      <ScrollRestoration getKey={(location) => location.pathname} />
    </div>
  );
}
