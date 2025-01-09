// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import logo from '../assets/logoAdunni.jpg';

// // Modal Component
// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.95, opacity: 0 }}
//         className="bg-white rounded-lg p-6 w-full max-w-md"
//         onClick={e => e.stopPropagation()}
//       >
//         {children}
//       </motion.div>
//     </motion.div>
//   );
// };

// // Volunteer Form Component
// const VolunteerForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     interests: '',
//     availability: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Create email body
//     const emailBody = `
//       Name: ${formData.name}
//       Email: ${formData.email}
//       Phone: ${formData.phone}
//       Interests: ${formData.interests}
//       Availability: ${formData.availability}
//     `;

//     // Create mailto link
//     const mailtoLink = `mailto:adunnisaveagirlfoundation@gmail.com?subject=New Volunteer Application&body=${encodeURIComponent(emailBody)}`;
    
//     // Open email client
//     window.location.href = mailtoLink;
    
//     setSubmitStatus('success');
//     setIsSubmitting(false);
//     setTimeout(onClose, 2000);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <h2 className="text-2xl font-bold text-center mb-4">Volunteer Application</h2>
      
//       <div>
//         <label className="block text-gray-700 mb-1">Name</label>
//         <input
//           type="text"
//           required
//           className="w-full p-2 border rounded"
//           value={formData.name}
//           onChange={(e) => setFormData({...formData, name: e.target.value})}
//         />
//       </div>

//       <div>
//         <label className="block text-gray-700 mb-1">Email</label>
//         <input
//           type="email"
//           required
//           className="w-full p-2 border rounded"
//           value={formData.email}
//           onChange={(e) => setFormData({...formData, email: e.target.value})}
//         />
//       </div>

//       <div>
//         <label className="block text-gray-700 mb-1">Phone</label>
//         <input
//           type="tel"
//           required
//           className="w-full p-2 border rounded"
//           value={formData.phone}
//           onChange={(e) => setFormData({...formData, phone: e.target.value})}
//         />
//       </div>

//       <div>
//         <label className="block text-gray-700 mb-1">Areas of Interest</label>
//         <textarea
//           required
//           className="w-full p-2 border rounded"
//           value={formData.interests}
//           onChange={(e) => setFormData({...formData, interests: e.target.value})}
//         />
//       </div>

//       <div>
//         <label className="block text-gray-700 mb-1">Availability</label>
//         <textarea
//           required
//           className="w-full p-2 border rounded"
//           value={formData.availability}
//           onChange={(e) => setFormData({...formData, availability: e.target.value})}
//           placeholder="Please specify your available days and times"
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="w-full bg-[#fd8a12] text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-[#e67b0d]"
//       >
//         {isSubmitting ? 'Submitting...' : 'Submit Application'}
//       </button>

//       {submitStatus === 'success' && (
//         <p className="text-green-600 text-center">Application submitted successfully!</p>
//       )}
//     </form>
//   );
// };

// // Main CTA Component
// function CTA() {
//   const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  
//   const handleDonate = () => {
//     // List of donation options
//     const donationOptions = [
//       { name: 'PayPal', url: 'https://paypal.me/YourPayPalLink' }, // Replace with your PayPal link
//       { name: 'Email for Bank Transfer', action: () => {
//         window.location.href = `mailto:adunnisaveagirlfoundation@gmail.com?subject=Donation Inquiry&body=I would like to make a donation. Please provide the bank transfer details.`;
//       }}
//     ];

//     // For now, we'll directly trigger the email option
//     donationOptions[1].action();
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       className="bg-white p-8 rounded-lg shadow-lg text-center max-w-screen-md mx-auto m-8"
//       id="donate"
//     >
//       {/* Logo Section */}
//       <motion.div
//         initial={{ scale: 0.9 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1 }}
//         className="flex justify-center mb-6"
//       >
//         <img src={logo} alt="Foundation Logo" className="w-32 h-32 object-contain" />
//       </motion.div>

//       {/* Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 1 }}
//         className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-4"
//       >
//         Save the Girl Child Foundation
//       </motion.h2>

//       {/* Description */}
//       <motion.p
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 1 }}
//         className="text-gray-700 mb-6"
//       >
//         Your contributions can make a significant impact in the lives of young girls. Join us in our mission to provide education, healthcare, and a brighter future for every girl child.
//       </motion.p>

//       {/* Buttons */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.9, duration: 1 }}
//         className="flex justify-center space-x-4"
//       >
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={handleDonate}
//           className="bg-[#fd8a12] text-white font-bold py-2 px-4 rounded transition duration-300 headingText"
//         >
//           Donate Now
//         </motion.button>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => setIsVolunteerModalOpen(true)}
//           className="bg-[#fd8a12] text-white font-bold py-2 px-4 rounded transition duration-300 headingText"
//         >
//           Volunteer
//         </motion.button>
//       </motion.div>

//       {/* Volunteer Modal */}
//       <AnimatePresence>
//         <Modal
//           isOpen={isVolunteerModalOpen}
//           onClose={() => setIsVolunteerModalOpen(false)}
//         >
//           <VolunteerForm onClose={() => setIsVolunteerModalOpen(false)} />
//         </Modal>
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// export default CTA;





import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logoAdunni.jpg';

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-lg p-6 w-full max-w-md"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// Donation Details Component
const DonationDetails = ({ onClose }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">Bank Transfer Details</h2>
      
      <div className="space-y-4 bg-orange-50 p-6 rounded-lg">
        <div>
          <p className="text-gray-600 font-medium">Account Name:</p>
          <p className="text-gray-800 font-bold">Save A Girl Child</p>
        </div>
        
        <div>
          <p className="text-gray-600 font-medium">Account Number:</p>
          <p className="text-gray-800 font-bold">2345678908</p>
        </div>
        
        <div>
          <p className="text-gray-600 font-medium">Bank:</p>
          <p className="text-gray-800 font-bold">First Bank</p>
        </div>
      </div>

      <div className="text-center space-y-4">
        <p className="text-orange-600 font-medium">Thank you for your generous support!</p>
        <button
          onClick={onClose}
          className="bg-[#fd8a12] text-white font-bold py-2 px-6 rounded transition duration-300 hover:bg-[#e67b0d]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Volunteer Form Component remains the same
const VolunteerForm = ({ onClose }) => {
	const [formData, setFormData] = useState({
	  name: '',
	  email: '',
	  phone: '',
	  interests: '',
	  availability: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);
  
	const handleSubmit = async (e) => {
	  e.preventDefault();
	  setIsSubmitting(true);
  
	  // Create email body
	  const emailBody = `
		Name: ${formData.name}
		Email: ${formData.email}
		Phone: ${formData.phone}
		Interests: ${formData.interests}
		Availability: ${formData.availability}
	  `;
  
	  // Create mailto link
	  const mailtoLink = `mailto:adunnisaveagirlfoundation@gmail.com?subject=New Volunteer Application&body=${encodeURIComponent(emailBody)}`;
	  
	  // Open email client
	  window.location.href = mailtoLink;
	  
	  setSubmitStatus('success');
	  setIsSubmitting(false);
	  setTimeout(onClose, 2000);
	};
  
	return (
	  <form onSubmit={handleSubmit} className="space-y-4">
		<h2 className="text-2xl font-bold text-center mb-4">Volunteer Application</h2>
		
		<div>
		  <label className="block text-gray-700 mb-1">Name</label>
		  <input
			type="text"
			required
			className="w-full p-2 border rounded"
			value={formData.name}
			onChange={(e) => setFormData({...formData, name: e.target.value})}
		  />
		</div>
  
		<div>
		  <label className="block text-gray-700 mb-1">Email</label>
		  <input
			type="email"
			required
			className="w-full p-2 border rounded"
			value={formData.email}
			onChange={(e) => setFormData({...formData, email: e.target.value})}
		  />
		</div>
  
		<div>
		  <label className="block text-gray-700 mb-1">Phone</label>
		  <input
			type="tel"
			required
			className="w-full p-2 border rounded"
			value={formData.phone}
			onChange={(e) => setFormData({...formData, phone: e.target.value})}
		  />
		</div>
  
		<div>
		  <label className="block text-gray-700 mb-1">Areas of Interest</label>
		  <textarea
			required
			className="w-full p-2 border rounded"
			value={formData.interests}
			onChange={(e) => setFormData({...formData, interests: e.target.value})}
		  />
		</div>
  
		<div>
		  <label className="block text-gray-700 mb-1">Availability</label>
		  <textarea
			required
			className="w-full p-2 border rounded"
			value={formData.availability}
			onChange={(e) => setFormData({...formData, availability: e.target.value})}
			placeholder="Please specify your available days and times"
		  />
		</div>
  
		<button
		  type="submit"
		  disabled={isSubmitting}
		  className="w-full bg-[#fd8a12] text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-[#e67b0d]"
		>
		  {isSubmitting ? 'Submitting...' : 'Submit Application'}
		</button>
  
		{submitStatus === 'success' && (
		  <p className="text-green-600 text-center">Application submitted successfully!</p>
		)}
	  </form>
	);
  };

// Main CTA Component
function CTA() {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  
  const handleDonate = () => {
    setIsDonateModalOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-white p-8 rounded-lg shadow-lg text-center max-w-screen-md mx-auto m-8"
      id="donate"
    >
      {/* Logo Section */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center mb-6"
      >
        <img src={logo} alt="Foundation Logo" className="w-32 h-32 object-contain" />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-4"
      >
        Save the Girl Child Foundation
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-gray-700 mb-6"
      >
        Your contributions can make a significant impact in the lives of young girls. Join us in our mission to provide education, healthcare, and a brighter future for every girl child.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="flex justify-center space-x-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDonate}
          className="bg-[#fd8a12] text-white font-bold py-2 px-4 rounded transition duration-300 headingText"
        >
          Donate Now
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsVolunteerModalOpen(true)}
          className="bg-[#fd8a12] text-white font-bold py-2 px-4 rounded transition duration-300 headingText"
        >
          Volunteer
        </motion.button>
      </motion.div>

      {/* Donation Modal */}
      <AnimatePresence>
        <Modal
          isOpen={isDonateModalOpen}
          onClose={() => setIsDonateModalOpen(false)}
        >
          <DonationDetails onClose={() => setIsDonateModalOpen(false)} />
        </Modal>
      </AnimatePresence>

      {/* Volunteer Modal */}
      <AnimatePresence>
        <Modal
          isOpen={isVolunteerModalOpen}
          onClose={() => setIsVolunteerModalOpen(false)}
        >
          <VolunteerForm onClose={() => setIsVolunteerModalOpen(false)} />
        </Modal>
      </AnimatePresence>
    </motion.div>
  );
}

export default CTA;