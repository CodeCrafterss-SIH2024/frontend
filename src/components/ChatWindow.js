
import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaUser } from "react-icons/fa";
import leftimage from "../img/leftimg.png";
import rightimage from "../img/rightimg.png";

const ChatWindow = ({ lawyer1, lawyer2, messages, addMessage }) => {
  const [input, setInput] = useState("");
  const [currentLawyer, setCurrentLawyer] = useState(lawyer1);
  const [typingStatus, setTypingStatus] = useState(""); // Track typing status
  const chatEndRef = useRef(null);
  const typingRef = useRef(null);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addMessage({ text: input, sender: currentLawyer });
      setInput("");
      setTypingStatus(""); // Clear typing status after sending message
      setCurrentLawyer(currentLawyer === lawyer1 ? lawyer2 : lawyer1);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    // Set typing status when input is not empty
    if (e.target.value.trim()) {
      setTypingStatus(`Typing...`);
    } else {
      setTypingStatus("");
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    typingRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [typingStatus]);

  return (
    <div className="flex items-start justify-center gap-20">
      {/* Left Image (For Lawyer 1) */}
      <div
        className={`hidden md:block transition-opacity duration-500 ${
          currentLawyer === lawyer1 && typingStatus ? "opacity-100" : "opacity-50"
        }`}
      >
        <img
          src={leftimage}
          alt="Lawyer 1"
          className="w-[200px] h-[300px] shadow-lg mt-[100px]"
        />
      </div>

      {/* Chat Box */}
      <div className="p-4 bg-white rounded-lg shadow-md max-w-md w-full mt-5 relative">
        <h6 className="text-3xl font-semibold mb-4 text-center">
          Conversation between {lawyer1} and {lawyer2}
        </h6>

        <div className="h-64 overflow-y-auto bg-gray-100 p-3 rounded-lg mb-4 border border-gray-200">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex mb-2 ${
                message.sender === lawyer1 ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-center ${
                  message.sender === lawyer1
                    ? "bg-blue-200 text-blue-600"
                    : "bg-green-200 text-green-600"
                } p-2 rounded-lg max-w-xs`}
              >
                <FaUser className="mr-2" />
                <p>
                  <strong>{message.sender}:</strong> {message.text}
                </p>
              </div>
            </div>
          ))}

          {/* Ensure typing status is not cut off */}
          <div
            ref={typingRef}
            className={`flex mb-2 ${
              currentLawyer === lawyer1 ? "justify-end" : "justify-start"
            }`}
          >
            {typingStatus && (
              <div className="flex items-center bg-gray-200 text-gray-600 p-2 rounded-lg max-w-xs">
                <FaUser className="mr-2" />
                <p>{typingStatus}</p>
              </div>
            )}
          </div>

          {/* Scroll reference */}
          <div ref={chatEndRef} />
        </div>

        {/* Message input form */}
        <form onSubmit={handleSend} className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
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

      {/* Right Image (For Lawyer 2) */}
      <div
        className={`hidden md:block transition-opacity duration-500 ${
          currentLawyer === lawyer2 && typingStatus ? "opacity-100" : "opacity-50"
        }`}
      >
        <img
          src={rightimage}
          alt="Lawyer 2"
          className="w-[200px] h-[300px] shadow-lg mt-[100px]"
        />
      </div>
    </div>
  );
};

export default ChatWindow;
