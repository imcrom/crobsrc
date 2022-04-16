import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { Token } from './components/Tokenomics/Token';
import Roadmap from './components/Roadmap/Roadmap';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className='main'>
      <Header/>
      <Hero/>
      <Token/>
      <Roadmap/>
      <Footer/>
    </div>

  );
}

export default App;
