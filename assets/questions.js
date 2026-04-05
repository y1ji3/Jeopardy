let fetchQuestions = async (categoryId) => {
    const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${categoryId}&difficulty=medium&type=multiple`);
    const data = await response.json();
    console.log(data.results)
    return data.results;
}