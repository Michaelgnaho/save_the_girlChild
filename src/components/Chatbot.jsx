//

import React, { useState } from "react";
import { X } from "lucide-react";

const ComfortChatbot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setIsExpanded(false);
    }
  };

  return (
    isOpen && (
      <div className="fixed bottom-4 right-2 z-50 ">
        <div
          className={`w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-lg shadow-lg border transition-all duration-300 ${
            isExpanded ? "max-h-[80vh]" : "max-h-16"
          }`}
        >
          {/* Header */}
          <div
            className={`bg-orange-500 text-white p-3 flex justify-between items-center rounded-t-lg cursor-pointer`}
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            <div className="flex items-center space-x-2">
              <img
                src="https://avatar.iran.liara.run/public/99"
                alt="Avatar of Sarah"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col">
                <div className="font-semibold">Sarah</div>
                <div className="text-[10px]">Hi, how can I help you?</div>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="text-white hover:text-gray-300"
            >
              <X size={16} />
            </button>
          </div>

          {/* Chat Content */}
          {isExpanded && (
            <div className="p-4 space-y-4 overflow-y-auto max-h-[60vh]">
              <div className="flex items-start space-x-3 justify-start">
                <img
                  src="https://avatar.iran.liara.run/public/99"
                  alt="Sarah"
                  className="w-8 h-8 rounded-full"
                />
                <div className="p-3 rounded-lg max-w-[75%] bg-orange-50 text-gray-800">
                  <div className="font-medium mb-1">Sarah</div>
                  <div>
                    Hello! Would you like to get in touch with us? Click the
                    button below to go to our contact section.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Button */}
          {isExpanded && (
            <div className="border-t p-3 flex items-center pb-5 justify-center">
              <button
                onClick={scrollToContact}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Contact Us
              </button>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default ComfortChatbot;
