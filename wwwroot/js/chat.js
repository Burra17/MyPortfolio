document.addEventListener('DOMContentLoaded', function () {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const messagesContainer = document.getElementById('messages');

    // Skicka meddelande vid klick
    sendBtn.addEventListener('click', sendMessage);

    // Skicka med Enter-tangenten
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    async function sendMessage() {
        const message = userInput.value;
        if (!message.trim()) return;

        // 1. Visa användarens meddelande
        addMessage(message, 'user');
        userInput.value = '';

        // 2. Visa en tillfällig "tänker"-bubbla
        const loadingBubble = addMessage("...", 'ai');

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: message })
            });

            if (!response.ok) throw new Error('Nätverksfel');

            const data = await response.json();

            // 3. Ta bort "tänker"-bubblan och visa riktiga svaret
            loadingBubble.remove();
            addMessage(data.reply, 'ai');

        } catch (error) {
            console.error('Error:', error);
            loadingBubble.remove();
            addMessage("Could not reach the server. Please check your connection or API key.", 'ai');
        }
    }

    // Funktion för att skapa pratbubblor
    function addMessage(text, sender) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('message-row');
        rowDiv.classList.add(sender === 'user' ? 'user-row' : 'ai-row');

        // Om det är AI:n, lägg till avatar
        if (sender !== 'user') {
            const avatarDiv = document.createElement('div');
            avatarDiv.classList.add('avatar');
            avatarDiv.textContent = '🤖';
            rowDiv.appendChild(avatarDiv);
        }

        const bubbleDiv = document.createElement('div');
        bubbleDiv.classList.add('message-bubble');
        bubbleDiv.classList.add(sender === 'user' ? 'user-bubble' : 'ai-bubble');
        bubbleDiv.textContent = text;

        rowDiv.appendChild(bubbleDiv);
        messagesContainer.appendChild(rowDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        return rowDiv;
    }
});