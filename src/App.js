import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Suits from './components/Suits';
import Kaftan from './components/Kaftan';
import Wedding from './components/White_Wedding';
import OurServices from './components/OurServices';
import Agbada from './components/Agbada';
import Traditional from './components/Traditional_Wedding';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/services' element={<OurServices />} />
        <Route path="/catalogue/traditional_wedding" element={<Traditional />} />
        <Route path="/catalogue/kaftan" element={<Kaftan />} />
        <Route path="/catalogue/agbada" element={<Agbada />} />
        <Route path="/catalogue/white/wedding" element={<Wedding />} />
        <Route path="/catalogue/suits" element={<Suits />} />




      </Routes>
      <Footer />
    </div>
  );
}

export default App;
