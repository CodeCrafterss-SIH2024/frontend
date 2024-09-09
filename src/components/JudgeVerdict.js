// components/JudgeVerdict.js
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const JudgeVerdict = ({ judge }) => {
  const [verdict, setVerdict] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVerdict = () => {
    if (verdict.trim()) {
      setIsModalOpen(true); // Open the modal when the verdict is submitted
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setVerdict(""); // Clear the verdict text
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto mt-[20px]">
      <h3 className="text-2xl font-semibold mb-4 text-center">
        Judge {judge}'s Verdict
      </h3>
      <textarea
        placeholder="Judge's final decision"
        value={verdict}
        onChange={(e) => setVerdict(e.target.value)}
        className="w-full h-28 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
      />
      <button
        onClick={handleVerdict}
        className="px-4 py-2 bg-[#4b4fc5] text-white font-semibold rounded-md shadow-sm hover:bg-[#2f33ad] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#363989] flex items-center"
      >
        Submit Verdict
        <FaCheck className="ml-2" />
      </button>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-2 text-center">
              Judge {judge}'s Verdict
            </h3>
            <p className="mb-4 text-gray-700">{verdict}</p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-[#4b4fc5] text-white font-semibold rounded-md shadow-sm hover:bg-[#2f33ad] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#363989]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JudgeVerdict;
