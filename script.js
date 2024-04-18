document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const choices = card.querySelectorAll(".choice");
        const result = card.querySelector(".result");
        const correctWord = card.dataset.word;

        choices.forEach(choice => {
            choice.addEventListener("click", () => {
                const selectedWord = choice.textContent.toLowerCase();
                if (selectedWord === correctWord) {
                    showResult(result, "Correct!", "#4CAF50");
                } else {
                    showResult(result, "Wrong! Try again.", "#FF6347");
                }
            });
        });
    });

    function showResult(element, message, color) {
        element.textContent = message;
        element.style.color = color;
    }
});
