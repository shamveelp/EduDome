'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PageContainer from '@/components/PageContainer';

export default function InstituteLandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />

      <main className="flex-1">
        <PageContainer>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 pt-16 lg:pt-24 pb-8 lg:pb-12">
            
            <div className="flex-1 animate-fade-in order-2 md:order-1 relative">
               <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#4C8CE4]/10 rounded-full blur-3xl" />
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#4C8CE4]/5 rounded-full blur-3xl" />
               <div className="glass-card p-10 md:p-14 rounded-[40px] border-2 border-[#4C8CE4]/10 relative z-10 animate-float shadow-xl bg-white/60">
                  <h2 className="text-2xl font-bold font-outfit text-[#1e293b] mb-4">Empower Your Language Academy</h2>
                  <p className="text-slate-500 leading-relaxed">
                    Join EduDome as an institutional partner to manage your courses, students, and instructors all in one centralized platform. Scale your agency with our advanced analytics and management tools.
                  </p>
               </div>
            </div>

            <div className="flex-1 order-1 md:order-2 text-center md:text-left space-y-6">
              <span className="text-[#4C8CE4] font-bold tracking-wider uppercase text-sm">For Institutes & Agencies</span>
              <h1 className="text-4xl lg:text-6xl font-bold font-outfit leading-tight text-[#1e293b]">
                Manage your Language Academy with <span className="text-gradient">EduDome</span>
              </h1>
              <p className="text-lg text-slate-500 max-w-lg mx-auto md:mx-0">
                Streamline operations, track student progress, and organize your curriculum effortlessly. Built specifically for top-tier language institutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <Link href="/institute/register" className="btn-primary bg-[#4C8CE4] text-white px-8 py-3.5 rounded-full font-bold text-center hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30">
                  Register Institute
                </Link>
                <Link href="/institute/login" className="btn-secondary bg-white border border-slate-200 text-slate-700 px-8 py-3.5 rounded-full font-bold text-center hover:bg-slate-50 transition-colors shadow-sm">
                  Partner Login
                </Link>
              </div>
            </div>

          </div>
        </PageContainer>
      </main>
    </div>
  );
}
