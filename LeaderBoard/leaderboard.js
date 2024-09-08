// List of random Indian names
const indianNames = [
    'Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Sai', 'Reyansh', 'Ayaan', 
    'Ishaan', 'Aarav', 'Ananya', 'Ishita', 'Mira', 'Aditi', 'Saanvi', 'Kiara',
    'Madhavi', 'Neha', 'Meera', 'Tanu', 'Riya', 'Ira', 'Shruti', 'Kriti'
];

// Function to fetch and display the leaderboard
async function displayLeaderboard() {
    const leaderboardEntries = document.getElementById('leaderboard-entries');
    leaderboardEntries.innerHTML = '';

    try {
        // Fetch the top 5 users from the backend
        const response = await fetch('/api/leaderboard');
        const users = await response.json();

        // Sort users by points in descending order
        users.sort((a, b) => b.points - a.points);

        // Create table rows for the top 5 users
        users.forEach((user, index) => {
            const row = document.createElement('tr');

            const rankCell = document.createElement('td');
            rankCell.textContent = index + 1;
            row.appendChild(rankCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = user.username;
            row.appendChild(nameCell);

            const pointsCell = document.createElement('td');
            pointsCell.textContent = user.points;
            row.appendChild(pointsCell);

            leaderboardEntries.appendChild(row);
        });
    } catch (err) {
        console.error('Error fetching leaderboard data:', err);
    }
}

// Call the function to display the leaderboard on page load
window.onload = function() {
    // Show random test entries before fetching actual data
    const leaderboardEntries = document.getElementById('leaderboard-entries');
    leaderboardEntries.innerHTML = '';

    const testUsers = [];
    for (let i = 0; i < 5; i++) {
        testUsers.push({
            username: indianNames[Math.floor(Math.random() * indianNames.length)],
            points: Math.floor(Math.random() * 100)
        });
    }

    // Sort test users by points in descending order
    testUsers.sort((a, b) => b.points - a.points);

    testUsers.forEach((user, index) => {
        const row = document.createElement('tr');

        const rankCell = document.createElement('td');
        rankCell.textContent = index + 1;
        row.appendChild(rankCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = user.username;
        row.appendChild(nameCell);

        const pointsCell = document.createElement('td');
        pointsCell.textContent = user.points;
        row.appendChild(pointsCell);

        leaderboardEntries.appendChild(row);
    });
};
