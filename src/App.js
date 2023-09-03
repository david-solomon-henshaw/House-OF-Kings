import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Catalogue from './components/Catalogue';
import Traditional from './components/Traditional';
import ChildrensClothing from './components/ChildrensClothing';
import Corporate from './components/Corporate';
import Sportwear from './components/Sportwear';
import Uniforms from './components/Uniforms';
import OfficeWears from './components/OfficeWears';
import CasualWear from './components/CasualWear';
import Wedding from './components/Wedding';
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
        <Route path="/catalogue/traditionalattire" element={<Traditional />} />
        <Route path="/catalogue/childrensclothing" element={<ChildrensClothing />} />
        <Route path="/catalogue/corporate" element={<Corporate />} />
        <Route path="/catalogue/sportswear" element={<Sportwear />} />
        <Route path="/catalogue/uniform" element={<Uniforms />} />
        <Route path="/catalogue/officewears" element={<OfficeWears />} />
        <Route path="/catalogue/casual" element={<CasualWear />} />
        <Route path="/catalogue/wedding" element={<Wedding />} />



      </Routes>
      <Footer />
    </div>
  );
}

export default App;
