
import React, { useState } from 'react';

const crosswordData = [
    ['P', 'R', 'E', 'A', 'M', 'B', 'L', 'E', 0],
    [0, 0, 'A', 0, 0, 0, 'O', 0, 0],
    ['D', 'E', 'M', 'O', 'C', 'R', 'A', 'C', 'Y'],
    [0, 0, 'T', 0, 0, 0, 'T', 0, 0],
    ['R', 'I', 'G', 'H', 'T', 'S', 0, 0, 0],
    [0, 0, 'S', 0, 0, 'J', 0, 0, 0],
    ['F', 'U', 'N', 'D', 'A', 'M', 'E', 'N', 'T'],
    [0, 0, 'I', 0, 0, 'U', 0, 0, 0],
    [0, 0, 'O', 0, 0, 'S', 0, 0, 0]
];

// Define the indices that correspond to the word "Constitution" in the puzzle
const constitutionIndices = [18, 19, 20, 21, 22, 23, 24, 25, 26];

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

    const handleChange = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value.toUpperCase(); // Ensure uppercase letters
        setInputs(newInputs);
    };

    const checkPuzzle = () => {
        let correct = true;

        crosswordData.flat().forEach((cell, index) => {
            if (cell !== 0 && inputs[index] !== cell) {
                correct = false;
            }
        });

        setResult(correct ? 'Congratulations! You have completed the crossword correctly!' : 'Some answers are incorrect. Keep trying!');
    };

    return (
        <div className="crossword-container text-center p-8">
            <h1 className="crossword-title text-4xl font-bold text-purple-600 mb-8">Constitution Crossword</h1>
            <div id="crossword-container-unique" className="crossword-grid-container inline-block">
                <table id="crossword-unique" className="crossword-table border-collapse">
                    <tbody>
                        {crosswordData.map((row, rowIndex) => (
                            <tr key={rowIndex} className="crossword-row">
                                {row.map((cell, colIndex) => {
                                    const index = rowIndex * 9 + colIndex;
                                    const isConstitutionLetter = constitutionIndices.includes(index);
                                    return (
                                        <td
                                            key={colIndex}
                                            className={`crossword-cell w-10 h-10 text-center border ${cell === 0 ? 'bg-black' : 'bg-white'} ${isConstitutionLetter ? 'text-white' : 'text-black'}`}
                                        >
                                            {cell !== 0 && (
                                                <input
                                                    type="text"
                                                    maxLength="1"
                                                    value={inputs[index]}
                                                    onChange={(e) => handleChange(index, e.target.value)}
                                                    className={`crossword-input w-full h-full text-center text-lg border-none ${isConstitutionLetter ? 'text-white' : 'text-black'}`}
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
            <div id="clues-container-unique" className="clues-container max-w-md mx-auto text-left mt-8">
                <h2 className="clues-title text-xl font-semibold text-gray-700">Clues</h2>
                <ul id="across-clues-unique" className="across-clues list-none p-0 mb-4">
                    <li className="clue-header font-bold">Across</li>
                    {acrossClues.map((clue, i) => (
                        <li key={i} className="clue-item mb-2">{clue}</li>
                    ))}
                </ul>
                <ul id="down-clues-unique" className="down-clues list-none p-0">
                    <li className="clue-header font-bold">Down</li>
                    {downClues.map((clue, i) => (
                        <li key={i} className="clue-item mb-2">{clue}</li>
                    ))}
                </ul>
            </div>
            <button
                onClick={checkPuzzle}
                className="check-answers-btn mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700"
            >
                Check Answers
            </button>
            <p id="result-unique" className={`result-text mt-6 text-lg ${result.startsWith('Congratulations') ? 'text-green-600' : 'text-red-600'}`}>
                {result}
            </p>
        </div>
    );
};

export default Crossword;
