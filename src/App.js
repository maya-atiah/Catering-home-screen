
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavHead from './Components/NavHead';
import Clients from './Pages/Clients';
import HeroSection from './Pages/HeroSection';
import Services from './Pages/Services';
import Footer from './Components/Footer';
import Scroll from './Components/Scroll';


function App() {
  return (
    <div className="App">
      <NavHead/>
      <HeroSection />
      <Services />
      <Clients />
      <Scroll/>
      <Footer/>
    
      <Routes>
        <Route path="/services" element={<Services />} />

      </Routes>



    </div>
  );
}

export default App;
