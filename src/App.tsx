import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Thinking } from './components/Thinking'
import { SelectedWork } from './components/SelectedWork'
import { BusinessWork } from './components/BusinessWork'
import { Research } from './components/Research'
import { Approach } from './components/Approach'
import { TechStack } from './components/TechStack'
import { Notes } from './components/Notes'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="bg-bg text-ink min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Thinking />
        <SelectedWork />
        <BusinessWork />
        <Research />
        <Approach />
        <TechStack />
        <Notes />
        <Contact />
      </main>
    </div>
  )
}

export default App
