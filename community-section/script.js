function addMessage() {
    const username = document.getElementById('username').value.trim();
    const messageText = document.getElementById('message').value.trim();

    if (username && messageText) {
        const chatBox = document.getElementById('chat-box');

        // Create message element
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${username}:</strong> ${messageText}`;

        // Add reply button to each message
        const replyButton = document.createElement('button');
        replyButton.textContent = 'Reply';
        replyButton.classList.add('reply-button');
        replyButton.onclick = () => addReply(messageElement);
        messageElement.appendChild(replyButton);

        // Append the message to the chat box
        chatBox.appendChild(messageElement);

        // Clear input fields
        document.getElementById('username').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please enter both a username and a message.');
    }
}

function addReply(parentMessage) {
    const replyText = prompt('Enter your reply:');

    if (replyText) {
        const replyElement = document.createElement('div');
        replyElement.classList.add('reply');
        replyElement.textContent = `Reply: ${replyText}`;

        parentMessage.appendChild(replyElement);
    }
}
