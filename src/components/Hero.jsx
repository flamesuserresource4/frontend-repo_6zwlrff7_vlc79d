import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5U8j8oN0JmL7uG8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full grid content-center">
        <div className="backdrop-blur-sm bg-white/30 rounded-xl p-6 max-w-xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Reserve. Play. Dominate.</h1>
          <p className="mt-3 text-slate-700">Book high-performance rigs by the hour, track your time, and get instant invoices. Built for gaming cafés and esports lounges.</p>
          <div className="mt-5 flex gap-3">
            <a href="#booking" className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">Book a PC</a>
            <a href="#pcs" className="px-4 py-2 rounded-lg border border-slate-300 bg-white/70 hover:bg-white">View PCs</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 to-white" />
    </section>
  )
}
