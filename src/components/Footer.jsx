import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-gray-900 dark:text-white">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 text-gray-900">
            <Shield size={18} />
          </div>
          <span className="text-base font-semibold">FortiMeet</span>
        </div>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} FortiMeet — Riunioni blindate, collaborazione fluida.
        </p>
      </div>
    </footer>
  );
}
