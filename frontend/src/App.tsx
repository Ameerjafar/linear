import './App.css'
import { AiFeature } from './component/AiFeature'
import { Collabrators } from './component/Collabrators'
import { HeroSection } from './component/HeroSection'
import { ModernProductTeams } from './component/ModernProductTeams'
import { NavBar } from './component/NavBar'

function App() {

  return (
    <div className = 'bg-primary min-h-screen w-full'>
      <NavBar />
      <HeroSection />
      <Collabrators />
      <ModernProductTeams />
      <AiFeature />
    </div>
  )
}

export default App
