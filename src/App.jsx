import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import CTA from "./components/CTA.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Project from "./components/Project.jsx";
import Team from "./components/Team.jsx";
import Testimonials from "./components/Testimonials.jsx";
import "./main.css";
import Newsletter from "./components/NewsLetter.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import ComfortChatbot from "./components/Chatbot.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className=" w-screen overflow-x-hidden">
              <NavBar />
              <Home />
              <About />
              <Project />
              <Testimonials />
              <Team />
              <CTA />
              <Contact />
              {/* <Qr/> */}
              <Newsletter />
              <FAQ />
              <Footer />
              {/* <ComfortChatbot /> */}
            </div>
          }
        />

        <Route
          path="*"
          element={
            <div className="text-5xl justify-center items-center flex ">
              404 Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
