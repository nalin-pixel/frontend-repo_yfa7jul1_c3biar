import Hero from './components/Hero';
import Features from './components/Features';
import AIShowcase from './components/AIShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Hero />
      <Features />
      <AIShowcase />
      <CTA />
      <Footer />
    </div>
  );
}

function CTA() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-white px-8 py-10 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-2xl font-semibold">Pronto a provare FortiMeet?</h3>
        <p className="mx-auto mt-2 max-w-2xl text-gray-600 dark:text-gray-300">
          Crea un meeting sicuro in pochi secondi. Inviti univoci, 2FA e strumenti collaborativi — tutto in uno.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#" className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-gray-900 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">
            Crea meeting protetto
          </a>
          <a href="#features" className="rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-50 dark:text-white dark:ring-gray-800 dark:hover:bg-gray-900">
            Esplora funzioni
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
