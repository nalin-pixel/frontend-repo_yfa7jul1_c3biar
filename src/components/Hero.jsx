import Spline from '@splinetool/react-spline';
import { Shield, Video, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gray-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-28">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-300 ring-1 ring-emerald-400/30">
          <Shield size={16} />
          <span className="text-xs font-medium tracking-wide">FortiMeet • Sicurezza di livello enterprise</span>
        </div>

        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Videoconferenze blindate, collaborazione senza attriti
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Crittografia end‑to‑end, 2FA, link a scadenza e strumenti collaborativi. La piattaforma
          pensata per aziende, scuole e organizzazioni che non scendono a compromessi.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-gray-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            <Video size={18} />
            Avvia una riunione protetta
          </a>
          <a
            href="#ai"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
          >
            <Lock size={18} />
            Scopri le funzioni IA
          </a>
        </div>
      </div>
    </section>
  );
}
