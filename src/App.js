import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/Navigationbar';
import About from './components/About'
import Banner from './components/Banner';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import Team2023 from './components/Team2023';
import Team2024 from './components/Team2024';
import Team2025 from './components/Team2025';
import Membership from './components/Membership';
import Faq from './components/Faq';


function App() {
  
  
  return (
    <div>
      <NavigationBar/>
      <Banner/>
      <About/>
      <Schedule/>
      <Team2025/>
      <Membership/>
      <Faq/>
      <Team2024/>
      <Team2023/>
      <Footer/>
      
    </div>
  );
}

export default App;
