import React, { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

const ComfortChatbot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi, I'm Sarah. How can I assist you today?",
      sender: "bot",
      avatar: "https://avatar.iran.liara.run/public/99",
      name: "Sarah",
    },
  ]);

  const foundationFAQs = [
    {
      keywords: ["education", "school", "learn"],
      response:
        "Our education programs focus on providing quality learning resources for girls in Nigeria. We believe every girl deserves access to education that empowers her future.",
    },
    {
      keywords: ["donate", "support", "help"],
      response:
        "Thank you for your interest in supporting our mission! We accept donations that directly fund educational resources, healthcare, and empowerment programs for girls. Would you like information on how to contribute?",
    },
    {
      keywords: ["healthcare", "health", "medical"],
      response:
        "We provide essential healthcare services to girls in underserved and rural areas, ensuring their well-being and supporting their overall growth and development.",
    },
    {
      keywords: ["volunteer", "help", "join"],
      response:
        "We welcome passionate volunteers who want to make a difference in girls' lives! We have various opportunities for mentorship, skill sharing, and community support.",
    },
    {
      keywords: ["mission", "goal", "purpose"],
      response:
        "Our mission is to empower young girls in Nigeria by providing education, healthcare, and skills development. We aim to break barriers and help girls achieve their full potential.",
    },
  ];

  const findBotResponse = (userMessage) => {
    const lowercaseMessage = userMessage.toLowerCase();

    const matchedResponse = foundationFAQs.find((faq) =>
      faq.keywords.some((keyword) => lowercaseMessage.includes(keyword))
    );

    return matchedResponse
      ? matchedResponse.response
      : "I'm here to help! Would you like to know more about our foundation's work in education, healthcare, or empowerment?";
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      text: message,
      sender: "user",
    };

    setMessages((prev) => [...prev, newUserMessage]);

    const botResponse = findBotResponse(message);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 2,
          text: botResponse,
          sender: "bot",
          avatar: "https://avatar.iran.liara.run/public/99",
          name: "Sarah",
        },
      ]);
    }, 500);

    setMessage("");
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="fixed bottom-4 right-2 z-50 overflow-hidden">
        <div
          className={`w-48 ${
            isExpanded ? "max-h-[500px]" : "max-h-16"
          } bg-white rounded-lg shadow-lg border transition-all duration-300`}
        >
          {/* Header */}
          <div
            className={`bg-orange-500 text-white p-3 flex justify-between items-center rounded-t-lg cursor-pointer ${
              isExpanded ? "rounded-b-none" : ""
            }`}
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
              onClick={handleClose}
              className={`text-white hover:text-gray-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            >
              <X size={16} />
            </button>
          </div>

          {/* Chat Content */}
          {isExpanded && (
            <div className="p-4 space-y-4 overflow-y-auto h-[400px]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start space-x-3 ${
                    msg.sender === "bot" ? "justify-start" : "justify-end"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <img
                      src={msg.avatar}
                      alt={msg.name}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <div
                    className={`p-3 rounded-lg max-w-[70%] ${
                      msg.sender === "bot"
                        ? "bg-orange-50 text-gray-800"
                        : "bg-orange-500 text-white"
                    }`}
                  >
                    {msg.sender === "bot" && (
                      <div className="font-medium mb-1">{msg.name}</div>
                    )}
                    <div>{msg.text}</div>
                  </div>
                  {msg.sender === "user" && (
                    <img
                      src="https://avatar.iran.liara.run/public/job/operator/female"
                      alt="Avatar of Sarah"
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Message Input */}
          {isExpanded && (
            <div className="border-t p-3 flex items-center space-x-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-grow bg-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                onClick={handleSendMessage}
                className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600"
              >
                <Send size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default ComfortChatbot;
