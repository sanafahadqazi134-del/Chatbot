const API_KEY = "AIzaSyAKsOoyKltpe_68lnH31lI-6j4v-jWmcFc";

async function send() {
  const input = document.getElementById("msg");
  const chat = document.getElementById("chat");
  const userMsg = input.value;

  chat.innerHTML += `<p><b>You:</b> ${userMsg}</p>`;
  input.value = "";

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + API_KEY,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userMsg }] }]
      })
    }
  );

  const data = await response.json();
  const botReply = data.candidates[0].content.parts[0].text;

  chat.innerHTML += `<p><b>Bot:</b> ${botReply}</p>`;
  chat.scrollTop = chat.scrollHeight;
}
