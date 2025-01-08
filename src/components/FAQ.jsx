import { useState } from "react";
import { motion } from "framer-motion";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border-b border-gray-200 py-6"
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-[#fea639] text-lg font-medium">{question}</h3>
        <motion.i
          className={`fas fa-chevron-${isOpen ? "up" : "down"} text-[#e96c08]`}
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
        ></motion.i>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-4 text-gray-700 text-sm"
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

function FAQ() {
  const faqs = [
    {
      question: "What is the mission of the Save  A Girl  Foundation?",
      answer:
        "Our mission is to empower and educate young girls in Nigeria, providing them with the resources and support they need to thrive.",
    },
    {
      question: "How can I donate to the foundation?",
      answer:
        "You can donate through our website by clicking on the 'Donate' button and following the instructions. We accept various forms of payment.",
    },
    {
      question: "Can I volunteer with the foundation?",
      answer:
        "Yes, we welcome volunteers! Please  click  on vounteer button on our page",
    },
    {
      question: "Where does the foundation operate?",
      answer:
        "We primarily operate in Nigeria, focusing on rural and underserved communities where girls are most in need of support.",
    },
    {
      question: "How are donations used?",
      answer:
        "Donations are used to fund educational programs, provide scholarships, and support health and wellness initiatives for young girls.",
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Yes, all donations to the Save the Girl Child Foundation are tax-deductible to the extent allowed by law.",
    },
    {
      question: "How can I stay updated on the foundation's activities?",
      answer:
        "You can subscribe to our newsletter, follow us on social media, and regularly check our website for updates and news.",
    },
    {
      question: "What impact has the foundation made so far?",
      answer:
        "Since our inception, we have helped thousands of girls gain access to education, healthcare, and essential resources, significantly improving their quality of life.",
    },
    {
      question: "How can I contact the foundation?",
      answer:
        "You can contact us via email at adunnisaveagirlfoundation@gmail.com  or through the contact form on our website.",
    },
    {
      question: "Are there any upcoming events?",
      answer:
        "Yes, we regularly host events and fundraisers. Please check our 'Events' page for the latest information on upcoming events.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-b from-white to-orange-50" id="faq">
      <motion.h2
        className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQ;
