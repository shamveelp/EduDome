'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

export default function InstituteDashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = 'accessToken=; path=/; max-age=0; SameSite=Strict';
    router.push('/institute/login');
    router.refresh();
  };

  const menuGroups = [
    {
      title: 'Main',
      items: [
        { label: 'Dashboard', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, active: true },
        { label: 'Applications', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg> }
      ]
    },
    {
      title: 'Layout',
      items: [
        { label: 'Default', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg> },
        { label: 'Mini', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg> }
      ]
    },
    {
      title: 'Peoples',
      items: [
        { label: 'Students', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> },
        { label: 'Parents', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> },
        { label: 'Teachers', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> }
      ]
    },
    {
      title: 'Academic',
      items: [
        { label: 'Classes', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/></svg> },
        { label: 'Class Room', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg> },
        { label: 'Syllabus', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/></svg> }
      ]
    }
  ];

  const feeData = [
    { name: 'Q1: 2023', total: 60, collected: 40 },
    { name: 'Q2: 2023', total: 60, collected: 50 },
    { name: 'Q3: 2023', total: 60, collected: 48 },
    { name: 'Q4: 2023', total: 60, collected: 55 },
    { name: 'Q1: 2024', total: 60, collected: 45 },
    { name: 'Q2: 2024', total: 60, collected: 40 },
    { name: 'Q3: 2024', total: 60, collected: 35 },
    { name: 'Q4: 2024', total: 60, collected: 50 },
  ];

  const attendanceData = [
    { name: 'Present', value: 3610, fill: '#3b82f6' },
    { name: 'Absent', value: 44, fill: '#38bdf8' }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 font-outfit text-slate-800">
      
      {/* Sidebar */}
      <aside className="w-[280px] bg-white border-r border-slate-100 flex flex-col flex-shrink-0 h-full overflow-y-auto custom-scrollbar">
        <div className="p-5 flex items-center gap-3 mb-2 sticky top-0 bg-white z-10">
           <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-lg">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
           </div>
           <span className="text-xl font-bold tracking-tight text-[#1e293b]">EduDome</span>
           <button className="ml-auto text-slate-400 hover:text-slate-600"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
        </div>
        
        <div className="px-5 mb-6">
          <button className="w-full flex items-center justify-between bg-white border border-slate-200 px-3 py-2.5 rounded-xl shadow-sm hover:shadow transition-shadow">
             <div className="flex items-center gap-3 text-sm font-bold text-[#1e293b]">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg></div>
                Global International
             </div>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </button>
        </div>

        <div className="flex-1 px-4 space-y-6 pb-8">
          {menuGroups.map((group, idx) => (
             <div key={idx}>
                <h3 className="text-[11px] font-semibold text-slate-400 mb-2 px-3 uppercase tracking-wider">{group.title}</h3>
                <nav className="space-y-1">
                   {group.items.map((item, i) => (
                      <a key={i} href="#" className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${item.active ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'}`}>
                         <div className="flex items-center gap-3">
                            {item.icon}
                            {item.label}
                         </div>
                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                      </a>
                   ))}
                </nav>
             </div>
          ))}
        </div>
      </aside>

      {/* Main Column */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Top Navbar */}
        <header className="h-[72px] bg-white border-b border-slate-100 flex items-center justify-between px-6 flex-shrink-0">
           <div className="flex items-center gap-4 flex-1 max-w-xl">
              <div className="relative w-full max-w-md">
                 <input type="text" placeholder="Search" className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                 <button className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border border-slate-200 rounded flex items-center justify-center text-slate-400 shadow-sm"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
              </div>
           </div>

           <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-600 bg-slate-50 cursor-pointer">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                 Academic Year : 2024 / 2025
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>

              <div className="flex items-center gap-2">
                 <button className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-500 hover:text-blue-500 hover:border-blue-200 transition-all"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></button>
                 <button className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-500 hover:text-blue-500 hover:border-blue-200 transition-all"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg></button>
                 <button className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-500 hover:text-blue-500 hover:border-blue-200 transition-all relative">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                    <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                 </button>
                 <button className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-500 hover:text-blue-500 hover:border-blue-200 transition-all relative">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full border border-white"></span>
                 </button>
                 <button className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-500 hover:text-blue-500 hover:border-blue-200 transition-all"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></button>
              </div>

              <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                 <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-white overflow-hidden cursor-pointer shadow-sm border border-slate-100 hover:opacity-80 transition-opacity" onClick={handleLogout}>
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                 </div>
              </div>
           </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#f8fafc] space-y-6 custom-scrollbar">
           
           <div className="flex justify-between items-center">
              <div>
                 <h1 className="text-xl font-bold text-[#1e293b]">Admin Dashboard</h1>
                 <p className="text-xs font-semibold text-slate-500 mt-1">Dashboard / Admin Dashboard</p>
              </div>
              <div className="flex gap-3">
                 <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm">Add New Student</button>
                 <button className="bg-white border border-slate-200 text-slate-600 px-5 py-2.5 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors shadow-sm">Fees Details</button>
              </div>
           </div>

           {/* Green Alert */}
           <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-[16px] p-3 flex items-center justify-between text-sm shadow-sm">
              <div className="flex items-center gap-3 text-green-700">
                 <div className="w-7 h-7 rounded-full overflow-hidden border border-white shadow-sm"><img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" alt="avatar" /></div>
                 <p><strong className="font-bold text-green-800">Fahed III,C</strong> has paid Fees for the <strong className="font-bold text-green-800">&quot;Term1&quot;</strong></p>
              </div>
              <button className="text-green-600 hover:text-green-800 bg-green-100 rounded-full w-6 h-6 flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
           </div>

           {/* Hero Dark Banner */}
           <div className="bg-[#111827] rounded-[24px] p-8 relative overflow-hidden flex flex-col justify-center min-h-[160px] shadow-lg">
              {/* Decorative shapes */}
              <div className="absolute right-[20%] top-0 w-24 h-24 border-[6px] border-blue-500 rounded-full opacity-40 -translate-y-1/2"></div>
              <div className="absolute right-[40%] top-4 w-12 h-12 border-[4px] border-yellow-400 rounded-lg opacity-40 rotate-12"></div>

              <div className="relative z-10 flex justify-between items-start w-full">
                 <div>
                    <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                       Welcome Back, Mr. Herald
                       <button className="w-7 h-7 bg-white/10 rounded flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></button>
                    </h2>
                    <p className="text-slate-400 text-sm font-medium">Have a Good day at work</p>
                 </div>
                 <div className="text-white/60 text-xs font-bold flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 2v6h6"/></svg>
                    Updated Recently on 15 Jun 2024
                 </div>
              </div>
           </div>

           {/* Stats Cards */}
           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                 { title: 'Total Students', count: '3654', active: '3643', inactive: '11', badge: '1.2%', iconBg: 'bg-orange-50', iconColor: 'text-orange-500' },
                 { title: 'Total Teachers', count: '284', active: '254', inactive: '30', badge: '1.2%', iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
                 { title: 'Total Staff', count: '162', active: '161', inactive: '02', badge: '1.2%', iconBg: 'bg-yellow-50', iconColor: 'text-yellow-600' },
                 { title: 'Total Subjects', count: '82', active: '81', inactive: '01', badge: '1.2%', iconBg: 'bg-green-50', iconColor: 'text-green-500' }
              ].map((stat, i) => (
                 <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between h-[150px]">
                    <div className="flex justify-between items-start">
                       <div className="flex items-center gap-4">
                          <div className={`w-[60px] h-[60px] rounded-[16px] flex items-center justify-center ${stat.iconBg} ${stat.iconColor}`}>
                             <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                          </div>
                          <div>
                             <h3 className="text-[26px] font-bold text-[#1e293b] leading-tight">{stat.count}</h3>
                             <p className="text-[13px] font-semibold text-slate-500">{stat.title}</p>
                          </div>
                       </div>
                       <span className="bg-green-500 text-white text-[11px] font-bold px-2 py-1 rounded-[6px] flex items-center gap-1 shadow-sm">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15"/></svg>
                          {stat.badge}
                       </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-3 text-xs font-semibold">
                       <div className="flex items-center gap-1"><span className="text-slate-400">Active :</span> <span className="text-[#1e293b]">{stat.active}</span></div>
                       <div className="flex items-center gap-1"><span className="text-slate-400">Inactive :</span> <span className="text-[#1e293b]">{stat.inactive}</span></div>
                    </div>
                 </div>
              ))}
           </div>

           {/* Layout Grid: Fees Collection & Leave Requests */}
           <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              
              {/* Fees Collection Chart */}
              <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col h-[400px]">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-[#1e293b]">Fees Collection</h3>
                    <div className="flex items-center gap-2 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 bg-white cursor-pointer hover:bg-slate-50">
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                       Last 8 Quater
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-6 mb-8 text-xs font-bold">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-200 rounded-sm transform rotate-45"></div> <span className="text-slate-400">Total Fee</span></div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-600 rounded-sm transform rotate-45"></div> <span className="text-slate-400">Collected Fee</span></div>
                 </div>

                 <div className="flex-1 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={feeData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }} barGap={-24}>
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8', fontWeight: 600 }} dy={10} />
                          <Tooltip cursor={{fill: 'transparent'}} />
                          <Bar dataKey="total" fill="#e2e8f0" radius={[6, 6, 0, 0]} barSize={24} />
                          <Bar dataKey="collected" fill="#2563eb" radius={[6, 6, 0, 0]} barSize={24} />
                       </BarChart>
                    </ResponsiveContainer>
                 </div>
              </div>

              {/* Leave Requests */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm h-[400px] flex flex-col">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-[#1e293b]">Leave Requests</h3>
                    <div className="text-xs font-bold text-slate-500 flex items-center gap-1 cursor-pointer">
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                       This Week
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                 </div>

                 <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                    {[
                       { name: 'James', tag: 'Emergency', role: 'Physics Teacher', date: '12 -13 May', apply: '12 May', tagColor: 'bg-red-50 text-red-500', icon: '11' },
                       { name: 'Hendrita', tag: 'Medical', role: 'Maths Teacher', date: '17 -18 May', apply: '12 May', tagColor: 'bg-green-50 text-green-500', icon: '22' }
                    ].map((leave, i) => (
                       <div key={i} className="border border-slate-100 rounded-[16px] p-4 bg-white hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start mb-4">
                             <div className="flex gap-3">
                                <img src={`https://i.pravatar.cc/150?img=${leave.icon}`} className="w-12 h-12 rounded-xl object-cover shadow-sm" alt={leave.name} />
                                <div>
                                   <h4 className="font-bold text-[#1e293b] text-[15px] flex items-center gap-2 mb-0.5">
                                      {leave.name}
                                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${leave.tagColor}`}>{leave.tag}</span>
                                   </h4>
                                   <p className="text-xs font-semibold text-slate-400">{leave.role}</p>
                                </div>
                             </div>
                             <div className="flex gap-2">
                                <button className="w-7 h-7 bg-green-500 text-white rounded-lg flex items-center justify-center hover:bg-green-600 shadow-sm"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></button>
                                <button className="w-7 h-7 bg-red-500 text-white rounded-lg flex items-center justify-center hover:bg-red-600 shadow-sm"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
                             </div>
                          </div>
                          <div className="flex justify-between items-center text-[11px] font-semibold text-slate-400 pt-3 border-t border-slate-100">
                             <div>Leave : <span className="font-bold text-[#1e293b]">{leave.date}</span></div>
                             <div>Apply on : <span className="font-bold text-[#1e293b]">{leave.apply}</span></div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

           </div>

           {/* Second Row Grid */}
           <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              
              {/* Schedules */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-[#1e293b]">Schedules</h3>
                    <button className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                       Add New
                    </button>
                 </div>
                 
                 <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                       <h4 className="font-bold text-[#1e293b] text-sm">July 2024</h4>
                       <div className="flex gap-1">
                          <button className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg></button>
                          <button className="w-6 h-6 rounded-full bg-[#1e293b] text-white flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg></button>
                       </div>
                    </div>
                    <div className="grid grid-cols-7 text-center text-xs font-bold text-slate-400 mb-2">
                       <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                    </div>
                    <div className="grid grid-cols-7 text-center text-sm font-semibold text-[#1e293b] gap-y-3">
                       <div className="text-slate-300">27</div><div className="text-slate-300">28</div><div className="text-slate-300">29</div><div className="text-slate-300">30</div><div className="text-slate-300">31</div><div>1</div><div>2</div>
                       <div>3</div><div>4</div><div>5</div><div className="bg-blue-600 text-white rounded-lg w-7 h-7 mx-auto flex items-center justify-center">6</div><div className="bg-blue-600 text-white rounded-lg w-7 h-7 mx-auto flex items-center justify-center">7</div><div>8</div><div>9</div>
                       <div>10</div><div>11</div><div className="bg-blue-600 text-white rounded-lg w-7 h-7 mx-auto flex items-center justify-center">12</div><div>13</div><div>14</div><div>15</div><div>16</div>
                       <div>17</div><div className="bg-blue-600 text-white rounded-lg w-7 h-7 mx-auto flex items-center justify-center">27</div><div>19</div><div>20</div><div>21</div><div>22</div><div>23</div>
                       <div>24</div><div>25</div><div>26</div><div>27</div><div>28</div><div>29</div><div>30</div>
                    </div>
                 </div>

                 <div>
                    <h4 className="font-bold text-[#1e293b] text-sm mb-4">Upcoming Events</h4>
                    <div className="space-y-3">
                       <div className="flex gap-4 border border-blue-100 bg-blue-50/50 rounded-xl p-3 border-l-[3px] border-l-blue-400">
                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-500 shadow-sm"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
                          <div className="flex-1">
                             <h5 className="font-bold text-sm text-[#1e293b]">Parents, Teacher Meet</h5>
                             <p className="text-xs text-slate-500 font-semibold flex items-center gap-1 mt-0.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> 15 July 2024</p>
                             <div className="flex justify-between items-center mt-2">
                                <span className="text-xs text-slate-400 font-semibold flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 09:10 AM - 10:50 PM</span>
                                <div className="flex -space-x-2">
                                   <img src="https://i.pravatar.cc/150?img=1" className="w-6 h-6 rounded-full border-2 border-white" alt="p1" />
                                   <img src="https://i.pravatar.cc/150?img=2" className="w-6 h-6 rounded-full border-2 border-white" alt="p2" />
                                   <img src="https://i.pravatar.cc/150?img=3" className="w-6 h-6 rounded-full border-2 border-white" alt="p3" />
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Attendance */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between">
                 <div>
                    <div className="flex justify-between items-center mb-6">
                       <h3 className="text-lg font-bold text-[#1e293b]">Attendance</h3>
                       <div className="text-xs font-bold text-slate-500 flex items-center gap-1 cursor-pointer">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          Today
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                       </div>
                    </div>
                    
                    <div className="flex gap-6 border-b border-slate-100 mb-6 font-bold text-sm">
                       <span className="text-blue-600 border-b-2 border-blue-600 pb-2">Students</span>
                       <span className="text-slate-400 pb-2 cursor-pointer hover:text-slate-600">Teachers</span>
                       <span className="text-slate-400 pb-2 cursor-pointer hover:text-slate-600">Staff</span>
                    </div>

                    <div className="flex justify-between text-center mb-6">
                       <div>
                          <h4 className="font-bold text-lg text-[#1e293b]">28</h4>
                          <p className="text-xs font-semibold text-slate-400">Emergency</p>
                       </div>
                       <div className="w-px h-10 bg-slate-100"></div>
                       <div>
                          <h4 className="font-bold text-lg text-[#1e293b]">01</h4>
                          <p className="text-xs font-semibold text-slate-400">Absent</p>
                       </div>
                       <div className="w-px h-10 bg-slate-100"></div>
                       <div>
                          <h4 className="font-bold text-lg text-[#1e293b]">01</h4>
                          <p className="text-xs font-semibold text-slate-400">Late</p>
                       </div>
                    </div>
                 </div>

                 <div className="relative w-full h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                       <PieChart>
                          <Pie
                             data={attendanceData}
                             cx="50%"
                             cy="50%"
                             innerRadius={60}
                             outerRadius={80}
                             paddingAngle={5}
                             dataKey="value"
                             stroke="none"
                          >
                             {attendanceData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                             ))}
                          </Pie>
                       </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                       <span className="text-2xl font-bold text-[#1e293b]">3610</span>
                       <span className="text-xs font-semibold text-slate-400">Present</span>
                    </div>
                 </div>

                 <button className="w-full mt-6 py-2.5 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    View All
                 </button>
              </div>

              {/* Quick Links & Class Routine */}
              <div className="flex flex-col gap-6">
                 <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-[#1e293b] mb-6">Quick Links</h3>
                    <div className="grid grid-cols-3 gap-4">
                       {[
                          { name: 'Calendar', colorClass: 'bg-green-50 text-green-500 border-green-100' },
                          { name: 'Events', colorClass: 'bg-blue-50 text-blue-500 border-blue-100' },
                          { name: 'Attendance', colorClass: 'bg-yellow-50 text-yellow-500 border-yellow-100' },
                          { name: 'Exams', colorClass: 'bg-teal-50 text-teal-500 border-teal-100' },
                          { name: 'Calendar', colorClass: 'bg-red-50 text-red-500 border-red-100' },
                          { name: 'Reports', colorClass: 'bg-cyan-50 text-cyan-500 border-cyan-100' },
                       ].map((link, i) => (
                          <div key={i} className="flex flex-col items-center justify-center gap-2 cursor-pointer group">
                             <div className={`w-14 h-14 rounded-full flex items-center justify-center ${link.colorClass} shadow-sm border group-hover:scale-110 transition-transform`}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>
                             </div>
                             <span className="text-[11px] font-bold text-slate-500">{link.name}</span>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex-1">
                    <div className="flex justify-between items-center mb-6">
                       <h3 className="text-lg font-bold text-[#1e293b]">Class Routine</h3>
                       <button className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                          Add New
                       </button>
                    </div>
                    <div className="space-y-6">
                       {[
                          { date: 'Oct 2024', val: 70, color: 'bg-blue-500' },
                          { date: 'Nov 2024', val: 40, color: 'bg-yellow-500' },
                          { date: 'Oct 2024', val: 60, color: 'bg-green-500' }
                       ].map((routine, i) => (
                          <div key={i} className="flex items-center gap-4">
                             <img src={`https://i.pravatar.cc/150?img=${i+30}`} className="w-8 h-8 rounded-full object-cover shadow-sm" alt="Tutor" />
                             <div className="flex-1">
                                <p className="text-xs font-bold text-[#1e293b] mb-2">{routine.date}</p>
                                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                   <div className={`h-full rounded-full ${routine.color}`} style={{ width: `${routine.val}%` }}></div>
                                </div>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>

           </div>

        </main>
      </div>
    </div>
  );
}
