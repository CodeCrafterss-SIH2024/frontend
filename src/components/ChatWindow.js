// components/ChatWindow.js
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ChatWindow = ({ lawyer1, lawyer2, messages, addMessage }) => {
  const [input, setInput] = useState("");
  const [currentLawyer, setCurrentLawyer] = useState(lawyer1);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addMessage({ text: input, sender: currentLawyer });
      setInput("");
      setCurrentLawyer(currentLawyer === lawyer1 ? lawyer2 : lawyer1);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4 text-center">
        Conversation between {lawyer1} and {lawyer2}
      </h3>
      <div className="h-64 overflow-y-auto bg-gray-100 p-3 rounded-lg mb-4 border border-gray-200">
        {messages.map((message, index) => (
          <p
            key={index}
            className={`mb-2 ${message.sender === lawyer1 ? "text-blue-600" : "text-green-600"}`}
          >
            <strong>{message.sender}:</strong> {message.text}
          </p>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex items-center space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message from ${currentLawyer}`}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-r-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
        >
          Send
          <FaArrowRight className="ml-2" />
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
