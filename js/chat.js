document.addEventListener('DOMContentLoaded', function () {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const messagesContainer = document.getElementById('messages');

    // Sparar historiken lokalt under sessionen
    let chatHistory = [];

    sendBtn.addEventListener('click', sendMessage);

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;

        // Inaktivera input medan AI:n svarar
        userInput.value = '';
        userInput.disabled = true;
        sendBtn.disabled = true;

        // Visa användarens meddelande
        addMessage(message, 'user');

        // Visa "tänker"-bubbla
        const loadingBubble = addMessage("...", 'ai');

        try {
            // Vi skickar meddelandet och historiken till din nya Vercel-backend
            const payload = {
                message: message,
                history: chatHistory
            };

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error('Nätverksfel hos servern');

            const data = await response.json();

            // Ta bort "tänker"-bubblan och visa svaret
            loadingBubble.remove();
            addMessage(data.reply, 'ai');

            // Uppdatera historiken för att bevara kontexten
            chatHistory.push({ role: "user", content: message });
            chatHistory.push({ role: "assistant", content: data.reply });

        } catch (error) {
            console.error('Error:', error);
            loadingBubble.remove();
            addMessage("Kunde inte nå servern. Kontrollera din anslutning eller API-nyckel på Vercel.", 'ai');
        } finally {
            // Aktivera input igen
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
            avatarDiv.textContent = '🤖';
            rowDiv.appendChild(avatarDiv);
        }

        const bubbleDiv = document.createElement('div');
        bubbleDiv.classList.add('message-bubble', sender === 'user' ? 'user-bubble' : 'ai-bubble');
        bubbleDiv.textContent = text;

        rowDiv.appendChild(bubbleDiv);
        messagesContainer.appendChild(rowDiv);

        // Scrolla automatiskt till botten
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        return rowDiv;
    }
});