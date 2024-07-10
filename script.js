import {
  createBoard,
  revealTile,
  markTile,
  TILE_STATUSES,
} from "./minesweeper.js";
// create a board with n x n squares with m mines

const BOARD_SIZE = 4;
const NUMBER_OF_MINES = 3;
const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);

const boardElement = document.querySelector(".board");
boardElement.style.setProperty("--size", BOARD_SIZE);
board.forEach((row) => {
  row.forEach((tile) => {
    boardElement.append(tile.div);
    tile.div.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      console.log(tile);

      console.log("right click mark tile");
      markTile(tile);
      setTotalMines();
    });
    tile.div.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.button === 0) {
        revealTile(tile);
      }
    });
  });
});

document.querySelector(`[data-mine-count]`).textContent = NUMBER_OF_MINES;
function setTotalMines() {
  const mines = board.reduce((acc, row) => {
    return (
      acc + row.filter((tile) => tile.status == TILE_STATUSES.MARKED).length
    );
  }, 0);
  document.querySelector(`[data-mine-count]`).textContent =
    NUMBER_OF_MINES - mines;

  console.log(mines);
}
