import { ShieldCheck, Users, FileText, Mic, ScreenShare, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Sicurezza avanzata',
    desc: 'Crittografia end‑to‑end, 2FA, link a scadenza e ruoli granulari (host, co‑host, spettatore).',
  },
  {
    icon: Users,
    title: 'Fino a 500 partecipanti',
    desc: 'Incontri stabili e fluidi con ottimizzazione dinamica di banda e qualità.',
  },
  {
    icon: ScreenShare,
    title: 'Condivisione schermo e lavagna',
    desc: 'Strumenti di collaborazione in tempo reale con annotazioni e whiteboard.',
  },
  {
    icon: MessageSquare,
    title: 'Chat evoluta',
    desc: 'Reazioni, emoji, allegati e moderazione smart con filtri antispam.',
  },
  {
    icon: Mic,
    title: 'Trascrizione e traduzione',
    desc: 'IA integrata per trascrizioni accurate, riassunti e traduzione live.',
  },
  {
    icon: FileText,
    title: 'Registrazioni sicure',
    desc: 'Archiviazione cifrata su cloud, con controlli di accesso e scadenza automatica.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Tutto ciò che serve per riunioni professionali
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600 dark:text-gray-300">
          FortiMeet unisce sicurezza enterprise e collaborazione fluida in un'interfaccia semplice.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-500 ring-1 ring-emerald-500/20">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
