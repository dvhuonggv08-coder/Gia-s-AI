let chatBox = document.getElementById("chatBox")

let history = []

async function sendMessage(){

let input = document.getElementById("userInput").value

if(input=="") return

chatBox.innerHTML += "<div class='user'><b>Học sinh:</b> "+input+"</div>"

history.push({role:"user",content:input})

document.getElementById("userInput").value=""

let response = await fetch("https://api.openai.com/v1/chat/completions",{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer API_KEY"
},
body:JSON.stringify({
model:"gpt-4o-mini",
messages:[
{
role:"system",
content:"Bạn là gia sư Tin học cho học sinh Việt Nam. Hãy giải thích dễ hiểu và đưa ví dụ C++ Python Scratch."
},
...history
]
})
})

let data = await response.json()

let reply = data.choices[0].message.content

chatBox.innerHTML += "<div class='ai'><b>AI:</b> "+reply+"</div>"

history.push({role:"assistant",content:reply})

chatBox.scrollTop = chatBox.scrollHeight

}
