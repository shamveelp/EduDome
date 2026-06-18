'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-100 py-4 px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl">
            E
          </div>
          <span className="text-xl font-bold text-slate-800">EduDome</span>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem('accessToken');
            router.push('/login');
          }}
          className="text-slate-500 hover:text-slate-800 font-medium text-sm transition-colors"
        >
          Logout
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Your Dashboard</h1>
        <p className="text-slate-500 mb-8">Welcome back to your learning journey.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-4 hover:shadow-md transition-all cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#4C8CE4]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-0-2.5 2.5 2.5 0 0 1 2.5-2.5h11"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">Continue Learning</h3>
              <p className="text-slate-500 text-sm">Resume your German course</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-4 hover:shadow-md transition-all cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">Payments</h3>
              <p className="text-slate-500 text-sm">Manage your subscriptions</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-4 hover:shadow-md transition-all cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">Profile</h3>
              <p className="text-slate-500 text-sm">Update your account settings</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
