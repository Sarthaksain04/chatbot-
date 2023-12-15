const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
let userMessage;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className ==="outgoing" ?`<p>${message}</p>`:'<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>';
    chatLi.innerHTML =chatContent;
    return chatLi;
};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    const chatbox = document.querySelector(".chatbox");
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

    // Clear the input after sending the message
    chatInput.value = "";
};

sendChatBtn.addEventListener("click", handleChat);