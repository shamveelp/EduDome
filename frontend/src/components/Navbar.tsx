import Link from 'next/link';

interface NavbarProps {
  /** Show logout button instead of auth links */
  showLogout?: boolean;
  onLogout?: () => void;
}

export default function Navbar({ showLogout, onLogout }: NavbarProps) {
  return (
    <header className="w-full border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-9 h-9 primary-gradient rounded-xl flex items-center justify-center text-white font-bold text-xl shadow transition-transform group-hover:scale-110">
            E
          </div>
          <span className="text-xl font-bold tracking-tight text-[#1e293b] font-outfit">EduDome</span>
        </Link>

        {/* Right side */}
        {showLogout ? (
          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-slate-500 hover:text-red-500 font-medium text-sm transition-colors px-4 py-2 rounded-xl hover:bg-red-50"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Logout
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-slate-600 hover:text-[#4C8CE4] font-medium text-sm transition-colors px-4 py-2 rounded-xl hover:bg-slate-50">
              Sign in
            </Link>
            <Link href="/register" className="btn-primary px-5 py-2.5 rounded-xl bg-[#4C8CE4] text-white font-bold text-sm">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
