
let chatbotMsgList=["Hi","How are you","Which clg r u","How Can I Assiet You","R U Complete Graduation","Thank You For Visiting","I Hope To See You Again"]

let chatContainerE1= document.getElementById("chatContainer");
let userInputE1= document.getElementById("userInput");

function sendMsgTochatbot() {
  let userMsg = userInputE1.value;
  
  let msgContainerE1 = document.createElement("div");
  msgContainerE1.classList.add("msg-to-chatbot-container");
  chatContainerE1.appendChild(msgContainerE1);
  
  let userMsgE1 = document.createElement("span");
  userMsgE1.textContent=userMsg;
  userMsgE1.classList.add("msg-to-chatbot");
  msgContainerE1.appendChild(userMsgE1);
  
  userInputE1.value = " ";
  getReplyFromChatbot();
}

function getReplyFromChatbot() {
  let noOfChatbotMsgs = chatbotMsgList.length;
  let chatbotMsg =chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs) -1];

  let msgContainerE1 = document.createElement("div");
  msgContainerE1.classList.add("msg-from-chatbot-container");
  chatContainerE1.appendChild(msgContainerE1);
  
  let chatbotMsgE1 = document.createElement("span");
  chatbotMsgE1.textContent = chatbotMsg;
  chatbotMsgE1.classList.add("msg-from-chatbot");
  msgContainerE1.appendChild(chatbotMsgE1);
}
