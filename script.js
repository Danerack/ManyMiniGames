
function showSection(sectionId) {
    console.log("Showing section:", sectionId); // Debugging log

    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Update active link in sidebar
    const links = document.querySelectorAll('.sidebar ul li a');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick')?.includes(sectionId)) {
            link.classList.add('active');
        }
    });
}

// Call to show the home section by default
showSection('home');

function loadGame(game) {
    showSection('games'); // Ensure the games section is displayed

    console.log("Loading game:", game); // Debugging log

    const gameDetails = {
        FLAPPY: {
            title: "Flappy Bird",
            description     : "Navigate the bird through the pipes!",
            screenshot: "screenshots/flappyBirdSs.png",
            link: "JsGames/JsGames/FLAPPY.html"
        },
        MEMORY: {
            title: "Memory Game",
            description: "Match the pairs of cards!",
            screenshot: "screenshots/memorySs.png",
            link: "JsGames/JsGames/MEMORY.html"
        },
        RPS: {
            title: "Rock Paper Scissors",
            description: "Play against the computer!",
            screenshot: "screenshots/rpsSs.png",
            link: "JsGames/JsGames/RPS.html"
        },
        SNAKE: {
            title: "Snake Game",
            description: "Control the snake to eat the food!",
            screenshot: "screenshots/snakeSs.png",
            link: "JsGames/JsGames/SNAKE.html"
        },
        TICTACTOE: {
            title: "Tic Tac Toe",
            description: "Play against a friend or the computer!",
            screenshot: "screenshots/tttSs.png",
            link: "JsGames/JsGames/TICTACTOE.html"
        },
        ASTEROID: {
            title: "Asteroid Shooter",
            description: "Shoot asteroids and survive!",
            screenshot: "screenshots/asteroidSs.png",
            link: "JsGames/JsGames/ASTEROID.html"
        },
        SIMON: {
            title: "Simon Memory Game",
            description: "Repeat the sequence of lights and sounds!",
            screenshot: "screenshots/simonSs.png",
            link: "JsGames/JsGames/SIMON.html"
        },
        BREAKER: {
            title: "Brick Breaker",
            description: "Break all the bricks with your bouncing ball!",
            screenshot: "screenshots/breakerSs.png",
            link: "JsGames/JsGames/BRICKBREACK.html"
        },
        BUBBLES: {
            title: "BUBBLE",
            description: "Shoot bubbles to match colors—pop groups of 3+ to clear them before they reach the bottom!",
            screenshot: "screenshots/bubblesSs.png",
            link: "JsGames/JsGames/BUBBLES.html"
        }
    };




    const selectedGame = gameDetails[game];

    if (selectedGame) {
        document.getElementById("game-title").innerText = selectedGame.title;
        document.getElementById("game-description").innerText = selectedGame.description;
        document.getElementById("game-screenshot").src = selectedGame.screenshot;
        document.getElementById("play-button").href = selectedGame.link;

        // Highlight active game button
        const gameButtons = document.querySelectorAll('.horizontal-scroll button');
        gameButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('onclick')?.includes(game)) {
                button.classList.add('active');
            }
        });
    }
}
