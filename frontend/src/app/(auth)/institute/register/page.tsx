'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function InstituteRegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'AGENCY' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Failed to register institute');
      }

      router.push('/institute/login');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12 px-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#1e293b] font-outfit">Institute Partner Registration</h1>
            <p className="text-slate-500 mt-1 text-sm">Join EduDome to manage your language academy</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-xl mb-6 text-sm border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Institute Name</label>
              <input
                id="register-name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4C8CE4]/50 transition-all text-slate-800"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Academy Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Business Email</label>
              <input
                id="register-email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4C8CE4]/50 transition-all text-slate-800"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="admin@academy.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input
                id="register-password"
                type="password"
                required
                minLength={6}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4C8CE4]/50 transition-all text-slate-800"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Min. 6 characters"
              />
            </div>

            <button
              id="register-submit"
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3.5 rounded-xl bg-[#4C8CE4] text-white font-bold mt-2 hover:bg-[#3b7bc4] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Registering...' : 'Register Institute'}
            </button>
          </form>

          <div className="text-center mt-6 text-slate-500 text-sm">
            Already an institute partner?{' '}
            <Link href="/institute/login" className="text-[#4C8CE4] font-medium hover:underline">
              Partner Login
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
