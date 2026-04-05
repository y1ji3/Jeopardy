let createEndPage = () => {
    return `
        <div id="end-page">
            <h1>Game Over!</h1>
            <p id="final-score">Final Score: $${score}</p>
            <button id="play-again">Play Again</button>
            <button id="exit-btn">Exit</button>
        </div>
    `;
};