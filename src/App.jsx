import Hero from './components/Hero';
import WhatIs from './components/WhatIs';
import Support from './components/Support';
import Guides from './components/Guides';
import OfferCTA from './components/OfferCTA';

export default function App() {
  return (
    <div className="font-inter text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold tracking-tight text-rose-700">MOVE30</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#cos-e" className="hover:text-rose-700">Cos’è</a>
            <a href="#supporto" className="hover:text-rose-700">Supporto</a>
            <a href="#chi" className="hover:text-rose-700">Chi ti guida</a>
            <a href="#offerta" className="inline-flex items-center rounded-lg bg-rose-600 px-3 py-1.5 text-white font-semibold hover:bg-rose-700">Inizia ora</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <WhatIs />
        <Support />
        <Guides />
        <OfferCTA />
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} MOVE30. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4">
            <a href="#offerta" className="text-rose-700 hover:underline">Iscriviti</a>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
