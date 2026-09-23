import { useLayoutEffect, useState } from 'react';
import './page.css';
import { Header } from '../components/Header';
import { ProductLayout } from '../components/ProductLayout';
import { Reviews } from '../components/Reviews';
import Footer from '../components/Footer';

const features = [
  'Ultra-fast charging for daily use',
  'Premium build quality with an elegant finish',
  'Crystal-clear sound and immersive audio',
  'Long battery life for work and travel',
  'Wireless connectivity with seamless pairing',
];

export default function Page() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`landing-page ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className="main-shell" id="home">
        <ProductLayout />

        <section className="details" id="features">
          <div className="details-copy">
            <span className="eyebrow">Product Description</span>
            <h2>Thoughtful design meets everyday performance.</h2>
            <p>
              The Luna X1 combines premium materials, rich audio output, and effortless
              usability in a compact form built for work, travel, exercise, and downtime.
            </p>
            <p>
              From seamless wireless pairing to all-day battery life, every feature is
              designed to make your day smoother and more enjoyable.
            </p>
          </div>

          <div className="features-panel">
            <h3>Key Features</h3>
            <ul>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </section>

        <Reviews />
      </main>

      <Footer />
    </div>
  );
}
