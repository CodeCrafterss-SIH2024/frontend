// components/JudgeVerdict.js
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const JudgeVerdict = ({ judge, messages }) => {
  const [verdict, setVerdict] = useState("");

  const handleVerdict = () => {
    alert(`Judge ${judge}'s verdict: ${verdict}`);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto mt-[20px]    ">
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
        className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center"
      >
        Submit Verdict
        <FaCheck className="ml-2" />
      </button>
    </div>
  );
};

export default JudgeVerdict;
