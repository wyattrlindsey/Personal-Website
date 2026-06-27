import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import ContactLinks from './components/ContactLinks'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <About />
      <ContactLinks />
    </div>
  )
}
