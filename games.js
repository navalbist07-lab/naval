// Games Page JavaScript

// Game modal functionality
const modal = document.getElementById("gameModal");
const gameCards = document.querySelectorAll(".game-card");
const closeBtn = document.querySelector(".close");
const gameFrame = document.getElementById("gameFrame");

// Function to open modal with game
function openGame(gameName) {
    // Map game names to their respective HTML files
    const gameFiles = {
        'brick-breaker': 'mini-games/brick-breaker.html',
        'target-shooter': 'mini-games/target-shooter.html',
        'neon-racer': 'mini-games/neon-racer.html',
        'snake-evolution': 'mini-games/snake-evolution.html',
        'space-shooter': 'mini-games/space-shooter.html',
        'memory-flip': 'mini-games/memory-flip.html',
        'hoop-shot': 'mini-games/hoop-shot.html',
        'jump-dash': 'mini-games/jump-dash.html',
        'quick-math': 'mini-games/quick-math.html',
        'aim-trainer': 'mini-games/aim-trainer.html'
    };
    
    const gameFile = gameFiles[gameName] || 'mini-games/brick-breaker.html';
    gameFrame.src = gameFile;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

// Add event listeners to game cards
gameCards.forEach(card => {
    card.addEventListener("click", function() {
        const gameName = this.getAttribute("data-game");
        openGame(gameName);
    });
});

// Close modal when clicking on close button
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
    gameFrame.src = "";
    document.body.style.overflow = "auto";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        gameFrame.src = "";
        document.body.style.overflow = "auto";
    }
});