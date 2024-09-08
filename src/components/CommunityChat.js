// CommunityChat.js
import React, { useState } from 'react';
import background1 from '../img/background1.png';
import background2 from '../img/background2.jpg';
import comlogo from '../img/logo3.png';

const CommunityChat = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (username && message) {
      setMessages([...messages, { username, text: message }]);
      setUsername('');
      setMessage('');
    } else {
      alert('Please enter both a username and a message.');
    }
  };

  const handleReply = (index) => {
    const replyText = prompt('Enter your reply:');
    if (replyText) {
      const updatedMessages = [...messages];
      updatedMessages[index].reply = replyText;
      setMessages(updatedMessages);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#e0aaff] overflow-hidden">
      
      {/* Header Section */}
      <header className="bg-[#9d4edd] text-white p-4 flex items-center">
        <img src={comlogo} alt="Community Logo" className="w-20 mr-4" />
        <h1 className="text-5xl font-bold">Community Chat</h1>
      </header>

      {/* Background Images */}
      <div className="absolute inset-0 flex justify-between opacity-80">
        <img src={background2} alt="Background 1" className="h-1/2 mt-[10%] ml-[4%] object-cover rounded-md shadow-md" />
        <img src={background1} alt="Background 2" className="h-2/5 mt-[30%] mr-10 object-cover rounded-md shadow-md" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto mt-4">
        <h2 className="text-center text-3xl font-semibold mb-6 ml-8 text-black">Join the Conversation, Join the Community</h2>

        {/* Chat Section */}
        {/* bg-white/80 rounded-lg shadow-lg backdrop-blur-lg border border-white/30 */}
        <section className="p-6 ml-[18%] bg-white bg-opacity-20 rounded-xl shadow-lg backdrop-blur-sm border border-white border-opacity-30 w-[600px]">
          <div className="max-h-96 overflow-y-auto mb-4 p-4 bg-gray-100 rounded-lg shadow-inner">
            {messages.length === 0 ? (
              <p className="text-center text-gray-600">No messages yet. Start the conversation!</p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="mb-4 p-2 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <strong>{msg.username}</strong>
                    {msg.reply && <span className="text-gray-500 text-sm">Replied</span>}
                  </div>
                  <p>{msg.text}</p>
                  {msg.reply && <div className="mt-2 text-gray-600">Reply: {msg.reply}</div>}
                  <button
                    onClick={() => handleReply(index)}
                    className="mt-2 px-4 py-1 bg-[#7b2cbf] text-white rounded hover:bg-[#5a189a] focus:outline-none focus:ring-2 focus:ring-[#7b2cbf] focus:ring-opacity-50"
                  >
                    Reply
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full p-2 mb-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9d4edd] focus:border-transparent"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg shadow-sm resize-y focus:outline-none focus:ring-2 focus:ring-[#9d4edd] focus:border-transparent"
            />
            <button
              onClick={handleSend}
              className="w-full p-2 bg-[#7b2cbf] text-white rounded-lg shadow-sm hover:bg-[#5a189a] focus:outline-none focus:ring-2 focus:ring-[#7b2cbf] focus:ring-opacity-50"
            >
              Send
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunityChat;
