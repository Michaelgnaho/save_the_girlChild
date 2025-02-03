import React from "react";
import Logo from "../assets/logoAdunni.jpg";

function Footer() {
  return (
    <footer
      className="bg-white-300 shadow-lg border-t-2 text-[#7e3710] py-12"
      id="footer"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center md:max-w-4xl p-4 mb-8 md:mb-0 space-y-6 md:space-y-0">
            <img
              src={Logo}
              alt="Save the Girl Child Foundation logo with a silhouette of a girl and the foundation's name"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 md:mb-0"
            />
            <p className="text-center md:text-left text-sm md:text-base mx-4 md:mx-8">
              Our mission is to empower and educate young girls in Nigeria,
              providing them with the resources and support they need to thrive.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="about"
              className="text-[#fd8a12] hover:text-[#fea639] transition duration-300 text-lg font-medium"
            >
              About Us
            </a>
            <a
              href="programs"
              className="text-[#fd8a12] hover:text-[#fea639] transition duration-300 text-lg font-medium"
            >
              Donate
            </a>
            <a
              href="cta"
              className="text-[#fd8a12] hover:text-[#fea639] transition duration-300 text-lg font-medium"
            >
              Programs
            </a>
            <a
              href="contact"
              className="text-[#fd8a12] hover:text-[#fea639] transition duration-300 text-lg font-medium"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fd8a12] hover:text-[#fea639] transition duration-300 text-2xl md:text-3xl"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fd8a12] hover:text-[#fea639] transition duration-300 text-2xl md:text-3xl"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/adunnisaveagirlfoundation/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fd8a12] hover:text-[#fea639] transition duration-300 text-2xl md:text-3xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="mt-6 text-center text-sm md:text-base">
          <a
            href="#"
            className="text-[#fd8a12] hover:text-[#fea639] transition duration-300"
          >
            Terms of Use
          </a>{" "}
          |
          <a
            href="#"
            className="text-[#fd8a12] hover:text-[#fea639] transition duration-300"
          >
            {" "}
            Privacy Policy
          </a>
          <p className="mt-2">
            &copy; 2025 Adunni Save A Girl Foundation.. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
