async function askAI(){

const apiKey = document.getElementById("apiKey").value.trim();
const question = document.getElementById("question").value.trim();
const chatBox = document.getElementById("chatBox");

if(!question){
alert("Hãy nhập câu hỏi");
return;
}

chatBox.innerHTML += `<p style="color:blue"><b>Bạn:</b> ${question}</p>`;

try{

const response = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
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

if(data.candidates && data.candidates.length>0){

const reply = data.candidates[0].content.parts[0].text;

chatBox.innerHTML += `<p style="color:green"><b>AI:</b> ${reply}</p>`;

}else{

chatBox.innerHTML += `<p style="color:red"><b>Lỗi từ Gemini:</b> ${data.error?.message || "Không có dữ liệu"}</p>`;

}

}catch(error){

chatBox.innerHTML += `<p style="color:red">Không kết nối được AI</p>`;
console.error(error);

}

}
