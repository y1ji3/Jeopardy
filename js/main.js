let main = document.getElementById("main");

let categories = {};
let score = 0;

let delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let nextQuestion = () => {
    main.innerHTML = createBoard(categories);

    let cells = document.querySelectorAll(".question-cell");
    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            let categoryName = cell.dataset.category;
            let index = parseInt(cell.dataset.index);
            let points = parseInt(cell.dataset.points);
            let question = categories[categoryName][index];

            console.log("categoryName:", categoryName);
            console.log("index:", index);
            console.log("all categories:", categories);
            console.log("question found:", categories[categoryName][index]);

            showQuestion(question, points, cell, categoryName);
        });
    });
};

let startGame = async () => {
    score = 0; 
    // main.innerHTML = `<div id="loading">Loading questions..</div>`
    main.innerHTML = "";

   const allCategories = [
        { name: "Animals",   id: 27 },
        { name: "Computers", id: 18 },
        { name: "Comics",    id: 29 },
        { name: "Cartoons",  id: 32 },
        { name: "Anime",     id: 31 },
        { name: "Music",     id: 12 },
        { name: "History",   id: 23 },
        { name: "Sports",    id: 21 },
        { name: "Science",   id: 17 },
        { name: "Geography", id: 22 },
    ];

    const selected = shuffleArray(allCategories).slice(0, 6);
    const total = selected.length;
    categories = {};

    for (let i = 0; i < selected.length; i++) {
        let cat = selected[i];
        main.innerHTML = `
            <div id="loading">
                <p>Loading questions...</p>
                <p id="cat-count">${i + 1}/${total} categories loaded</p>
            </div>
        `;
        const questions = await fetchQuestions(cat.id);
        console.log(`Expected: ${cat.name}, Got: ${questions[0].category}`);
        categories[cat.name] = questions;
        await delay(5000);
    }

    nextQuestion();
};

let showEndScreen = () => {
    main.innerHTML = createEndPage();
    document.getElementById("play-again").addEventListener("click", () => {
        startGame();
    });

    document.getElementById("exit-btn").addEventListener("click", () => {
        initialize();
    });
};

let initialize = () => {
    main.innerHTML = createHomePage();

    let start_btn = document.getElementById("start-game");
    start_btn.onclick = startGame;
};

initialize();