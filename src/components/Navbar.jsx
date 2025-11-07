import { Gamepad2, Monitor, Calendar, User } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 grid place-items-center text-white">
            <Gamepad2 size={20} />
          </div>
          <span className="font-semibold tracking-tight text-slate-800">Nebula Gaming Café</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-slate-600">
          <a href="#pcs" className="hover:text-slate-900 flex items-center gap-1"><Monitor size={18}/> PCs</a>
          <a href="#booking" className="hover:text-slate-900 flex items-center gap-1"><Calendar size={18}/> Book</a>
          <a href="#profile" className="hover:text-slate-900 flex items-center gap-1"><User size={18}/> Profile</a>
        </nav>
        <a href="#booking" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg text-sm font-medium shadow">
          <Calendar size={16}/> Reserve Now
        </a>
      </div>
    </header>
  )
}
