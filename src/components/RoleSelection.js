// components/RoleSelection.js
import React, { useState } from "react";
import { FaGavel, FaUserTie, FaUser } from "react-icons/fa";

const RoleSelection = ({ onStart }) => {
  const [judgeName, setJudgeName] = useState("");
  const [lawyer1Name, setLawyer1Name] = useState("");
  const [lawyer2Name, setLawyer2Name] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart(judgeName, lawyer1Name, lawyer2Name);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md mt-[40px]">
      <h2 className="text-3xl font-semibold mb-4 text-center text-[#1b493a]">Assign Roles</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-3">
          <FaGavel className="text-3xl text-gray-600" />
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Judge's Name:</label>
            <input
              type="text"
              value={judgeName}
              onChange={(e) => setJudgeName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaUserTie className="text-3xl text-gray-600" />
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">First Lawyer's Name:</label>
            <input
              type="text"
              value={lawyer1Name}
              onChange={(e) => setLawyer1Name(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaUser className="text-3xl text-gray-600" />
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Second Lawyer's Name:</label>
            <input
              type="text"
              value={lawyer2Name}
              onChange={(e) => setLawyer2Name(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Start Conversation
        </button>
      </form>
    </div>
  );
};

export default RoleSelection;
