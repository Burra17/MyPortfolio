document.addEventListener('DOMContentLoaded', function () {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const messagesContainer = document.getElementById('messages');

    // Session-level chat history
    let chatHistory = [];
    const MAX_HISTORY = 10;

    sendBtn.addEventListener('click', sendMessage);

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;

        // Disable input while AI responds
        userInput.value = '';
        userInput.disabled = true;
        sendBtn.disabled = true;

        // Show user message
        addMessage(message, 'user');

        // Show "thinking" bubble
        const loadingBubble = addMessage("...", 'ai');

        try {
            const payload = {
                message: message,
                history: chatHistory
            };

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error('Server network error');

            const data = await response.json();

            // Remove "thinking" bubble and show response
            loadingBubble.remove();
            addMessage(data.reply, 'ai');

            // Update history and trim to prevent unbounded growth
            chatHistory.push({ role: "user", content: message });
            chatHistory.push({ role: "assistant", content: data.reply });
            if (chatHistory.length > MAX_HISTORY) {
                chatHistory = chatHistory.slice(-MAX_HISTORY);
            }

        } catch (error) {
            console.error('Error:', error);
            loadingBubble.remove();
            addMessage("Could not reach the server. Please check your connection.", 'ai');
        } finally {
            // Re-enable input
            userInput.disabled = false;
            sendBtn.disabled = false;
            userInput.focus();
        }
    }

    function addMessage(text, sender) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('message-row', sender === 'user' ? 'user-row' : 'ai-row');

        if (sender !== 'user') {
            const avatarDiv = document.createElement('div');
            avatarDiv.classList.add('avatar');
            avatarDiv.textContent = '\u{1F916}';
            rowDiv.appendChild(avatarDiv);
        }

        const bubbleDiv = document.createElement('div');
        bubbleDiv.classList.add('message-bubble', sender === 'user' ? 'user-bubble' : 'ai-bubble');
        bubbleDiv.textContent = text;

        rowDiv.appendChild(bubbleDiv);
        messagesContainer.appendChild(rowDiv);

        // Auto-scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        return rowDiv;
    }
});
