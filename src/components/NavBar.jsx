import { useState, useEffect } from "react";
import Logo from "../assets/logoAdunni.jpg";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create a mapping object for special cases
  const idMapping = {
    'About Us': 'about',
    'Home': 'home',
    'Programs': 'programs',
    'Testimonials': 'testimonials',
    'Team': 'team',
    'Donate': 'donate',
    'Contact': 'contact',
    'FAQ': 'faq'
  };

  const getHref = (item) => {
    return `#${idMapping[item] || item.toLowerCase()}`;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg backdrop-blur-sm bg-opacity-95' 
        : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo with gradient border */}
          <div className="p-0.5 rounded-lg bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
            <img src={Logo} alt="LOGO" className="size-12 rounded-lg" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About Us', 'Programs', 'Testimonials', 'Team', 'Donate', 'Contact'].map((item) => (
              <a
                key={item}
                href={getHref(item)}
                className="relative group"
              >
                <span className="text-[#7e3710] hover:text-amber-500 transition-colors duration-200">
                  {item}
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 w-full bg-gradient-to-r from-orange-400 to-amber-400 transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`block h-0.5 w-full bg-gradient-to-r from-orange-400 to-amber-400 transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block h-0.5 w-full bg-gradient-to-r from-orange-400 to-amber-400 transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 max-h-96 visible'
            : 'opacity-0 max-h-0 invisible'
        }`}>
          <div className="py-4 space-y-2">
            {['Home', 'About Us', 'Programs', 'Testimonials', 'Team', 'Donate', 'Contact', 'Faq'].map((item) => (
              <a
                key={item}
                href={getHref(item)}
                className="block py-2 px-4 text-[#7e3710] hover:bg-gradient-to-r hover:from-orange-700 hover:to-amber-700 rounded transition-all duration-200 hover:text-amber-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;