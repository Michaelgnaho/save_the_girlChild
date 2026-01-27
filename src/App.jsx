import { Helmet } from "react-helmet-async";
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
import Newsletter from "./components/NewsLetter.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>ADUNNI SAVE A GIRL FOUNDATION - Home</title>
                <meta
                  name="description"
                  content="Empowering young girls through education, mentorship, and community support. Learn about our programs and how you can contribute to girl child education."
                />
                <meta
                  name="keywords"
                  content="girl education, women empowerment, NGO, foundation, education charity"
                />
                <link
                  rel="canonical"
                  href="https://www.adunni-save-a-girl-foundation.com.ng"
                />
              </Helmet>
              <div className="overflow-x-clip">
                <div className="bg-white">
                  <h2 className="text-2xl text-blue-950">
                    Domain name has expired! <br />
                    Kindly renew the domain name. Thank You
                  </h2>
                  {/* <NavBar />
                  <Home />
                  <About />
                  <Project />
                  <Testimonials />
                  <Team />
                  <CTA />
                  <Contact />
                  <Newsletter />
                  <FAQ />
                  <Footer /> */}
                </div>
              </div>
            </>
          }
        />

        <Route
          path="*"
          element={
            <>
              <Helmet>
                <title>
                  404 - Page Not Found | ADUNNI SAVE A GIRL FOUNDATION
                </title>
                <meta
                  name="description"
                  content="The page you're looking for cannot be found. Return to Adunni Save a Girl Foundation's homepage."
                />
                <meta name="robots" content="noindex, follow" />
              </Helmet>
              <div className="text-5xl justify-center items-center flex min-h-screen">
                404 Not Found
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
