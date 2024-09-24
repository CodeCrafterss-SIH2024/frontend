import React, { useState } from 'react';

const StoryEquality = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [
    {
      id: 1,
      title: "The Right to Equality",
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-purple-100 p-8">
          <h2 className="text-4xl font-bold mb-4 text-purple-500">The Right to Equality</h2>
          <p className="text-lg mb-6 text-purple-700">
            The Right to Equality is a fundamental right enshrined in the Constitution of India. This means that every citizen has the right to be treated equally before the law, regardless of their race, caste, religion, or gender.
          </p>
          <img src="/api/placeholder/600/400" alt="Equality Illustration" className="w-3/4 mb-6" />
          <div className="flex justify-between w-full">
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Seema's Struggle",
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-purple-100 p-8">
          <h2 className="text-4xl font-bold mb-4 text-purple-500">Seema's Struggle</h2>
          <p className="text-lg mb-6 text-purple-700">
            Seema comes from a lower-caste family and has been denied opportunities due to her social status. She is often discriminated against in her community and faces barriers in accessing education and employment.
          </p>
          <img src="/api/placeholder/600/400" alt="Seema Illustration" className="w-3/4 mb-6" />
          <div className="flex justify-between w-full">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Seeking Justice",
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-purple-100 p-8">
          <h2 className="text-4xl font-bold mb-4 text-purple-500">Seeking Justice</h2>
          <p className="text-lg mb-6 text-purple-700">
            Seema decides to take legal action against the discrimination she has faced. She learns about the laws and constitutional provisions that protect her right to equality, and she seeks the help of a lawyer to file a case.
          </p>
          <img src="/api/placeholder/600/400" alt="Justice Illustration" className="w-3/4 mb-6" />
          <div className="flex justify-between w-full">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Seema's Victory",
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-purple-100 p-8">
          <h2 className="text-4xl font-bold mb-4 text-purple-500">Seema's Victory</h2>
          <p className="text-lg mb-6 text-purple-700">
            After a long legal battle, Seema's case is successful, and the court rules in her favor. The judgment not only upholds her right to equality but also sets an important precedent for others who face similar discrimination.
          </p>
          <img src="/api/placeholder/600/400" alt="Victory Illustration" className="w-3/4 mb-6" />
          <div className="flex justify-between w-full">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {pages[currentPage - 1].content}
    </div>
  );
};

export default StoryEquality;