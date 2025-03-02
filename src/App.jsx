import './App.css' 
import FeatureSection from './componentes/FeatureSection'
import Footer from './componentes/Footer'
import Hero from './componentes/Hero'
import Navbar from './componentes/Navbar'
import PricingSection from './componentes/PricingSection'
import WorkFlow from './componentes/WorkFlow'


const App = () => {
  return (
    < >

      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <FeatureSection />
        <WorkFlow />
        <PricingSection />
        <Footer />
      </div>

    </>
  )
}

export default App
