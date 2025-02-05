const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Honey please...",
    "Just think about it my honeyyyyy!",
    "please my honey huhuhu...",
    "please say yes my love...",
    "I will understand if you say no my honey huhu...",
    "I love you so much my honey...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}