import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PCList from './components/PCList'
import BookingForm from './components/BookingForm'
import PlayerProfile from './components/PlayerProfile'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <Hero />
      <PCList />
      <BookingForm />
      <PlayerProfile />
      <footer className="border-t py-8 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Nebula Gaming Café</p>
          <p>Demo UI for reservations and billing. Admin portal coming next.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
