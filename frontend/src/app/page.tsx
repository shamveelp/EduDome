import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PageContainer from '@/components/PageContainer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 gap-12 lg:gap-24 pt-16 lg:pt-24 pb-8 lg:pb-12">

        {/* Left Side: Quote */}
        <div className="flex-1 animate-fade-in order-2 md:order-1">
          <div className="relative group">
            {/* Decorative blobs */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#4C8CE4]/10 rounded-full blur-3xl group-hover:bg-[#4C8CE4]/20 transition-all duration-500" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#4C8CE4]/5 rounded-full blur-3xl group-hover:bg-[#4C8CE4]/10 transition-all duration-500" />

            <div className="glass-card p-10 md:p-14 rounded-[40px] border-2 border-[#4C8CE4]/10 relative z-10 animate-float">
              <svg className="absolute top-8 left-8 text-[#4C8CE4]/20" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3C14.017 2.44772 14.4647 2 15.017 2H21.017C21.5693 2 22.017 2.44772 22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H4.017C2.91243 8 2.017 7.10457 2.017 6V3C2.017 2.44772 2.46472 2 3.017 2H9.017C9.56928 2 10.017 2.44772 10.017 3V15C10.017 18.3137 7.33072 21 4.017 21H2.017Z" />
              </svg>

              <div className="space-y-6 pt-6">
                <p className="text-2xl md:text-3xl font-medium leading-relaxed text-[#1e293b] italic">
                  &quot;Wer fremde Sprachen nicht kennt, weiß nichts von seiner eigenen.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-[#4C8CE4]" />
                  <p className="text-lg font-semibold text-[#4C8CE4]">Johann Wolfgang von Goethe</p>
                </div>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm">
                  (Those who know nothing of foreign languages know nothing of their own.)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Hero Text & Buttons */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-10 animate-fade-in order-1 md:order-2" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1e293b] leading-[1.1]">
              Master German in <br />
              <span className="text-[#4C8CE4]">5 minutes</span> a day.
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-md">
              EduDome makes learning effortless, fun, and completely tailored to you.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-[320px]">
            <Link href="/register" className="btn-primary flex justify-center items-center w-full py-4 rounded-2xl bg-[#4C8CE4] text-white font-bold text-lg uppercase tracking-wider">
              Get Started
            </Link>
            <Link href="/login" className="btn-secondary flex justify-center items-center w-full py-4 rounded-2xl bg-white text-[#4C8CE4] font-bold text-lg uppercase tracking-wider">
              I already have an account
            </Link>
          </div>
        </div>
      </main>

      {/* Hero Bottom Banner */}
      <div className="w-full pb-12 lg:pb-20">
        <PageContainer className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-400 font-medium">
          <div className="flex items-center gap-3">
            {/* German Flag */}
            <div className="w-8 h-5 rounded-sm overflow-hidden flex flex-col shadow-sm">
              <div className="bg-black flex-1" />
              <div className="bg-[#FF0000] flex-1" />
              <div className="bg-[#FFCC00] flex-1" />
            </div>
            <span className="text-sm md:text-base uppercase tracking-widest text-[#1e293b]/70">
              The world&apos;s most refined way to learn German
            </span>
          </div>
        </PageContainer>
      </div>

      {/* Agency Section */}
      <section className="w-full bg-[#4C8CE4]/5 py-20 border-y border-slate-100">
        <PageContainer className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] font-outfit">Are you an Agency?</h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto md:mx-0">
              Manage your students, track their progress, and provide premium German language education under your own brand.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link href="/register?type=agency" className="btn-primary px-8 py-4 rounded-2xl bg-[#4C8CE4] text-white font-bold text-lg text-center uppercase tracking-wider whitespace-nowrap">
              Register Agency
            </Link>
            <Link href="/login?type=agency" className="btn-secondary px-8 py-4 rounded-2xl bg-white text-[#4C8CE4] font-bold text-lg text-center uppercase tracking-wider whitespace-nowrap">
              Agency Login
            </Link>
          </div>
        </PageContainer>
      </section>

      {/* FAQs Section */}
      <section className="w-full py-24">
        <PageContainer>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] font-outfit">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Everything you need to know about EduDome and how it works.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#1e293b] font-outfit mb-2">How much time do I need per day?</h3>
              <p className="text-slate-500 leading-relaxed">Just 5 minutes a day is enough to start making progress. Consistency is key, and our bite-sized lessons are designed to fit perfectly into your busy schedule.</p>
            </div>
            {/* FAQ 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#1e293b] font-outfit mb-2">Is EduDome suitable for beginners?</h3>
              <p className="text-slate-500 leading-relaxed">Absolutely! We start from the very basics and gradually introduce more complex grammar and vocabulary. You don't need any prior knowledge of German.</p>
            </div>
            {/* FAQ 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#1e293b] font-outfit mb-2">Can agencies track student progress?</h3>
              <p className="text-slate-500 leading-relaxed">Yes, our agency dashboard provides comprehensive analytics on student engagement, completion rates, and performance metrics across all your enrolled learners.</p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-slate-100 bg-slate-50 pt-16 pb-8">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-8 h-8 primary-gradient rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm transition-transform group-hover:scale-110">
                  E
                </div>
                <span className="text-xl font-bold tracking-tight text-[#1e293b] font-outfit">EduDome</span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed">
                The world&apos;s most refined way to learn German. Master the language of thinkers and explorers with just 5 minutes a day.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-5 rounded-sm overflow-hidden flex flex-col shadow-sm">
                  <div className="bg-black flex-1" />
                  <div className="bg-[#FF0000] flex-1" />
                  <div className="bg-[#FFCC00] flex-1" />
                </div>
                <span className="text-sm font-medium uppercase tracking-widest text-[#1e293b]/50">
                  Made for Excellence
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-[#1e293b] font-outfit mb-6">Company</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-slate-500 hover:text-[#4C8CE4] transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-[#4C8CE4] transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-[#4C8CE4] transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-[#4C8CE4] transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-[#1e293b] font-outfit mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-slate-500 hover:text-[#4C8CE4] transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-[#4C8CE4] transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-[#4C8CE4] transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} EduDome. All rights reserved.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#4C8CE4] hover:border-[#4C8CE4]/30 transition-all cursor-pointer shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#4C8CE4] hover:border-[#4C8CE4]/30 transition-all cursor-pointer shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#4C8CE4] hover:border-[#4C8CE4]/30 transition-all cursor-pointer shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </div>
            </div>
          </div>
        </PageContainer>
      </footer>
    </div>
  );
}
