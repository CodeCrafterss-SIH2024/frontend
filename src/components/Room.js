// import React, { useState, useEffect, useRef } from 'react';
// import { FaArrowRight, FaUser } from 'react-icons/fa';
// import NewHeader from './NewHeader';
// import leftImage from '../img/leftimg.png'; // Image for user 1
// import rightImage from '../img/rightimg.png'; // Image for user 2

// const Room = ({ roomPin, socket, name }) => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [typingStatus, setTypingStatus] = useState(''); // Track typing status
//   const messagesEndRef = useRef(null);
//   const typingRef = useRef(null);

//   useEffect(() => {
//     socket.on('receiveMessage', ({ user, message }) => {
//       setMessages((prev) => [...prev, { user, message }]);
//     });

//     socket.on('userJoined', (msg) => {
//       setMessages((prev) => [...prev, { user: 'system', message: msg }]);
//     });

//     socket.on('typing', (user) => {
//       setTypingStatus(user === name ? `Typing...` : ''); // Set typing status
//     });

//     return () => {
//       socket.off('receiveMessage');
//       socket.off('userJoined');
//       socket.off('typing');
//     };
//   }, [socket, name]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   useEffect(() => {
//     typingRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [typingStatus]);

//   const sendMessage = () => {
//     if (message.trim()) {
//       socket.emit('sendMessage', { roomPin, message, user: name });
//       setMessage('');
//       setTypingStatus('');
//     }
//   };

//   const handleInputChange = (e) => {
//     setMessage(e.target.value);
//     if (e.target.value.trim()) {
//       socket.emit('typing', name); // Emit typing event
//     } else {
//       socket.emit('typing', ''); // Clear typing status
//     }
//   };

//   return (
//     <div className='flex flex-col mt-[100px]'>
//     <div className="  flex flex-row items-center gap-4">
//       {/* <NewHeader /> */}

//       {/* Images */}
//       <div className="flex justify-between w-full mr-6 max-w-md mb-4">
//         <div
//           className={`hidden md:block transition-opacity duration-500 ${
//             typingStatus === 'Typing...' && name === 'user1' ? 'opacity-100' : 'opacity-50'
//           }`}
//         >
//           <img
//             src={leftImage}
//             alt="User 1"
//             className="w-[200px] h-[300px] shadow-lg"
//           />
//         </div>
//       </div>

//       {/* Chat Box */}
//       <div className="p-4 bg-white rounded-lg shadow-md max-w-md w-full mt-5 relative">
//         <h6 className="text-3xl font-semibold mb-4 text-center">
//           Room Pin: {roomPin}
//         </h6>

//         <div className="h-64 overflow-y-auto bg-gray-100 p-3 rounded-lg mb-4 border border-gray-200">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`flex mb-2 ${
//                 msg.user === 'system' ? 'justify-center' : msg.user === name ? 'justify-end' : 'justify-start'
//               }`}
//             >
//               <div
//                 className={`flex items-center p-2 rounded-lg max-w-xs ${
//                   msg.user === 'system'
//                     ? 'bg-gray-300 text-gray-600'
//                     : msg.user === name
//                     ? 'bg-green-200 text-green-600' // Message color for the current user
//                     : 'bg-blue-200 text-blue-600' // Message color for other users
//                 }`}
//               >
//                 <FaUser className="mr-2" />
//                 <p>
//                   <strong>{msg.user}:</strong> {msg.message}
//                 </p>
//               </div>
//             </div>
//           ))}

//           {/* Ensure typing status is not cut off */}
//           <div
//             ref={typingRef}
//             className={`flex mb-2 ${
//               typingStatus ? 'justify-center' : ''
//             }`}
//           >
//             {typingStatus && (
//               <div className="flex items-center bg-gray-200 text-gray-600 p-2 rounded-lg max-w-xs">
//                 <FaUser className="mr-2" />
//                 <p>{typingStatus}</p>
//               </div>
//             )}
//           </div>

//           {/* Scroll reference */}
//           <div ref={messagesEndRef} />
//         </div>

//         {/* Message input form */}
//         <div className="flex items-center space-x-2">
//           <input
//             type="text"
//             placeholder="Type a message"
//             value={message}
//             onChange={handleInputChange}
//             className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           <button
//             onClick={sendMessage}
//             className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-r-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
//           >
//             Send
//             <FaArrowRight className="ml-2" />
//           </button>
//         </div>
        
//       </div>


//       <div className="flex justify-between w-full max-w-md mb-4 ml-6">
//       <div
//           className={`hidden md:block transition-opacity duration-500 ${
//             typingStatus === 'Typing...' && name === 'user2' ? 'opacity-100' : 'opacity-50'
//           }`}
//         >
//           <img
//             src={rightImage}
//             alt="User 2"
//             className="w-[200px] h-[300px] shadow-lg"
//           />
//         </div>
//         </div>
//     </div>
//     <div>
//     <div className="flex flex-col mt-[20px] items-center space-x-2">
//     <h6 className="text-3xl font-semibold mb-4 text-center">
//         Judges Verdict
//     </h6>
//           <input
//             type="text"
//             placeholder="Type a message"
//             value={message}
//             onChange={handleInputChange}
//             className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           <button
//             onClick={sendMessage}
//             className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-r-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
//           >
//             Send
//             <FaArrowRight className="ml-2" />
//           </button>
//         </div>
        
//     </div>
 

//     </div>
//   );
// };

// export default Room;



import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaUser } from 'react-icons/fa';
import leftImage from '../img/leftimg.png'; // Image for user 1
import rightImage from '../img/rightimg.png'; // Image for user 2

const Room = ({ roomPin, socket, name }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState('');
  const [verdict, setVerdict] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control the popup
  const messagesEndRef = useRef(null);
  const typingRef = useRef(null);

  useEffect(() => {
    socket.on('receiveMessage', ({ user, message }) => {
      setMessages((prev) => [...prev, { user, message }]);
    });

    socket.on('userJoined', (msg) => {
      setMessages((prev) => [...prev, { user: 'system', message: msg }]);
    });

    socket.on('typing', (user) => {
      setTypingStatus(user === name ? 'Typing...' : '');
    });

    return () => {
      socket.off('receiveMessage');
      socket.off('userJoined');
      socket.off('typing');
    };
  }, [socket, name]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    typingRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [typingStatus]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('sendMessage', { roomPin, message, user: name });
      setMessage('');
      setTypingStatus('');
    }
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    if (e.target.value.trim()) {
      socket.emit('typing', name);
    } else {
      socket.emit('typing', '');
    }
  };

  const handleVerdictSubmit = () => {
    if (verdict.trim()) {
      // Emit the verdict to the server or handle it accordingly
      socket.emit('judgeVerdict', verdict);
      setVerdict('');
      setIsPopupOpen(true); // Open the popup to show the verdict
    }
  };

  return (
    <div className='flex flex-col mt-[100px]'>
      <div className="flex flex-row items-center gap-4">
        {/* Images */}
        <div className="flex justify-between w-full mr-6 max-w-md mb-4">
          <div
            className={`hidden md:block transition-opacity duration-500 ${
              typingStatus === 'Typing...' && name === 'user1' ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <img
              src={leftImage}
              alt="User 1"
              className="w-[200px] h-[300px] shadow-lg"
            />
          </div>
        </div>

        {/* Chat Box */}
        <div className="p-4 bg-white rounded-lg shadow-md max-w-md w-full mt-5 relative">
          <h6 className="text-3xl font-semibold mb-4 text-center">
            Room Pin: {roomPin}
          </h6>

          <div className="h-64 overflow-y-auto bg-gray-100 p-3 rounded-lg mb-4 border border-gray-200">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-2 ${
                  msg.user === 'system' ? 'justify-center' : msg.user === name ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`flex items-center p-2 rounded-lg max-w-xs ${
                    msg.user === 'system'
                      ? 'bg-gray-300 text-gray-600'
                      : msg.user === name
                      ? 'bg-green-200 text-green-600'
                      : 'bg-blue-200 text-blue-600'
                  }`}
                >
                  <FaUser className="mr-2" />
                  <p>
                    <strong>{msg.user}:</strong> {msg.message}
                  </p>
                </div>
              </div>
            ))}

            <div
              ref={typingRef}
              className={`flex mb-2 ${
                typingStatus ? 'justify-center' : ''
              }`}
            >
              {typingStatus && (
                <div className="flex items-center bg-gray-200 text-gray-600 p-2 rounded-lg max-w-xs">
                  <FaUser className="mr-2" />
                  <p>{typingStatus}</p>
                </div>
              )}
            </div>

            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type a message"
              value={message}
              onChange={handleInputChange}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-r-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
            >
              Send
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        <div className="flex justify-between w-full max-w-md mb-4 ml-6">
          <div
            className={`hidden md:block transition-opacity duration-500 ${
              typingStatus === 'Typing...' && name === 'user2' ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <img
              src={rightImage}
              alt="User 2"
              className="w-[200px] h-[300px] shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Judge's Verdict Section */}
      <div className="flex flex-col mt-[20px] items-center space-x-2">
        <h6 className="text-3xl font-semibold mb-4 text-center">
          Judge's Verdict
        </h6>
        <textarea
          placeholder="Type the judge's verdict"
          value={verdict}
          onChange={(e) => setVerdict(e.target.value)}
          className="w-full h-24 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
        />
        <button
          onClick={handleVerdictSubmit}
          className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
        >
          Submit Verdict
          <FaArrowRight className="ml-2" />
        </button>
      </div>

      {/* Popup for Judge's Verdict */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Judge's Verdict
            </h3>
            <p className="text-gray-700 mb-4">{verdict}</p>
            <button
              onClick={() => setIsPopupOpen(false)}
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Room;
