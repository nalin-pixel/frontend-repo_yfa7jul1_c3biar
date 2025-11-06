import { ShieldCheck, Users, FileText, Mic, ScreenShare, MessageSquare } from 'lucide-react';

export default function Features({ t }) {
  const features = [
    {
      icon: ShieldCheck,
      title: t.featureSecurityTitle,
      desc: t.featureSecurityDesc,
    },
    {
      icon: Users,
      title: t.featureParticipantsTitle,
      desc: t.featureParticipantsDesc,
    },
    {
      icon: ScreenShare,
      title: t.featureShareTitle,
      desc: t.featureShareDesc,
    },
    {
      icon: MessageSquare,
      title: t.featureChatTitle,
      desc: t.featureChatDesc,
    },
    {
      icon: Mic,
      title: t.featureAITransTitle,
      desc: t.featureAITransDesc,
    },
    {
      icon: FileText,
      title: t.featureRecordingTitle,
      desc: t.featureRecordingDesc,
    },
  ];

  return (
    <section id="features" className="relative bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {t.featuresTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600 dark:text-gray-300">
          {t.featuresSubtitle}
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
