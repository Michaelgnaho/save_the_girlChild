import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="border-b border-gray-200 py-4">
          <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
          >
              <h3 className="text-[#fea639] text-lg font-medium">{question}</h3>
              <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} text-[#e96c08]`}></i>
          </div>
          {isOpen && (
              <div className="mt-2 text-gray-700">
                  <p>{answer}</p>
              </div>
          )}
      </div>
  );
};

function FAQ() {
  const faqs = [
      {
          question: "What is the mission of the Save the Girl Child Foundation?",
          answer: "Our mission is to empower and educate young girls in Nigeria, providing them with the resources and support they need to thrive."
      },
      {
          question: "How can I donate to the foundation?",
          answer: "You can donate through our website by clicking on the 'Donate' button and following the instructions. We accept various forms of payment."
      },
      {
          question: "Can I volunteer with the foundation?",
          answer: "Yes, we welcome volunteers! Please visit our 'Get Involved' page to learn more about volunteer opportunities and how to apply."
      },
      {
          question: "Where does the foundation operate?",
          answer: "We primarily operate in Nigeria, focusing on rural and underserved communities where girls are most in need of support."
      },
      {
          question: "How are donations used?",
          answer: "Donations are used to fund educational programs, provide scholarships, and support health and wellness initiatives for young girls."
      },
      {
          question: "Is my donation tax-deductible?",
          answer: "Yes, all donations to the Save the Girl Child Foundation are tax-deductible to the extent allowed by law."
      },
      {
          question: "How can I stay updated on the foundation's activities?",
          answer: "You can subscribe to our newsletter, follow us on social media, and regularly check our website for updates and news."
      },
      {
          question: "What impact has the foundation made so far?",
          answer: "Since our inception, we have helped thousands of girls gain access to education, healthcare, and essential resources, significantly improving their quality of life."
      },
      {
          question: "How can I contact the foundation?",
          answer: "You can contact us via email at info@savethegirlchildfoundation.org or through the contact form on our website."
      },
      {
          question: "Are there any upcoming events?",
          answer: "Yes, we regularly host events and fundraisers. Please check our 'Events' page for the latest information on upcoming events."
      }
  ];

  return (
      <div className="max-w-3xl slide-right mx-auto p-6" id="faq">
          <h2 className="text-2xl font-bold headingText  mb-6">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
      </div>
  );
};


export default FAQ