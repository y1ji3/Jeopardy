Jeopardy!

A browser-based Jeopardy trivia game built with plain HTML, CSS, and JavaScript.

How to play
Click start! to begin. The game picks 6 random categories and loads 5 questions for each.
Pick any tile on the board ($100–$500).
Choose an answer from the multiple-choice options.
Correct answers add the tile's value to your score.
Wrong answers subtract it.
The game ends once every tile has been played. Then you can play again or exit.

Categories are drawn from: Animals, Computers, Comics, Cartoons, Anime, Music, History, Sports, Science, and Geography.

Running it

No installs, packages, or build steps needed.

sh
git clone https://github.com/y1ji3/Jeopardy.git
cd Jeopardy

Then open index.html in your browser.

Note: You'll need an internet connection, since questions are fetched live from the Open Trivia Database. Loading takes about 30 seconds because the game waits a few seconds between categories to stay within the API's rate limit.

Project structure
├── index.html            # Entry point
├── assets/
│   ├── style.css         # Styles
│   ├── questions.js      # Fetches questions from Open Trivia DB
│   └── arialnarrow.ttf   # Font
└── js/
    ├── main.js           # Game flow and scoring
    ├── helpers.js        # Utility functions
    └── screens/
        ├── home.js       # Start screen
        ├── board.js      # Question board
        ├── answer.js     # Question / answer popup
        └── end.js        # Game over screen
Credits

Trivia questions provided by the Open Trivia Database (CC BY-SA 4.0).
