let currentPlayer = 'X';
let moves = 0;
let gameActive = true;
let timerX, timerO;
const timerDuration = 60; 
let timeLeftX = timerDuration;
let timeLeftO = timerDuration;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let cells = document.querySelectorAll('.cell');
let statusDisplay = document.getElementById('status');
let timerDisplayX = document.getElementById('timerX');
let timerDisplayO = document.getElementById('timerO');

timerDisplayX.textContent = `Time left for Player X: ${timerDuration}s`;
timerDisplayO.textContent = `Time left for Player O: ${timerDuration}s`;


function startTimer() {
    if (currentPlayer === 'X') {
        timerX = setInterval(updateTimerX, 1000);
    } else {
        timerO = setInterval(updateTimerO, 1000);
    }
}

function updateTimerX() {
    timeLeftX--;
    timerDisplayX.textContent = `Time left for Player X: ${timeLeftX}s`;

    if (timeLeftX === 0) {
        clearInterval(timerX);
        statusDisplay.textContent = 'Player X ran out of time! Player O wins!';
        gameActive = false;
    }
}


function updateTimerO() {
    timeLeftO--;
    timerDisplayO.textContent = `Time left for Player O: ${timeLeftO}s`;

    if (timeLeftO === 0) {
        clearInterval(timerO);
        statusDisplay.textContent = 'Player O ran out of time! Player X wins!';
        gameActive = false;
    }
}

function cellClicked(cellIndex) {
    if (!gameActive || cells[cellIndex].textContent !== '') return;

    clearInterval(timerX);
    clearInterval(timerO);

    cells[cellIndex].textContent = currentPlayer;
    moves++;

    if (checkWin()) {
        statusDisplay.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (moves === 9) {
        statusDisplay.textContent = 'It\'s a draw!';
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;

    startTimer();
}

function checkWin() {
    for (let condition of winningConditions) {
        let [a, b, c] = condition;

        
        if (cells[a].textContent !== '' &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent) {
            
            return true; 
        }
    }

    return false; 
    
}

function resetGame() {
    currentPlayer = 'X';
    moves = 0;
    gameActive = true;
    timeLeftX = timerDuration;
    timeLeftO = timerDuration;
    statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;
    timerDisplayX.textContent = `Time left for Player X: ${timerDuration}s`;
    timerDisplayO.textContent = `Time left for Player O: ${timerDuration}s`;

    clearInterval(timerX);
    clearInterval(timerO);

    cells.forEach(cell => {
        cell.textContent = '';
    });

    startTimer();
}
