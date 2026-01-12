// api/chat.js
export default async function handler(req, res) {
    // 1. Kontrollera att det är ett POST-anrop
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // 2. Hämta message och history från din frontend
    // Din frontend skickar: { message: "...", history: [...] }
    const { message, history } = req.body;

    // 3. Förbered meddelandena för OpenAI
    // Vi kombinerar den befintliga historiken med det senaste meddelandet
    const apiMessages = [
        ...history,
        { role: "user", content: message }
    ];

    try {
        // 4. Skicka anropet till OpenAI
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo', // Du kan även använda 'gpt-4o'
                messages: apiMessages,
                temperature: 0.7, // Gör svaren lite mer kreativa
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("OpenAI Error:", errorData);
            return res.status(500).json({ error: 'Fel vid kommunikation med OpenAI' });
        }

        const data = await response.json();

        // 5. Extrahera textsvaret
        const aiReply = data.choices[0].message.content;

        // 6. Skicka tillbaka svaret i det format din frontend förväntar sig (data.reply)
        return res.status(200).json({ reply: aiReply });

    } catch (error) {
        console.error("Server Error:", error);
        return res.status(500).json({ error: 'Internt serverfel' });
    }
}