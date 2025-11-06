import { useState } from 'react';

export default function AuthModal({ mode, t, onClose, onCreated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const backend = import.meta.env.VITE_BACKEND_URL || '';

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === 'create') {
        const res = await fetch(`${backend}/api/meetings`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ host_email: email, title: 'FortiMeet', ttl_minutes: 120 })
        });
        if (!res.ok) throw new Error('Failed to create meeting');
        const data = await res.json();
        onCreated?.(data);
        onClose();
      } else {
        alert('Demo sign-in successful (2FA UI only)');
        onClose();
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/50 p-4">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <h4 className="text-lg font-semibold">{mode === 'login' ? t.modalTitleLogin : t.modalTitleCreate}</h4>
          <button onClick={onClose} className="rounded-md px-2 py-1 text-sm ring-1 ring-gray-200 hover:bg-gray-50 dark:ring-gray-800 dark:hover:bg-gray-800">{t.cancel}</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
          <div>
            <label className="mb-1 block text-sm text-gray-700 dark:text-gray-300">{t.email}</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2 dark:border-gray-700 dark:bg-gray-950" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-700 dark:text-gray-300">{t.password}</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2 dark:border-gray-700 dark:bg-gray-950" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-700 dark:text-gray-300">{t.twofa}</label>
            <input value={code} onChange={(e)=>setCode(e.target.value)} type="text" inputMode="numeric" pattern="[0-9]*" maxLength={6} className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2 dark:border-gray-700 dark:bg-gray-950" />
          </div>
          <button type="submit" disabled={loading} className="w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400 disabled:opacity-60">{loading ? '...' : t.continue}</button>
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">2FA e OAuth saranno collegati al backend nelle prossime iterazioni.</p>
        </form>
      </div>
    </div>
  );
}
