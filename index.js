const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage("user", message);
  userInput.value = "";

  setTimeout(() => {
    const reply = getBotResponse(message);
    appendMessage("bot", reply);
  }, 500);
}

function appendMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();

  // ✅ Keyword-based responses
  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! How can I assist you today?";
  } else if (input.includes("college name")) {
    return "Our college is ABC College of Engineering, Chennai.";
  } else if (input.includes("timing")) {
    return "College timings are from 9:00 AM to 4:00 PM, Monday to Friday.";
  } else if (input.includes("principal")) {
    return "You can contact the Principal at principal@abccollege.edu.";
  } else if (input.includes("courses") || input.includes("departments")) {
    return "We offer B.E, B.Tech, MCA, and MBA programs.";
  } else if (input.includes("placement")) {
    return "Our placement cell partners with TCS, Infosys, and Wipro for campus drives.";
  } else if (input.includes("library")) {
    return "The library is open from 8:30 AM to 5:00 PM on all working days.";
  } else if (input.includes("canteen")) {
    return "Yes! The canteen provides vegetarian and non-vegetarian meals at affordable prices.";
  } else if (input.includes("holiday")) {
    return "You can check the academic calendar for holidays at abccollege.edu/academic-calendar.";
  } else if (input.includes("thanks")) {
    return "You're welcome! 😊";
  } else {
    return "I'm not sure about that. Please contact the college office for more details.";
  }
}
