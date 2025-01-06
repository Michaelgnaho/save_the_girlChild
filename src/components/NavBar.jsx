import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#7e3710] p-4 shadow-md slide-top">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-clementine-500-bg">ADUNNI</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-[#fd8a12] hover:text-clementine-600-bg">Home</a>
          <a href="#about" className="text-[#fd8a12] hover:text-clementine-600-bg">About Us</a>
          <a href="#programs" className="text-[#fd8a12] hover:text-clementine-600-bg">Programs</a>
          <a href="#testimonials" className="text-[#fd8a12] hover:text-clementine-600-bg">Testimonials</a>
          <a href="#team" className="text-[#fd8a12] hover:text-clementine-600-bg">Team</a>
          <a href="#donate" className="text-[#fd8a12] hover:text-clementine-600-bg">Donate</a>
          <a href="#contact" className="text-[#fd8a12] hover:text-clementine-600-bg">Contact</a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-clementine-500-bg focus:outline-none">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-clementine-100-bg p-4 rounded-lg shadow-lg">
          <a href="#home" className="block text-clementine-500-bg hover:text-clementine-600-bg py-2">Home</a>
          <a href="#about" className="block text-clementine-500-bg hover:text-clementine-600-bg py-2">About Us</a>
          <a href="#programs" className="block text-clementine-500-bg hover:text-clementine-600-bg py-2">Programs</a>
          <a href="#testimonials" className="block text-clementine-500-bg hover:text-clementine-600-bg py-2">Testimonials</a>
          <a href="#team" className="block text-clementine-500-bg hover:text-clementine-600-bg py-2">Team</a>
          <a href="#cta" className="block text-clementine-500-bg hover:text-clementine-600-bg py-2">Donate</a>
          <a href="#contact" className="block text-clementine-500-bg hover:text-clementine-600-bg py-2">Contact</a>
          <a href="#faq" className="block text-clementine-500-bg hover:text-clementine-600-bg py-2">FAQ</a>

        </div>
      )}
    </nav>
  );
}

export default NavBar;
