import { useEffect, useState } from 'react'
import { Monitor, Cpu } from 'lucide-react'

const mockPCs = [
  { id: 'pc-1', type: 'Standard', status: 'available' },
  { id: 'pc-2', type: 'High-Performance', status: 'in-use' },
  { id: 'pc-3', type: 'Racing Rig', status: 'maintenance' },
  { id: 'pc-4', type: 'Standard', status: 'available' },
  { id: 'pc-5', type: 'High-Performance', status: 'available' },
]

function StatusPill({ status }) {
  const map = {
    'available': 'bg-green-100 text-green-700',
    'in-use': 'bg-yellow-100 text-yellow-700',
    'maintenance': 'bg-red-100 text-red-700'
  }
  return <span className={`px-2 py-1 rounded-full text-xs font-medium ${map[status]}`}>{status}</span>
}

export default function PCList() {
  const [pcs, setPcs] = useState([])

  useEffect(() => {
    // Placeholder for backend fetch; using mock data for now
    setPcs(mockPCs)
  }, [])

  return (
    <section id="pcs" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2"><Monitor/> Available PCs</h2>
        <p className="text-slate-600 mt-2">Browse rigs and check real-time availability.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pcs.map(pc => (
            <div key={pc.id} className="bg-white rounded-xl border p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
                    <Cpu/>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{pc.type}</h3>
                    <p className="text-xs text-slate-500">ID: {pc.id}</p>
                  </div>
                </div>
                <StatusPill status={pc.status} />
              </div>
              <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg disabled:opacity-50" disabled={pc.status !== 'available'}>
                {pc.status === 'available' ? 'Book this PC' : 'Unavailable'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
