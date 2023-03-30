import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trusted from './components/Trusted'
import Organized from './components/Organized'
import Experience from './components/Experience'
import Simple from './components/Simple'
import Difference from './components/Difference'
import Panic from './components/Panic'
import CardDisplay from './components/CardDisplay'
import Analytics from './components/Analytics'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='font-Familjen'>
      <Navbar/>
      <Hero/>
      <Trusted/>
      <Organized/>
      <Experience/>
      <Simple/>
      <Difference/>
      <Panic/>
      <CardDisplay/>
      <Analytics/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}