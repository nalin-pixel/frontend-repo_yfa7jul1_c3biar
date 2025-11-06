import { useEffect, useMemo, useState } from 'react';
import { Shield, Globe, Sun, Moon, Video, LogIn } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import AIShowcase from './components/AIShowcase';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

const translations = {
  it: {
    brand: 'FortiMeet',
    taglineBadge: 'FortiMeet • Sicurezza di livello enterprise',
    heroTitle: 'Videoconferenze blindate, collaborazione senza attriti',
    heroSubtitle:
      "Crittografia end‑to‑end, 2FA, link a scadenza e strumenti collaborativi. La piattaforma pensata per aziende, scuole e organizzazioni che non scendono a compromessi.",
    ctaPrimary: 'Avvia una riunione protetta',
    ctaSecondary: 'Scopri le funzioni IA',

    navCreateMeeting: 'Crea meeting',
    navLogin: 'Accedi',
    navLang: 'Lingua',
    navTheme: 'Tema',

    featuresTitle: 'Tutto ciò che serve per riunioni professionali',
    featuresSubtitle:
      "FortiMeet unisce sicurezza enterprise e collaborazione fluida in un'interfaccia semplice.",
    featureSecurityTitle: 'Sicurezza avanzata',
    featureSecurityDesc:
      'Crittografia end‑to‑end, 2FA, link a scadenza e ruoli granulari (host, co‑host, spettatore).',
    featureParticipantsTitle: 'Fino a 500 partecipanti',
    featureParticipantsDesc:
      'Incontri stabili e fluidi con ottimizzazione dinamica di banda e qualità.',
    featureShareTitle: 'Condivisione schermo e lavagna',
    featureShareDesc:
      'Strumenti di collaborazione in tempo reale con annotazioni e whiteboard.',
    featureChatTitle: 'Chat evoluta',
    featureChatDesc:
      'Reazioni, emoji, allegati e moderazione smart con filtri antispam.',
    featureAITransTitle: 'Trascrizione e traduzione',
    featureAITransDesc:
      'IA integrata per trascrizioni accurate, riassunti e traduzione live.',
    featureRecordingTitle: 'Registrazioni sicure',
    featureRecordingDesc:
      'Archiviazione cifrata su cloud, con controlli di accesso e scadenza automatica.',

    aiBadge: 'Intelligenza artificiale integrata',
    aiTitle: 'Riassunti, sentiment e azioni, automaticamente',
    aiSubtitle:
      "Dalla trascrizione live ai riassunti intelligenti post‑meeting: FortiMeet ti consegna insight pronti all'uso e to‑do condivise.",
    aiCard1Title: 'Trascrizione e traduzione',
    aiCard1Desc:
      'Trascrizione accurata in tempo reale con traduzione automatica per partecipanti in lingue diverse.',
    aiCard2Title: 'Analisi del sentiment',
    aiCard2Desc:
      'Comprendi il tono della riunione (positivo, neutro, negativo) per migliorare engagement e outcome.',
    aiCard3Title: 'Action items smart',
    aiCard3Desc:
      "Estrazione automatica dei punti d'azione con to‑do condivise e assegnazioni.",

    ctaBlockTitle: 'Pronto a provare FortiMeet?',
    ctaBlockSubtitle:
      'Crea un meeting sicuro in pochi secondi. Inviti univoci, 2FA e strumenti collaborativi — tutto in uno.',
    ctaBlockPrimary: 'Crea meeting protetto',
    ctaBlockSecondary: 'Esplora funzioni',

    footerCopy: 'Riunioni blindate, collaborazione fluida.',

    modalTitleLogin: 'Accedi',
    modalTitleCreate: 'Crea un meeting',
    email: 'Email',
    password: 'Password',
    twofa: 'Codice 2FA',
    continue: 'Continua',
    cancel: 'Annulla',

    createdMeeting: 'Meeting creato',
    copyInvite: 'Copia invito',
    inviteCopied: 'Invito copiato!',
  },
  en: {
    brand: 'FortiMeet',
    taglineBadge: 'FortiMeet • Enterprise‑grade security',
    heroTitle: 'Locked‑down video calls, frictionless collaboration',
    heroSubtitle:
      'End‑to‑end encryption, 2FA, expiring links and powerful collaboration. Built for organizations that won’t compromise.',
    ctaPrimary: 'Start a secure meeting',
    ctaSecondary: 'Explore AI features',

    navCreateMeeting: 'Create meeting',
    navLogin: 'Sign in',
    navLang: 'Language',
    navTheme: 'Theme',

    featuresTitle: 'Everything you need for professional meetings',
    featuresSubtitle:
      'FortiMeet blends enterprise security with smooth collaboration in a simple interface.',
    featureSecurityTitle: 'Advanced security',
    featureSecurityDesc:
      'End‑to‑end encryption, 2FA, expiring links and granular roles (host, co‑host, viewer).',
    featureParticipantsTitle: 'Up to 500 participants',
    featureParticipantsDesc:
      'Stable, smooth meetings with dynamic bandwidth and quality optimization.',
    featureShareTitle: 'Screen share and whiteboard',
    featureShareDesc:
      'Real‑time collaboration tools with annotations and whiteboard.',
    featureChatTitle: 'Powerful chat',
    featureChatDesc:
      'Reactions, emoji, attachments, and smart moderation with anti‑spam filters.',
    featureAITransTitle: 'Transcription and translation',
    featureAITransDesc:
      'Built‑in AI for accurate transcripts, summaries, and live translation.',
    featureRecordingTitle: 'Secure recordings',
    featureRecordingDesc:
      'Encrypted cloud storage with access controls and automatic expiry.',

    aiBadge: 'Built‑in artificial intelligence',
    aiTitle: 'Summaries, sentiment and actions — automatically',
    aiSubtitle:
      'From live transcription to smart post‑meeting summaries: FortiMeet delivers ready‑to‑use insights and shared to‑dos.',
    aiCard1Title: 'Transcription and translation',
    aiCard1Desc:
      'Accurate live transcripts with automatic translation for multilingual participants.',
    aiCard2Title: 'Sentiment analysis',
    aiCard2Desc:
      'Understand the tone (positive, neutral, negative) to improve engagement and outcomes.',
    aiCard3Title: 'Smart action items',
    aiCard3Desc:
      'Automatic extraction of action points with shared to‑dos and assignments.',

    ctaBlockTitle: 'Ready to try FortiMeet?',
    ctaBlockSubtitle:
      'Spin up a secure meeting in seconds. Unique invites, 2FA and collaboration — all‑in‑one.',
    ctaBlockPrimary: 'Create secure meeting',
    ctaBlockSecondary: 'Explore features',

    footerCopy: 'Locked‑down meetings, fluid collaboration.',

    modalTitleLogin: 'Sign in',
    modalTitleCreate: 'Create a meeting',
    email: 'Email',
    password: 'Password',
    twofa: '2FA code',
    continue: 'Continue',
    cancel: 'Cancel',

    createdMeeting: 'Meeting created',
    copyInvite: 'Copy invite',
    inviteCopied: 'Invite copied!',
  },
};

function App() {
  const [lang, setLang] = useState('it');
  const [dark, setDark] = useState(true);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [created, setCreated] = useState(null);

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  const t = useMemo(() => translations[lang], [lang]);

  const openAuth = (mode) => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  function handleCreated(data) {
    setCreated(data);
  }

  async function copyInvite() {
    if (!created) return;
    const url = `${window.location.origin}/join?code=${created.invite_code}`;
    await navigator.clipboard.writeText(url);
    alert(t.inviteCopied);
  }

  return (
    <div className={`min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white`}>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-500 text-white"><Shield size={16} /></span>
            <span>{t.brand}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'it' ? 'en' : 'it')}
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm ring-1 ring-gray-200 transition hover:bg-gray-50 dark:ring-gray-800 dark:hover:bg-gray-900"
              aria-label={t.navLang}
            >
              <Globe size={16} />
              <span className="hidden sm:inline">{lang.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setDark((v) => !v)}
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm ring-1 ring-gray-200 transition hover:bg-gray-50 dark:ring-gray-800 dark:hover:bg-gray-900"
              aria-label={t.navTheme}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
              <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'}</span>
            </button>
            <button
              onClick={() => openAuth('create')}
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow shadow-blue-500/20 transition hover:bg-blue-400"
            >
              <Video size={16} /> {t.navCreateMeeting}
            </button>
            <button
              onClick={() => openAuth('login')}
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold ring-1 ring-gray-200 transition hover:bg-gray-50 dark:text-white dark:ring-gray-800 dark:hover:bg-gray-900"
            >
              <LogIn size={16} /> {t.navLogin}
            </button>
          </div>
        </div>
      </header>

      <Hero t={t} />
      <Features t={t} />
      <AIShowcase t={t} />

      <CTA t={t} onCreate={() => openAuth('create')} />

      {created && (
        <div className="mx-auto my-8 max-w-6xl rounded-xl border border-blue-200 bg-blue-50 p-6 text-blue-900 dark:border-blue-900/50 dark:bg-blue-900/20 dark:text-blue-200">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h4 className="text-base font-semibold">{t.createdMeeting}</h4>
              <p className="text-sm opacity-90">ID: {created.id} • Expires: {new Date(created.expires_at).toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={copyInvite} className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-400">{t.copyInvite}</button>
              <a href={`#/room/${created.id}`} className="rounded-md px-3 py-2 text-sm font-semibold ring-1 ring-blue-300 hover:bg-white/50 dark:hover:bg-white/10">Join as host</a>
            </div>
          </div>
        </div>
      )}

      <Footer t={t} />

      {authOpen && (
        <AuthModal
          mode={authMode}
          t={t}
          onClose={() => setAuthOpen(false)}
          onCreated={handleCreated}
        />
      )}
    </div>
  );
}

function CTA({ t, onCreate }) {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 dark:from-gray-950 dark:to-gray-900">
      <div className="mx-auto max-w-6xl rounded-2xl border border-blue-200 bg-white px-8 py-10 text-center shadow-sm dark:border-blue-900/40 dark:bg-gray-900">
        <h3 className="text-2xl font-semibold">{t.ctaBlockTitle}</h3>
        <p className="mx-auto mt-2 max-w-2xl text-gray-600 dark:text-gray-300">{t.ctaBlockSubtitle}</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button onClick={onCreate} className="rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
            {t.ctaBlockPrimary}
          </button>
          <a href="#features" className="rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-blue-200 transition hover:bg-gray-50 dark:text-white dark:ring-blue-900/40 dark:hover:bg-gray-900">
            {t.ctaBlockSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
