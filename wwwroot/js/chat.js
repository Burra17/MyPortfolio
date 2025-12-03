document.addEventListener('DOMContentLoaded', function () {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const messagesContainer = document.getElementById('messages');

    // 1. NYTT: En lista som sparar historiken lokalt i webbläsaren
    let chatHistory = [];

    // Skicka meddelande vid klick
    sendBtn.addEventListener('click', sendMessage);

    // Skicka med Enter-tangenten
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    async function sendMessage() {
        const message = userInput.value;
        if (!message.trim()) return;

        // Visa användarens meddelande
        addMessage(message, 'user');
        userInput.value = '';

        // Visa en tillfällig "tänker"-bubbla
        const loadingBubble = addMessage("...", 'ai');

        try {
            // 2. NYTT: Vi skickar både 'message' OCH 'history'
            const payload = {
                message: message,
                history: chatHistory
            };

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload) // Skicka hela objektet
            });

            if (!response.ok) throw new Error('Nätverksfel');

            const data = await response.json();

            // Ta bort "tänker"-bubblan och visa riktiga svaret
            loadingBubble.remove();
            addMessage(data.reply, 'ai');

            // 3. NYTT: Uppdatera historiken inför NÄSTA fråga
            // Vi sparar vad du sa
            chatHistory.push({ role: "user", content: message });
            // Vi sparar vad AI:n svarade
            chatHistory.push({ role: "assistant", content: data.reply });

        } catch (error) {
            console.error('Error:', error);
            loadingBubble.remove();
            addMessage("Could not reach the server. Please check your connection or API key.", 'ai');
        }
    }

    // Funktion för att skapa pratbubblor (Samma som förut)
    function addMessage(text, sender) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('message-row');
        rowDiv.classList.add(sender === 'user' ? 'user-row' : 'ai-row');

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