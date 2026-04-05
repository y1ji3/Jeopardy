let createBoard = (categories) => {
    const pointValues = [100, 200, 300, 400, 500];

    let headerCells = Object.keys(categories)
        .map(name => `<th>${name}</th>`)
        .join("");

    let rows = pointValues.map((points, i) => {
        let cells = Object.keys(categories).map(name => {
            let question = categories[name][i];
            return `
                <td class="question-cell" data-category="${name}" data-index="${i}" data-points="${points}">
                    $${points}
                </td>
            `;
        }).join("");

        return `<tr>${cells}</tr>`;
    }).join("");

    return `
        <h2 id="board-title">jeopardy!</h2>
        <div id="score-display">Score: $<span id="score">${score}</span></div>
        <table id="board">
            <thead>
                <tr id="categories">${headerCells}</tr>
            </thead>
            <tbody id="board-cells">
                ${rows}
            </tbody>
        </table>
    `;
};