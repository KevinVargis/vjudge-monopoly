# Algorithm Analysis and Design Project - Concept Assesment Board Game

- Prerequisites 
    - Make sure you have chrome in version 87(latest as of 21-11-2020), else download the required chromedriver version from chromium.
    - Install selenium and flask using pip-install on python3.

- Running
    - Open the folder in terminal, and run `python3 app.py`.
    - Go to your browser and enter `localhost:8080` into the address bar.
    - Enter details and enjoy!

- Aim
    - Make assessment of concepts more engaging by incorpotating the evaluation of knowledge possesed regarding common algorithmic problems and their various solutions in a chance-based board game.
    - This game includes elements from games like Monopoly to create an interactive and competitive environment.

- Objective
    - The game has a Grading system as specified.
        
        **Grading system**

            A    200 - 180

            A-   180 - 160

            B    160 - 140

            B-   140 - 120

            C    120 - 100

            C-   100 - 80

            D    80 - 60

            F    < 60

    - The objective of the Game is to increase your grade by demonstrating your knowlidge in a fun way.
    - Each player starts off with a score of 60(starts with F grade)
    - Every easy question is worth 4 points
    - Every mediums question is worth 8 points
    - Every hard question is worth 12 points
    - 25% penalty on a wrong attempt
    - If you pass on a square that is owned by someone else, you have to pay a rent of 12.5% of the value of the level they currently own.
    - If at any point a player has a total score that is negative, they get disqualified from the game.

- Rules of the game
    - Single player with leaderboard
    - Path square with 20 question blocks, 4 special blocks
    - 4 max players
    - One on the special corners is a start
    - On landing on a problem square, the player gets an option to pass or attempt the question.
    - On wrong submission, the player loses 25% of the points they would have gotten on solving.
    - Initially all the questions available are of easy level.
    - On correct submission, the next level up is unlocked for future players landing here to try and score.
    - If someone lands on a square that has had a level solved already, they can now solve the next level and attempt to steal the previous solver’s points.
    - If you land on a block that's already solved till hard, you can no longer solve it.
    - Game ends when all the players reach a consensus or all the questions have been solved.

    - Special Squares
        - You can attempt (1) question with no penalty(extra try).
        - Solve a higher level question even if you haven’t solved the layers
        - You can block a question from one attempted try
        - Start block gives you 2 points
