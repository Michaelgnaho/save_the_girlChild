import React from 'react';
import { QRCodeSVG } from 'qrcode.react';  // Changed import
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import Profile from "../assets/comfor_olafare.jpeg"

const Qr = () => {
  const qrData = `
    Name: SEN. OLAFARE COMFORT OLADUNNI (TheAdunni)
    Numbers: 07013805937
    Email: comfortoladunni0@gmail.com
    Company: CEO, Dunnies Signature Limited; CEO, Adunni Save A Girl Foundation; Founder, The Adunni Mentorship Hub; Founder, TheAdunni Media Agency
    Profession: Communications Expert, Digital Creator, Gender Equality Advocate, Public Speaker, Youth Empowerment Advocate, Environmental Advocate, Social Media Manager, Community Developer
    Address: 7, Church Street, Igbogbo, Ikorodu, Lagos
  `.trim();

  return (
    <div className="max-w-sm mx-auto slide-right bg-white rounded-lg shadow-lg overflow-hidden p-6 text-center my-8">
      <img 
        src={Profile}// Updated to use public path
        alt="Sen. Olafare Comfort Oladunni" 
        className="w-32 h-32 mx-auto rounded-full border-4 border-gray-200 object-cover"
      />
      <h2 className="text-2xl font-bold text-gray-800 mt-4">SEN. OLAFARE COMFORT OLADUNNI</h2>
      <p className="text-sm text-gray-600 mb-4">(TheAdunni)</p>
      
      <div className="bg-white p-2 rounded-lg">
        <QRCodeSVG 
          value={qrData}
          size={256}
          level="H"
          includeMargin={true}
          className="mx-auto"
        />
      </div>
      
      <div className="flex justify-center space-x-6 mt-4">
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaInstagram className="text-pink-500 hover:text-pink-600" size={30} />
        </a>
        <a 
          href="https://www.linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaLinkedin className="text-blue-700 hover:text-blue-800" size={30} />
        </a>
        <a 
          href="https://www.facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaFacebook className="text-blue-600 hover:text-blue-700" size={30} />
        </a>
        <a 
          href="https://www.twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaTwitter className="text-blue-400 hover:text-blue-500" size={30} />
        </a>
      </div>
    </div>
  );
};

export default Qr;
