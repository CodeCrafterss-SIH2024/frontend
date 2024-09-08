// src/Leaderboard.js

import React, { useEffect, useState } from 'react';

// List of random Indian names
const indianNames = [
    'Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Sai', 'Reyansh', 'Ayaan',
    'Ishaan', 'Aarav', 'Ananya', 'Ishita', 'Mira', 'Aditi', 'Saanvi', 'Kiara',
    'Madhavi', 'Neha', 'Meera', 'Tanu', 'Riya', 'Ira', 'Shruti', 'Kriti'
];

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await fetch('/api/leaderboard');
                const users = await response.json();

                // Sort users by points in descending order
                users.sort((a, b) => b.points - a.points);
                setLeaderboard(users);
            } catch (err) {
                console.error('Error fetching leaderboard data:', err);

                // Use test data if there's an error
                const testUsers = [];
                for (let i = 0; i < 10; i++) {
                    testUsers.push({
                        username: indianNames[Math.floor(Math.random() * indianNames.length)],
                        points: Math.floor(Math.random() * 100)
                    });
                }
                testUsers.sort((a, b) => b.points - a.points);
                setLeaderboard(testUsers);
            }
        };

        fetchLeaderboard();
    }, []);

    return (
        <main className="py-[100px] text-center bg-[#d4cae8] ">
            <h2 className="text-[#100f13] text-7xl font-extrabold mb-10">Leaderboard</h2>
            <table className="w-full max-w-4xl mx-auto border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
    <thead>
        <tr className="bg-[#81739e] text-white">
            <th className="px-6 py-3 border-b border-[#8B5FE3] text-center text-lg">Rank</th>
            <th className="px-6 py-3 border-b border-[#8B5FE3] text-center text-lg">User</th>
            <th className="px-6 py-3 border-b border-[#8B5FE3] text-center text-lg">Points</th>
        </tr>
    </thead>
    <tbody>
        {leaderboard.map((user, index) => (
            <tr key={index} className="hover:bg-[#F0F4F8]">
                <td className="px-6 py-4 border-b border-[#E5E7EB] text-center text-lg">{index + 1}</td>
                <td className="px-6 py-4 border-b border-[#E5E7EB] text-center text-lg font-medium text-gray-800">{user.username}</td>
                <td className="px-6 py-4 border-b border-[#E5E7EB] text-center text-lg text-gray-600">{user.points}</td>
            </tr>
        ))}
    </tbody>
</table>

            <button 
                onClick={() => window.history.back()} 
                className="mt-6 px-6 py-3 bg-[#8B5FE3] text-white rounded-lg hover:bg-[#7a51d1] focus:outline-none"
            >
                ← Back
            </button>
        </main>
    );
};

export default Leaderboard;
