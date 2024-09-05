// src/components/Chatbot.js
import React, { useState } from 'react';
import chatbotData from '../chatbotData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    const userMessage = input.trim();
    if (userMessage) {
      setChat([...chat, { type: 'user', text: userMessage }]);

      const matchedQuestion = chatbotData.questions.find(q =>
        q.question.toLowerCase().includes(userMessage.toLowerCase())
      );

      const botMessage = matchedQuestion
        ? matchedQuestion.answer
        : "Sorry, I don't have an answer for that.";

      setChat([...chat, { type: 'user', text: userMessage }, { type: 'bot', text: botMessage }]);
      setInput('');
    }
  };

  return (
    <div>
      <button onClick={toggleChatbot} className="fixed bottom-4 right-4 bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition">
        <FontAwesomeIcon icon={faComments} />
      </button>
      {isOpen && (
        <div className="fixed bottom-20 right-4 bg-white border border-gray-300 rounded-lg shadow-lg w-80 h-96 flex flex-col">
          <div className="bg-teal-700 text-white p-4 rounded-t-lg">
            <h3 className="text-lg font-semibold">Chat with us</h3>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {chat.map((message, index) => (
              <div key={index} className={`mb-2 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-2 rounded-lg ${message.type === 'user' ? 'bg-teal-500 text-white' : 'bg-teal-100 text-gray-800'}`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-gray-100 rounded-b-lg">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Type your message..."
              value={input}
              onChange={handleInputChange}
            />
            <button onClick={handleSend} className="mt-2 w-full bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700 transition">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

