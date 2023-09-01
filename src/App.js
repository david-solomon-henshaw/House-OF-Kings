import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Catalogue from './components/Catalogue';
import MensCatalogue from './components/MensCatalogue';
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
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/catalogue/men/native" element={<MensCatalogue />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
