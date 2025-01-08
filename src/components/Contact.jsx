import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const emailBody = `
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
      `;
      window.location.href = `mailto:adunnisaveagirlfoundation@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
      
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const contactInfo = [
    {
      title: "Email",
      content: "adunnisaveagirlfoundation@gmail.com",
      link: "mailto:adunnisaveagirlfoundation@gmail.com"
    },
    {
      title: "Phone",
      content: "+2347013805937 | +2347068069737",
      link: "tel:+2347013805937"
    },
    {
      title: "Address",
      content: "7, Church Street, Igbogbo, Ikorodu, Lagos, Nigeria.",
      link: "https://maps.google.com/?q=7,Church Street,Igbogbo,Ikorodu,Lagos,Nigeria"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-8 sm:py-16 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
            We're here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="space-y-4 sm:space-y-8 order-2 md:order-1"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-orange-500 mb-2">{info.title}</h3>
                <a
                  href={info.link}
                  className="text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors duration-300 break-words"
                >
                  {info.content}
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="bg-white p-4 sm:p-8 rounded-lg shadow-lg order-1 md:order-2"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {[
                { name: 'name', type: 'text', label: 'Your Name' },
                { name: 'email', type: 'email', label: 'Your Email' },
                { name: 'message', type: 'textarea', label: 'Your Message' }
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                >
                  <label className="block text-gray-700 text-sm sm:text-base font-medium mb-1 sm:mb-2">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300 text-sm sm:text-base"
                      rows="4"
                      required
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300 text-sm sm:text-base"
                      required
                    />
                  )}
                </motion.div>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
                type="submit"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;