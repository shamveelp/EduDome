export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 primary-gradient rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg transition-transform group-hover:scale-110">
            E
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#1e293b] font-outfit">Ebenex</span>
        </div>
        
        <div className="flex items-center gap-2 text-slate-500 font-medium hover:text-[#4C8CE4] transition-colors cursor-pointer text-sm md:text-base">
          <span>SITE LANGUAGE: ENGLISH</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 gap-12 lg:gap-24">
        
        {/* Left Side: Quote */}
        <div className="flex-1 animate-fade-in order-2 md:order-1">
          <div className="relative group">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#4C8CE4]/10 rounded-full blur-3xl group-hover:bg-[#4C8CE4]/20 transition-all duration-500"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#4C8CE4]/5 rounded-full blur-3xl group-hover:bg-[#4C8CE4]/10 transition-all duration-500"></div>
            
            <div className="glass-card p-10 md:p-14 rounded-[40px] border-2 border-[#4C8CE4]/10 relative z-10 animate-float">
              <svg className="absolute top-8 left-8 text-[#4C8CE4]/20" width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3C14.017 2.44772 14.4647 2 15.017 2H21.017C21.5693 2 22.017 2.44772 22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H4.017C2.91243 8 2.017 7.10457 2.017 6V3C2.017 2.44772 2.46472 2 3.017 2H9.017C9.56928 2 10.017 2.44772 10.017 3V15C10.017 18.3137 7.33072 21 4.017 21H2.017Z"/></svg>
              
              <div className="space-y-6 pt-6">
                <p className="text-2xl md:text-3xl font-medium leading-relaxed text-[#1e293b] italic">
                  &quot;Wer fremde Sprachen nicht kennt, weiß nichts von seiner eigenen.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-[#4C8CE4]"></div>
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
              Ebenex makes learning effortless, fun, and completely tailored to you.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-[320px]">
            <button className="btn-primary w-full py-4 rounded-2xl bg-[#4C8CE4] text-white font-bold text-lg uppercase tracking-wider">
              Get Started
            </button>
            <button className="btn-secondary w-full py-4 rounded-2xl bg-white text-[#4C8CE4] font-bold text-lg uppercase tracking-wider">
              I already have an account
            </button>
          </div>
        </div>

      </main>

      {/* Footer / Bottom Banner */}
      <footer className="w-full border-t border-slate-100 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4 text-slate-400 font-medium">
          <div className="flex items-center gap-3">
            {/* German Flag SVG */}
            <div className="w-8 h-5 rounded-sm overflow-hidden flex flex-col shadow-sm">
              <div className="bg-black flex-1"></div>
              <div className="bg-[#FF0000] flex-1"></div>
              <div className="bg-[#FFCC00] flex-1"></div>
            </div>
            <span className="text-sm md:text-base uppercase tracking-widest text-[#1e293b]/70">
              The world&apos;s most refined way to learn German
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
