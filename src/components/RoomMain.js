import React, { useState } from 'react';
import io from 'socket.io-client';
import Room from './Room';
import NewHeader from './NewHeader';
import backgroundImage from '../img/loginimg.jpg'; // Import background image

const socket = io.connect(process.env.REACT_APP_API_URL);  // process.env.react_app_url

function RoomMain() {
    const [isInRoom, setIsInRoom] = useState(false);
    const [roomPin, setRoomPin] = useState('');
    const [joinPin, setJoinPin] = useState('');
    const [name, setName] = useState('');
    const [generatedPin, setGeneratedPin] = useState(null); // Store generated pin
  
    // Handle Create Room (generate pin but do not join)
    const handleCreateRoom = () => {
      if (name.trim()) {
        socket.emit('createRoom', name); // Send name with room creation
        socket.on('roomCreated', (pin) => {
          setGeneratedPin(pin); // Show the generated pin
        });
      } else {
        alert('Please enter your name.');
      }
    };
  
    // Handle Join Room (for both create and join flow)
    const handleJoinRoom = () => {
      if (name.trim() && joinPin.trim()) {
        socket.emit('joinRoom', { roomPin: joinPin, name }); // Send name with pin to join
        socket.on('roomJoined', (pin) => {
          setRoomPin(pin);
          setIsInRoom(true);
        });
        socket.on('error', (message) => {
          alert(message);
        });
      } else {
        alert('Please enter your name and the room pin.');
      }
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover" 
           style={{ backgroundImage: `url(${backgroundImage})` }}>
        <NewHeader/>
        {!isInRoom ? (
          <div className="mt-[200px] w-full max-w-lg bg-white rounded-lg shadow-lg p-8 m-4">
            <h1 className="text-4xl font-extrabold text-center text-[#581e8a] mb-6">Welcome to Debate App</h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#7b2cbf]"
              />
            </div>
            <button
              onClick={handleCreateRoom}
              className="w-full bg-[#7b2cbf] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#5c2d85] focus:outline-none mb-4"
            >
              Create Room
            </button>
  
            {generatedPin && (
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-center mb-2">Room Created. Your Pin: {generatedPin}</h3>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="joinPin">
                    Enter Room Pin to Join
                  </label>
                  <input
                    type="text"
                    id="joinPin"
                    placeholder="Enter Room Pin to Join"
                    value={joinPin}
                    onChange={(e) => setJoinPin(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#7b2cbf]"
                  />
                </div>
                <button
                  onClick={handleJoinRoom}
                  className="w-full bg-[#7b2cbf] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#5c2d85] focus:outline-none"
                >
                  Join Room
                </button>
              </div>
            )}
  
            {!generatedPin && (
              <div className="mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="joinPin">
                    Enter Room Pin to Join
                  </label>
                  <input
                    type="text"
                    id="joinPin"
                    placeholder="Enter Room Pin to Join"
                    value={joinPin}
                    onChange={(e) => setJoinPin(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#7b2cbf]"
                  />
                </div>
                <button
                  onClick={handleJoinRoom}
                  className="w-full bg-[#7b2cbf] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#5c2d85] focus:outline-none"
                >
                  Join Room
                </button>
              </div>
            )}
          </div>
        ) : (
          <Room roomPin={roomPin} socket={socket} name={name} />
        )}
      </div>
    );
}

export default RoomMain;
