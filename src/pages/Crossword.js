import React, { useState, useRef } from 'react';

const crosswordData = [
  ['P', 'R', 'E', 'A', 'M', 'B', 'L', 'E', '0'],
  ['0', '0', 'A', '0', '0', '0', 'O', '0', '0'],
  ['D', 'E', 'M', 'O', 'C', 'R', 'A', 'C', 'Y'],
  ['0', '0', 'T', '0', '0', '0', 'T', '0', '0'],
  ['R', 'I', 'G', 'H', 'T', 'S', '0', '0', '0'],
  ['0', '0', 'S', '0', '0', 'J', '0', '0', '0'],
  ['F', 'U', 'N', 'D', 'A', 'M', 'E', 'N', 'T'],
  ['0', '0', 'I', '0', '0', 'U', '0', '0', '0'],
  ['0', '0', 'O', '0', '0', 'S', '0', '0', '0']
];

const acrossClues = [
  '1. The introduction to the Constitution (8 letters)',
  '3. Government of the people, by the people, for the people (9 letters)',
  '5. Basic rights that cannot be taken away (6 letters)',
  '7. Basic, essential (9 letters)'
];

const downClues = [
  '1. Group of fundamental rights in the Constitution (5 letters)',
  '2. The framework of a country’s government and laws (10 letters)',
  '4. The highest legal authority in India (7 letters)',
  '6. The body of fundamental principles (11 letters)'
];

const Crossword = () => {
  const [inputs, setInputs] = useState(Array(81).fill(''));
  const [result, setResult] = useState('');
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (/^[A-Za-z]$/.test(value)) {
      const newInputs = [...inputs];
      newInputs[index] = value.toUpperCase();
      setInputs(newInputs);

      const { row, col } = getRowCol(index);
      const isAcross = crosswordData[row][col] !== '0';

      if (isAcross) {
        const nextIndex = index + 1;
        if (nextIndex % 9 !== 0 && inputRefs.current[nextIndex]) {
          inputRefs.current[nextIndex].focus();
        }
      } else {
        const nextIndex = index + 9;
        if (nextIndex < inputs.length && inputRefs.current[nextIndex]) {
          inputRefs.current[nextIndex].focus();
        }
      }
    } else if (value === '') {
      const newInputs = [...inputs];
      newInputs[index] = '';
      setInputs(newInputs);
    }
  };

  const getRowCol = (index) => ({
    row: Math.floor(index / 9),
    col: index % 9
  });

  const checkPuzzle = () => {
    let correct = true;

    crosswordData.flat().forEach((cell, index) => {
      if (cell !== '0' && inputs[index] !== cell) {
        correct = false;
      }
    });

    setResult(correct ? 'Congratulations! You have completed the crossword correctly!' : 'Some answers are incorrect. Keep trying!');
  };

  return (
    <div className="crossword-container p-8  text-center">
      <h1 className="text-4xl font-bold text-[#020202] mb-8">Constitution Crossword</h1>
      <div className="inline-block">
        <table className="border-collapse mx-auto">
          <tbody>
            {crosswordData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => {
                  const index = rowIndex * 9 + colIndex;
                  return (
                    <td
                      key={colIndex}
                      className={`w-12 h-12 border ${cell === '0' ? 'bg-black' : ''}`}
                    >
                      {cell !== '0' && (
                        <input
                          ref={(el) => (inputRefs.current[index] = el)}
                          type="text"
                          maxLength="1"
                          value={inputs[index]}
                          onChange={(e) => handleChange(index, e.target.value)}
                          className={`w-full h-full text-center text-lg border-none ${inputs[index] ? 'bg-green-200' : 'bg-white'}`}
                        />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="max-w-md mx-auto text-left mt-8 bg-white ">
        <h2 className="text-4xl font-semibold text-[#020202] mb-4 text-center mt-2 ">Clues</h2>
        <div className="mb-4">
          <h3 className="font-bold text-lg mb-2">Across</h3>
          <ul className="list-disc pl-5">
            {acrossClues.map((clue, i) => (
              <li key={i} className="mb-2">{clue}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Down</h3>
          <ul className="list-disc pl-5">
            {downClues.map((clue, i) => (
              <li key={i} className="mb-2">{clue}</li>
            ))}
          </ul>
        </div>
      </div> */}

      <div className="max-w-md mx-auto text-left mt-8 bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
  <h2 className="text-4xl font-semibold text-blue-800 mb-6 text-center">Clues</h2>
  
  <div className="mb-6">
    <h3 className="text-2xl font-bold text-blue-600 ml-[-20px] mb-3">Across</h3>
    <ul className="list-disc pl-5 text-gray-800">
      {acrossClues.map((clue, i) => (
        <li key={i} className="mb-2">{clue}</li>
      ))}
    </ul>
  </div>
  
  <div>
    <h3 className="text-2xl font-bold text-blue-600 mb-3 ml-[-20px]">Down</h3>
    <ul className="list-disc pl-5 text-gray-800">
      {downClues.map((clue, i) => (
        <li key={i} className="mb-2">{clue}</li>
      ))}
    </ul>
  </div>
</div>

      <button
        onClick={checkPuzzle}
        className="mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700"
      >
        Check Answers
      </button>
      <p className={`mt-6 text-lg ${result.startsWith('Congratulations') ? 'text-green-600' : 'text-red-600'}`}>
        {result}
      </p>
    </div>
  );
};

export default Crossword;
