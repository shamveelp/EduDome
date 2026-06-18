'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = 'accessToken=; path=/; max-age=0; SameSite=Strict';
    router.push('/login');
    router.refresh();
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      
      {/* Left Sidebar */}
      <aside className="w-64 h-full bg-white border-r border-slate-100 flex flex-col flex-shrink-0">
        <div className="p-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer mb-10">
            <div className="w-9 h-9 primary-gradient rounded-xl flex items-center justify-center text-white font-bold text-xl shadow transition-transform group-hover:scale-110">
              E
            </div>
            <span className="text-xl font-bold tracking-tight text-[#1e293b] font-outfit">EduDome</span>
          </Link>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4 px-4">Overview</h3>
              <nav className="space-y-1">
                <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 text-[#4C8CE4] font-medium text-sm transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  Dashboard
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-[#4C8CE4] hover:bg-slate-50 font-medium text-sm transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Inbox
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-[#4C8CE4] hover:bg-slate-50 font-medium text-sm transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  Lesson
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-[#4C8CE4] hover:bg-slate-50 font-medium text-sm transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  Task
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-[#4C8CE4] hover:bg-slate-50 font-medium text-sm transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  Group
                </a>
              </nav>
            </div>

            <div>
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4 px-4">Friends</h3>
              <div className="space-y-4 px-4">
                {[1,2,3].map(i => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 border border-white shadow-sm overflow-hidden flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1e293b]">Student {i}</p>
                      <p className="text-[10px] text-slate-400">German Learner</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto p-6 border-t border-slate-100">
           <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4 px-4">Settings</h3>
           <nav className="space-y-1">
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-[#4C8CE4] hover:bg-slate-50 font-medium text-sm transition-colors">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                 Settings
              </a>
              <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 font-medium text-sm transition-colors">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                 Logout
              </button>
           </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto px-10 py-8 relative">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Top Bar (Search + Filter) */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" placeholder="Search your course here..." className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4C8CE4]/50 transition-all text-sm shadow-sm" />
            </div>
            <button className="w-[52px] h-[52px] bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-500 hover:text-[#4C8CE4] hover:border-[#4C8CE4]/50 shadow-sm transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
            </button>
          </div>

          {/* Hero Banner */}
          <div className="w-full primary-gradient rounded-[32px] p-10 relative overflow-hidden text-white shadow-md">
            {/* Decorative */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute left-1/2 bottom-0 w-48 h-48 bg-[#1e293b]/10 rounded-full blur-2xl translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-md">
              <p className="text-xs font-bold tracking-wider uppercase mb-3 text-white/80">Online Course</p>
              <h1 className="text-3xl lg:text-4xl font-bold font-outfit mb-8 leading-tight">Sharpen Your Skills With Professional German Courses</h1>
              <button className="bg-[#1e293b] text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-3 hover:bg-black transition-all transform hover:-translate-y-0.5 w-fit">
                Join Now
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#1e293b"><path d="M5 3l14 9-14 9V3z"/></svg>
                </div>
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-blue-50 text-[#4C8CE4] flex items-center justify-center">
                     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                   </div>
                   <div>
                     <p className="text-xs text-slate-500 font-medium mb-0.5">2/8 Watched</p>
                     <p className="text-sm font-bold text-[#1e293b]">German A{i}</p>
                   </div>
                 </div>
                 <button className="text-slate-300 hover:text-slate-500 transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg></button>
              </div>
            ))}
          </div>

          {/* Continue Watching */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#1e293b] font-outfit">Continue Watching</h2>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#4C8CE4] hover:border-[#4C8CE4] transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg></button>
                <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#4C8CE4] hover:border-[#4C8CE4] transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg></button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1,2,3].map(i => (
                <div key={i} className="bg-white rounded-[24px] p-4 border border-slate-100 shadow-sm flex flex-col group cursor-pointer hover:shadow-md transition-all">
                   <div className="w-full h-36 bg-slate-100 rounded-[16px] mb-5 relative overflow-hidden flex items-center justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" 
                        alt="Course thumbnail" 
                        className="absolute inset-0 w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 primary-gradient opacity-10 group-hover:opacity-20 transition-opacity"></div>
                      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center backdrop-blur-sm text-slate-400 hover:text-red-500 transition-colors shadow-sm z-10">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                      </button>
                   </div>
                   <span className="text-[10px] font-bold text-[#4C8CE4] bg-blue-50 px-2.5 py-1 rounded w-fit mb-3 uppercase tracking-wider">A{i} Level</span>
                   <h3 className="font-bold text-[#1e293b] text-sm leading-snug mb-4 flex-1">Beginner&apos;s Guide To Basic German Grammar & Vocab</h3>
                   
                   <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-4">
                     <div className="h-full bg-[#4C8CE4] rounded-full" style={{ width: `${i * 30}%` }}></div>
                   </div>

                   <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                     <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                       </div>
                       <span className="text-xs text-slate-500 font-medium">Instructor Name</span>
                     </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Your Mentor Table */}
          <div>
             <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#1e293b] font-outfit">Your Mentor</h2>
                <a href="#" className="text-sm font-bold text-[#4C8CE4] hover:underline">See All</a>
             </div>
             <div className="bg-white border border-slate-100 rounded-[24px] p-6 shadow-sm overflow-x-auto">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr>
                         <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider font-outfit border-b border-slate-100">Instructor Name & Date</th>
                         <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider font-outfit border-b border-slate-100">Course Type</th>
                         <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider font-outfit border-b border-slate-100">Course Title</th>
                         <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider font-outfit border-b border-slate-100 text-right">Actions</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-50">
                      {[1,2].map(i => (
                         <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-4">
                               <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                  </div>
                                  <div>
                                     <p className="font-bold text-[#1e293b] text-sm">Instructor {i}</p>
                                     <p className="text-xs text-slate-400 mt-0.5">25/2/2026</p>
                                  </div>
                               </div>
                            </td>
                            <td className="py-4">
                               <span className="text-[10px] font-bold text-[#4C8CE4] bg-blue-50 px-2.5 py-1 rounded uppercase tracking-wider">GERMAN</span>
                            </td>
                            <td className="py-4">
                               <p className="text-sm font-medium text-[#1e293b]">Understanding Concept of German A1</p>
                            </td>
                            <td className="py-4 text-right">
                               <button className="text-[10px] font-bold text-[#4C8CE4] bg-blue-50 hover:bg-[#4C8CE4] hover:text-white transition-colors px-4 py-1.5 rounded-full uppercase tracking-wider">Show Details</button>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>

        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 h-full bg-white border-l border-slate-100 flex flex-col flex-shrink-0 overflow-y-auto hidden xl:flex">
        <div className="p-8">
          {/* Profile header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-lg font-bold text-[#1e293b] font-outfit">Your Profile</h2>
            <button className="text-slate-400 hover:text-slate-600"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg></button>
          </div>

          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-[104px] h-[104px] rounded-full border-[3px] border-blue-50 p-1 mb-5 relative flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-slate-100 overflow-hidden flex items-center justify-center">
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              {/* Arc decorative progress indicator */}
              <svg className="absolute top-0 left-0 w-full h-full text-[#4C8CE4] -rotate-90" viewBox="0 0 104 104" fill="none">
                <circle cx="52" cy="52" r="50" stroke="currentColor" strokeWidth="4" strokeDasharray="200 314" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1e293b] font-outfit mb-2">Guten Morgen, User</h3>
            <p className="text-xs text-slate-500 max-w-[200px] leading-relaxed">Continue your journey and achieve your target</p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
             {[
               <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
               <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
               <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
             ].map((icon, i) => (
               <button key={i} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#4C8CE4] hover:border-[#4C8CE4] transition-all shadow-sm hover:shadow">
                 {icon}
               </button>
             ))}
          </div>

          {/* Activity Chart Mock */}
          <div className="mb-12">
            <div className="flex items-end justify-between gap-3 h-28 border-b border-slate-100 pb-3">
              {[30, 50, 80, 40, 100, 70, 60].map((h, i) => (
                 <div key={i} className="w-full flex flex-col justify-end group">
                    <div className="w-full bg-[#4C8CE4] rounded-t-[4px] transition-all duration-300 group-hover:opacity-100" style={{ height: `${h}%`, opacity: h === 100 ? 1 : 0.4 }}></div>
                 </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 px-1">
              {['M','T','W','T','F','S','S'].map((day, i) => (
                 <span key={i} className="text-[10px] font-bold text-slate-400">{day}</span>
              ))}
            </div>
          </div>

          {/* Your Mentor List */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-[#1e293b] font-outfit text-sm">Your Mentor</h3>
              <button className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#4C8CE4] hover:border-[#4C8CE4] text-lg leading-none transition-colors shadow-sm pb-0.5">+</button>
            </div>
            <div className="space-y-5">
              {[1,2,3,4].map(i => (
                <div key={i} className="flex items-center justify-between group">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden flex items-center justify-center border border-slate-200">
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                     </div>
                     <div>
                       <p className="text-sm font-bold text-[#1e293b] group-hover:text-[#4C8CE4] transition-colors">Instructor Name</p>
                       <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">German Tutor</p>
                     </div>
                   </div>
                   <button className="text-[10px] font-bold text-[#4C8CE4] bg-blue-50 hover:bg-[#4C8CE4] hover:text-white transition-all px-4 py-1.5 rounded-full uppercase tracking-wider">Follow</button>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 bg-blue-50 text-[#4C8CE4] text-xs font-bold py-3.5 rounded-2xl hover:bg-[#4C8CE4] hover:text-white transition-all uppercase tracking-wider">See All Mentors</button>
          </div>
        </div>
      </aside>

    </div>
  );
}
