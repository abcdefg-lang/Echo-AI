const sendButton = document.querySelector(".chat-input button");
const input = document.querySelector(".chat-input input");
const messages = document.querySelector(".messages");


sendButton.addEventListener("click", function() {

    let userMessage = input.value;

    if (userMessage.trim() === "") {
        return;
    }


    // User message
    let userBubble = document.createElement("div");
    userBubble.className = "echo-message";
    userBubble.innerHTML = "You: " + userMessage;

    messages.appendChild(userBubble);



    // Echo response
    let echoReply = document.createElement("div");
    echoReply.className = "echo-message";

    echoReply.innerHTML = 
    "Echo: Thanks for your message! I'm still learning, but I'll be ready to help you soon! 😊";


    messages.appendChild(echoReply);


    input.value = "";

});
