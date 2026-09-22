import { createGame } from "./game.js";
import { displayGame } from "./display.js";

const game = createGame();
const display = displayGame();

document.querySelectorAll(".cell").forEach((cell, index) => {
    cell.addEventListener("click", () => {
        game.playMove(index);

        display.render(game.getBoard());

        const state = game.getGameState();

        if (state.ended) {
            display.showGameState(state);
            display.highlightWinner(game.getWinningCells());
        }
        else {
            display.showCurrentPlayer(game.getPlayer());
        }
    });
});

document.querySelector(".reset").addEventListener("click", () => {
    game.reset();
    display.renderReset(game.getBoard())
});