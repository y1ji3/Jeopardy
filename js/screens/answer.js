let showQuestion = (question, points, cell, categoryName) => {
    let questionText = safeDecode(question.question);
    let correct = safeDecode(question.correct_answer);
    let answers = [...question.incorrect_answers, question.correct_answer]
        .map(a => safeDecode(a))
        .sort(() => Math.random() - 0.5);

    let overlay = document.createElement("div");
    overlay.id = "question-overlay";
    overlay.innerHTML = `
        <div id="question-modal">
            <h2 id="modal-category">${categoryName}</h2>
            <p id="question-text">${questionText}</p>
            <div id="answer-choices">
                ${answers.map(a => `<button class="answer-btn">${a}</button>`).join("")}
            </div>
            <button id="continue-btn" style="display:none;">Continue</button>
            <button id="cancel-btn">Cancel</button>
        </div>
    `;
    main.appendChild(overlay);

    document.getElementById("cancel-btn").addEventListener("click", () => {
        overlay.remove();
    });

    document.querySelectorAll(".answer-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            let selected = btn.textContent;
            let isCorrect = selected === correct;

            document.querySelectorAll(".answer-btn").forEach(b => {
                b.disabled = true;

                if (b.textContent === correct) {
                    b.classList.add("correct"); 
                } else if (b === btn && !isCorrect) {
                    b.classList.add("incorrect"); 
                }
            });

            document.getElementById("cancel-btn").style.display = "none";

            if (isCorrect) {
                score += points;
            } else {
                score -= points;
            }

            setTimeout(() => {
                let continueBtn = document.getElementById("continue-btn");
                continueBtn.textContent = "Continue";
                continueBtn.style.display = "block"; // ✅ reveal it

                continueBtn.addEventListener("click", () => {
                    overlay.remove();
                    cell.classList.add("used");
                    cell.style.pointerEvents = "none";
                    cell.textContent = "";
                    document.getElementById("score").textContent = score;

                    let remaining = document.querySelectorAll(".question-cell:not(.used)");
                    if (remaining.length === 0) {
                        showEndScreen();
                    }
                });
            }, 500);
        });
    });
};