'use client';

import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import PageContainer from '@/components/PageContainer';

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = 'accessToken=; path=/; max-age=0; SameSite=Strict';
    router.push('/login');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar showLogout onLogout={handleLogout} />

      <main className="flex-1">
        <PageContainer className="py-12">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-[#1e293b] font-outfit">Your Dashboard</h1>
            <p className="text-slate-500 mt-1">Welcome back to your learning journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-4 hover:shadow-md transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#4C8CE4] group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5h11" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#1e293b] text-lg font-outfit">Continue Learning</h3>
                <p className="text-slate-500 text-sm mt-1">Resume your German course</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-4 hover:shadow-md transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#1e293b] text-lg font-outfit">Progress</h3>
                <p className="text-slate-500 text-sm mt-1">Track your learning streak</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-4 hover:shadow-md transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#1e293b] text-lg font-outfit">Profile</h3>
                <p className="text-slate-500 text-sm mt-1">Update your account settings</p>
              </div>
            </div>
          </div>
        </PageContainer>
      </main>
    </div>
  );
}
