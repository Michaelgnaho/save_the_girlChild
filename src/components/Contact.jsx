import { useState } from 'react';
import Qr from './Qr';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      // Clear form after successful submission
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="max-w-screen mx-auto p-2 slide-right" id="contact">
      <h2 className="text-2xl font-bold headingText mb-6">Contact Us</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#ffe0a9] p-2 rounded-lg shadow-lg">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-[#fd8a12]">Contact Information</h3>
            <p className="text-gray-700 mt-2">
              Email: adunnisaveagirlfoundation@gmail.com
            </p>
            <p className="text-gray-700 mt-2">
              Phone: +2347013805937 OR +2347068069737
            </p>
            <p className="text-gray-700 mt-2">
              Address: 7, Church Street, Igbogbo, Ikorodu, Lagos, Nigeria.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fd8a12] focus:border-transparent"
                required 
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fd8a12] focus:border-transparent"
                required 
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fd8a12] focus:border-transparent"
                rows="4"
                required 
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#fd8a12] text-white p-2 rounded-lg hover:bg-[#e96c08] transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* <div>
          <Qr />
        </div> */}
      </div>

      <div className="mt-6 flex justify-center space-x-4">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#fd8a12] hover:text-[#e96c08] transition duration-300 hover:scale-110"
        >
          <i className="fab fa-facebook-f text-2xl"></i>
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#fd8a12] hover:text-[#e96c08] transition duration-300 hover:scale-110"
        >
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#fd8a12] hover:text-[#e96c08] transition duration-300 hover:scale-110"
        >
          <i className="fab fa-instagram text-2xl"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;