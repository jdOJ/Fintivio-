import './App.css'
import FeatureSection from './componentes/FeatureSection'
import Hero from './componentes/Hero'
import Navbar from './componentes/Navbar'

function App() {
  return (
    < >
  
  <Navbar/>
  <div className="max-w-7xl mx-auto pt-20 px-6">
    <Hero/>
  </div>
  <FeatureSection/>
  
    </>
  )
}

export default App
