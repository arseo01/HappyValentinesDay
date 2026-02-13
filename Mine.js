function openCard() {
    const card = document.getElementById("card");
    const topCard = document.getElementById("top");
    const message = document.getElementById("message");

    card.classList.add("open");
    card.classList.remove("close");
    topCard.classList.add("open");
    topCard.classList.remove("close");
    // message.style.top = "-200px"; Make an animation for this
    setTimeout(() => {
        topCard.style.zIndex = 1;
        message.classList.add("show");
        message.classList.remove("hide");
    }, 200);
}

function closeCard() {
    const card = document.getElementById("card");
    const topCard = document.getElementById("top");
    const message = document.getElementById("message");

    card.classList.remove("open");
    card.classList.add("close");
    topCard.classList.remove("open");
    topCard.classList.add("close");
    message.classList.remove("show");
    message.classList.add("hide");
    setTimeout(() => {
        topCard.style.zIndex = 2;
    }, 200);
}