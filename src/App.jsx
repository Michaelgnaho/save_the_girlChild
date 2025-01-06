import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import CTA from "./components/CTA.jsx";
import FAQ from "./components/FAQ.jsx";
import Donate from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Project from "./components/Project.jsx";
import Team from "./components/Team.jsx";
import Testimonials from "./components/Testimonials.jsx";
import "./main.css";

function App() {

  return (
    <div className="">
    <NavBar/>
    <Home/>
    <About/>
    <Project/>
    <Testimonials/>
    <Team/>
    <CTA/>
    <Contact/>
    <FAQ/>
    <Footer/>
    
    

     </div>
  )
}

export default App
