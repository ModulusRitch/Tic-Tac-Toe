function displayGame() {
    const cells = document.querySelectorAll(".cell");
    const turn = document.querySelector(".turn");

    function render(board) {
        cells.forEach((cell, index) => {
            cell.textContent = board[index];
        });
    }

    function showCurrentPlayer(player) {
        turn.textContent = `${player}'s Turn`;
    }

    function showGameState(state) {
        if (!state.ended) {
            showCurrentPlayer(state.currentPlayer);
            return;
        }

        if (state.winner) {
            turn.textContent = `Game Over!! ${state.winner} Won`;
        }
        else if (state.draw) {
            turn.textContent = "Game Draw!! Nobody Wins :(";
        }
        
    }

    function renderReset(board){
        render(board);
        showCurrentPlayer("X")
        cells.forEach(cell => {
        cell.classList.remove("winner");
    });
    }

    function highlightWinner(winningCells){
        winningCells.forEach(index =>{
            cells[index].classList.add("winner")
        })
    }
    return {
        render,
        showCurrentPlayer,
        showGameState,
        renderReset,
        highlightWinner
    };
}

export { displayGame };