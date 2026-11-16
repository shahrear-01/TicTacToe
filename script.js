let cells = document.querySelectorAll(".cell");
let turn = document.getElementById("turn");
let restart = document.getElementById("restart");

let currentPlayer = "X";
let gameOver = false;

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(function(cell) {

    cell.addEventListener("click", function() {

        if (cell.innerText !== "" || gameOver) {
            return;
        }

        cell.innerText = currentPlayer;

        checkWinner();

        if (!gameOver) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            turn.innerText = "Player " + currentPlayer + "'s Turn";
        }

    });

});

function checkWinner() {

    for (let pattern of winningPatterns) {

        let a = cells[pattern[0]].innerText;
        let b = cells[pattern[1]].innerText;
        let c = cells[pattern[2]].innerText;

        if (a !== "" && a === b && b === c) {
            turn.innerText = "Player " + a + " Wins!";
            gameOver = true;
            return;
        }
    }

    let draw = true;

    cells.forEach(function(cell) {
        if (cell.innerText === "") {
            draw = false;
        }
    });

    if (draw) {
        turn.innerText = "It's a Draw!";
        gameOver = true;
    }
}

restart.addEventListener("click", function() {

    cells.forEach(function(cell) {
        cell.innerText = "";
    });

    currentPlayer = "X";
    gameOver = false;
    turn.innerText = "Player X's Turn";

});