async function askAI(){

const apiKey=document.getElementById("apiKey").value

const question=document.getElementById("question").value

const chatBox=document.getElementById("chatBox")

chatBox.innerHTML+=
`<div class="messageUser"><b>Bạn:</b> ${question}</div>`


const response=await fetch(
`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

contents:[
{
parts:[
{
text:
"Bạn là gia sư lập trình. Hãy giải thích từng bước dễ hiểu: "+question
}
]
}
]

})

})

const data=await response.json()

const reply=data.candidates[0].content.parts[0].text


chatBox.innerHTML+=
`<div class="messageAI"><b>AI:</b> ${reply}</div>`

}
