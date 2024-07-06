import { createBoard } from "./minesweeper.js";
// create a board with n x n squares with m mines

const BOARD_SIZE = 2;
const NUMBER_OF_MINES = 10;
const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);

const boardElement = document.querySelector(".board");
boardElement.style.setProperty("--size", BOARD_SIZE);
board.forEach((row) => {
  row.forEach((tile) => {
    boardElement.append(tile.div);
  });
});
