function createGame() {
  let board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];
  let winnningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  let winner = "";
  let currPlayer = "X";
  let gameOver = false;
  function playMove(index) {
    if (gameOver || board[index] !== "") {
      return 0;
    }
    board[index] = currPlayer;
    if (checkWinner()) {
      gameOver = true;
      winner = currPlayer;
      return;
    }
    if(!board.includes("")){
      gameOver = true;
      return;
    }
    currPlayer = currPlayer === "X" ? "O" : "X";
  }
  function checkWinner() {
    return winnningCombination.some(([a, b, c]) =>
      board[a] === currPlayer &&
      board[b] === currPlayer &&
      board[c] === currPlayer
    );
  }

  function getBoard() {
    return [...board];
  }

  function getPlayer() {
    return currPlayer;
  }
  function getGameState() {
        if (winner !== "") {
            return {
                ended: true,
                winner: winner,
                draw: false
            };
        }

        if (gameOver) {
            return {
                ended: true,
                winner: null,
                draw: true
            };
        }

        return {
            ended: false,
            winner: null,
            draw: false
        };
    }
      function reset() {
    board = [
      "", "", "",
      "", "", "",
      "", "", ""
    ];
    gameOver = false;
    currPlayer = "X";
    winner = "";
  }
  return { playMove, getBoard, reset, getPlayer, getGameState };

}


  export { createGame };