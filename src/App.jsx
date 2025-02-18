import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Title } from './Components/Title/Title'
import { WorkSection } from './Components/WorkSection/WorkSection'

function App() {
  return (
    <div className="app">
      <Header />
      <Title />
      <WorkSection />
      <Footer />
    </div>
  )
}

export default App
