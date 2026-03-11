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

const response = await fetch("/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
question: question
})
});
const data = await response.json();

console.log(data);

const reply = data.choices[0].message.content;

chatBox.innerHTML += `<p style="color:green"><b>AI:</b> ${reply}</p>`;

}catch(err){

chatBox.innerHTML += `<p style="color:red">Không kết nối được ChatGPT</p>`;

}

}
