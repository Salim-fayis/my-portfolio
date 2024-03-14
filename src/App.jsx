import './App.css';
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Navbar from "./pages/Navbar"
import About from "./pages/About"
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import ScollTop from './utils/ScollTop';

function App() {

  return (
    
    <div >
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <ScollTop />
    </div>

  )
}

export default App
