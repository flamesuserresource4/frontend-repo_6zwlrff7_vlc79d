import { User } from 'lucide-react'

export default function PlayerProfile() {
  return (
    <section id="profile" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2"><User/> Player Profile</h2>
        <p className="text-slate-600 mt-2">Track your bookings and receipts. Sign-in coming soon.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-xl p-6 shadow-sm md:col-span-1">
            <div className="h-12 w-12 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-semibold">JG</div>
            <h3 className="mt-3 font-semibold text-slate-900">Jane Gamer</h3>
            <p className="text-sm text-slate-500">jane@example.com</p>
            <button className="mt-4 w-full border rounded-lg py-2 hover:bg-slate-50">Edit</button>
          </div>
          <div className="md:col-span-2 bg-white border rounded-xl p-6">
            <h4 className="font-semibold text-slate-900">Recent Bookings</h4>
            <ul className="mt-3 divide-y">
              {[1,2,3].map(i => (
                <li key={i} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-800">High-Performance • 2h</p>
                    <p className="text-xs text-slate-500">2025-01-0{i} • 6:00 PM</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">$10.00</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
