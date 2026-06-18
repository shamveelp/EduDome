'use client';

import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear the auth cookie
    document.cookie = 'accessToken=; path=/; max-age=0; SameSite=Strict';
    router.push('/login');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-100 py-4 px-8 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl shadow">
            E
          </div>
          <span className="text-xl font-bold text-slate-800 font-outfit">EduDome</span>
        </div>
        <button
          id="logout-btn"
          onClick={handleLogout}
          className="flex items-center gap-2 text-slate-500 hover:text-red-500 font-medium text-sm transition-colors px-4 py-2 rounded-xl hover:bg-red-50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Logout
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-800 font-outfit">Your Dashboard</h1>
          <p className="text-slate-500 mt-1">Welcome back to your learning journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-4 hover:shadow-md transition-all cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#4C8CE4] group-hover:scale-110 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5h11"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">Continue Learning</h3>
              <p className="text-slate-500 text-sm">Resume your German course</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-4 hover:shadow-md transition-all cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">Progress</h3>
              <p className="text-slate-500 text-sm">Track your learning streak</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-4 hover:shadow-md transition-all cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
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
