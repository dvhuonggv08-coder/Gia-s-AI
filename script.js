const API_KEY = "AIzaSyAFErA40r1QxWc1KIduoC19t3aLcD2DIf0";


async function sendMessage(){

const input = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

const userText = input.value;

if(userText.trim()=="") return;

chatBox.innerHTML += "<p><b>Bạn:</b> "+userText+"</p>";

const response = await fetch(
`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({
contents:[
{
parts:[
{ text:userText }
]
}
]
})
}
);

const data = await response.json();

console.log(data);

let aiReply="AI lỗi";

if(data.candidates){
aiReply = data.candidates[0].content.parts[0].text;
}

chatBox.innerHTML += "<p><b>AI:</b> "+aiReply+"</p>";

input.value="";
}
