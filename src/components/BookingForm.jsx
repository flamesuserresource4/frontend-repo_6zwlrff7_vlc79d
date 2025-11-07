import { useMemo, useState } from 'react'
import { Calendar, Clock, User, Monitor } from 'lucide-react'

const pcTypes = [
  { label: 'Standard', value: 'Standard', rate: 3.0 },
  { label: 'High-Performance', value: 'High-Performance', rate: 5.0 },
  { label: 'Racing Rig', value: 'Racing Rig', rate: 6.0 },
]

export default function BookingForm() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [pcType, setPcType] = useState('Standard')
  const [date, setDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [duration, setDuration] = useState(60)

  const rate = useMemo(() => pcTypes.find(p => p.value === pcType)?.rate ?? 0, [pcType])
  const amount = useMemo(() => ((duration / 60) * rate).toFixed(2), [duration, rate])

  function onSubmit(e) {
    e.preventDefault()
    alert(`Booking submitted!\nName: ${name}\nPC Type: ${pcType}\nDate: ${date}\nStart: ${startTime}\nDuration: ${duration} mins\nEstimated: $${amount}`)
  }

  return (
    <section id="booking" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2"><Calendar/> Book a PC</h2>
        <p className="text-slate-600 mt-2">Choose your rig, date, and time. Pricing is calculated to the minute.</p>
        <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl border shadow-sm">
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-slate-700 flex items-center gap-2"><User size={16}/> Player Name</span>
              <input required value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Jane Gamer" />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Contact</span>
              <input required value={contact} onChange={e=>setContact(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="email or phone" />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700 flex items-center gap-2"><Monitor size={16}/> PC Type</span>
              <select value={pcType} onChange={e=>setPcType(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2">
                {pcTypes.map(p => <option key={p.value} value={p.value}>{p.label} (${p.rate}/hr)</option>)}
              </select>
            </label>
          </div>
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-slate-700 flex items-center gap-2"><Calendar size={16}/> Date</span>
              <input type="date" required value={date} onChange={e=>setDate(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2" />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700 flex items-center gap-2"><Clock size={16}/> Start Time</span>
              <input type="time" required value={startTime} onChange={e=>setStartTime(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2" />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Duration (minutes)</span>
              <input type="number" min={30} step={15} value={duration} onChange={e=>setDuration(parseInt(e.target.value||'0'))} className="mt-1 w-full border rounded-lg px-3 py-2" />
            </label>
            <div className="p-4 rounded-lg bg-slate-50 border">
              <div className="flex items-center justify-between text-sm text-slate-700"><span>Rate</span><span>${rate.toFixed(2)}/hr</span></div>
              <div className="flex items-center justify-between text-sm text-slate-700 mt-1"><span>Duration</span><span>{duration} min</span></div>
              <div className="flex items-center justify-between font-semibold text-slate-900 mt-2"><span>Estimated Amount</span><span>${amount}</span></div>
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg">Submit Booking</button>
          </div>
        </form>
      </div>
    </section>
  )
}
