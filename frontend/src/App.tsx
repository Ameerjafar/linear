import './App.css'
import { HeroSection } from './component/HeroSection'
import { NavBar } from './component/NavBar'

function App() {

  return (
    <div className = 'bg-primary h-screen w-full'>
      <NavBar />
      <HeroSection />
    </div>
  )
}

export default App
