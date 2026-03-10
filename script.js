const API_KEY = "AIzaSyAGhGwybCBmpZnx0XXbMwCiOYssg5_5ApY";

let chatBox = document.getElementById("chatBox");

let history = [];

async function sendMessage(){

let input = document.getElementById("userInput").value;

if(input=="") return;

chatBox.innerHTML += "<div class='user'>👨‍🎓 "+input+"</div>";

document.getElementById("userInput").value="";

history.push({role:"user",parts:[{text:input}]});

let response = await fetch(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key="+API_KEY,
{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({
contents:history
})
});

let data = await response.json();

let reply = data.candidates[0].content.parts[0].text;

chatBox.innerHTML += "<div class='ai'>🤖 "+reply+"</div>";

history.push({role:"model",parts:[{text:reply}]});

chatBox.scrollTop = chatBox.scrollHeight;

}
