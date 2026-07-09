import Nav from './components/Nav'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Services from './components/Services'
import HowWeWork from './components/HowWeWork'
import Industries from './components/Industries'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#0F172A', color: '#fff', overflowX: 'hidden' }}>
      <Nav />
      <Hero />
      <Philosophy />
      <Services />
      <HowWeWork />
      <Industries />
      <Contact />
      <Footer />
    </div>
  )
}
