import './App.css';
import AboutSection from './Components/AboutSection';
import EventSchedule from './Components/EventSchedule';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import RegistrationForm from './Components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <section id="home">
      <HeroSection/>
      </section>
      <section id="about">
      <AboutSection/>
      </section>
      <section id="schedule">
      <EventSchedule/>
      </section>
      <section id="register">
      <RegistrationForm/>
      </section>
      
    </div>
  );
}

export default App;
