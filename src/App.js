import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/CallToAction';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
