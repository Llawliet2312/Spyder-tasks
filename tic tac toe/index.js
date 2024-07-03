
let currentPlayer = 'X';
let moves = 0;
let gameActive = true;
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

function cellClicked(cellIndex) {
    if (!gameActive || cells[cellIndex].textContent !== '') return;

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
}

function checkWin() {
    for (let condition of winningConditions) {
        let [a, b, c] = condition;
        if (
            cells[a].textContent !== '' &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    currentPlayer = 'X';
    moves = 0;
    gameActive = true;
    statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;
    cells.forEach(cell => {
        cell.textContent = '';
    });
}