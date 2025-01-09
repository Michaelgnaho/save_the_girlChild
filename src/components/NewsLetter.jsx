import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Open Mailchimp signup in a new tab
    const mailchimpUrl = "https://gmail.us22.list-manage.com/subscribe/post?u=294f1a06652101be2e476c3f3&amp;id=89b53616cd&amp;f_id=0040dbe1f0"; // You'll get this from Mailchimp
    window.open(mailchimpUrl, '_blank');
    
    // Clear the form
    setEmail('');
    setStatus('success');
  };

  return (
    <div className="bg-gradient-to-b from-white to-orange-50 py-16 px-4" id="newsletter">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-4">
                Stay Updated with Our Mission
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-600">
                Subscribe to our newsletter and join our journey of empowering young girls.
              </p>
            </div>

            {/* Mailchimp Embedded Form */}
            <div id="mc_embed_signup" className="max-w-md mx-auto">
              <form 
                action="YOUR_MAILCHIMP_FORM_URL" 
                method="post" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                className="validate" 
                target="_blank"
              >
                <div className="relative">
                  <input
                    type="email"
                    name="EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-full border border-orange-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300"
                    required
                  />
                  {/* Hidden field to prevent bot signups */}
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input type="text" name="b_XXXXX" tabIndex="-1" />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    name="subscribe"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </form>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-center mt-4"
              >
                Thank you for subscribing! Please check your email to confirm.
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;