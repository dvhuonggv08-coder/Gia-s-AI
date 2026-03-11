async function askAI(){

const apiKey = document.getElementById("apiKey").value.trim();
const question = document.getElementById("question").value.trim();
const chatBox = document.getElementById("chatBox");

if(!question){
alert("Hãy nhập câu hỏi");
return;
}

chatBox.innerHTML += "<p style='color:blue'><b>Bạn:</b> "+question+"</p>";

try{

const response = await fetch(
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
{ text: question }
]
}
]
})
}
);

const data = await response.json();

console.log(data);

if(data.candidates){

const reply = data.candidates[0].content.parts[0].text;

chatBox.innerHTML += "<p style='color:green'><b>AI:</b> "+reply+"</p>";

}else{

chatBox.innerHTML += "<p style='color:red'>Lỗi từ Gemini</p>";

}

}catch(err){

chatBox.innerHTML += "<p style='color:red'>Không kết nối được AI</p>";

}

}
