import { Brain, ListChecks, MessageCircle } from 'lucide-react';

export default function AIShowcase({ t }) {
  return (
    <section id="ai" className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-20 dark:from-gray-900 dark:to-gray-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.1),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-700 ring-1 ring-emerald-500/20 dark:text-emerald-300">
            <Brain size={16} />
            <span className="text-xs font-medium tracking-wide">{t.aiBadge}</span>
          </div>
          <h2 className="mt-4 text-3xl font-semibold text-gray-900 dark:text-white sm:text-4xl">
            {t.aiTitle}
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            {t.aiSubtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card icon={<MessageCircle size={18} />} title={t.aiCard1Title}>
            {t.aiCard1Desc}
          </Card>
          <Card icon={<Brain size={18} />} title={t.aiCard2Title}>
            {t.aiCard2Desc}
          </Card>
          <Card icon={<ListChecks size={18} />} title={t.aiCard3Title}>
            {t.aiCard3Desc}
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, children }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-emerald-500/15 px-2.5 py-1.5 text-emerald-600 ring-1 ring-emerald-500/20 dark:text-emerald-400">
        {icon}
        <span className="text-xs font-medium">IA FortiMeet</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{children}</p>
    </div>
  );
}
