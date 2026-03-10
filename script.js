const API_KEY = "AIzaSyAGhGwybCBmpZnx0XXbMwCiOYssg5_5ApY";

async function sendMessage(){

let input = document.getElementById("userInput").value;
if(!input) return;

let chatBox = document.getElementById("chatBox");

chatBox.innerHTML += `<div class="user">👨‍🎓 ${input}</div>`;

document.getElementById("userInput").value="";

let response = await fetch(
https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent;
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[{
parts:[{text:input}]
}]
})
});

let data = await response.json();

const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "AI chưa trả lời.";

chatBox.innerHTML += `<div class="ai">🤖 ${reply}</div>`;

chatBox.scrollTop = chatBox.scrollHeight;

}
