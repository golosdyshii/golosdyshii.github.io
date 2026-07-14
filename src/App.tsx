import { lazy, Suspense } from 'react';
import Background from './components/ui/Background';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import BotGuide from './sections/BotGuide';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';

const Team = lazy(() => import('./sections/Team'));
const About = lazy(() => import('./sections/About'));

function App() {
  useRevealOnScroll();

  return (
    <>
      <Background />
      <Header />
      <main className="site-shell">
        <Hero />
        <Features />
        <BotGuide />
        <Suspense fallback={null}>
          <Team />
          <About />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
