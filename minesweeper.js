export const TILE_STATUSES = {
  HIDDEN: "hidden",
  MINE: "mine",
  NUMBER: "number",
  MARKED: "marked",
};

export const createBoard = (size, mines) => {
  const minePositions = generateMinePositions(size, mines);
  console.log(minePositions);
  const board = [];
  for (let x = 0; x < size; x++) {
    const row = [];
    for (let y = 0; y < size; y++) {
      const div = document.createElement("div");
      div.dataset.status = TILE_STATUSES.HIDDEN;
      const tile = {
        x,
        y,
        div,
        mine: minePositions.some(postionMatch.bind(null, { x, y })),
        set status(value) {
          this.div.dataset.status = value;
        },
        get status() {
          return this.div.dataset.status;
        },
      };
      row.push(tile);
    }
    board.push(row);
  }
  return board;
};

const generateMinePositions = (size, numberOfMines) => {
  const positions = [];

  while (positions.length < numberOfMines) {
    const position = {
      x: randomNumber(size),
      y: randomNumber(size),
    };
    if (!positions.some(postionMatch.bind(null, position))) {
      positions.push(position);
    }
  }
  return positions;
};
const postionMatch = (a, b) => {
  return a.x === b.x && a.y === b.y;
};
const randomNumber = (size) => {
  return Math.floor(Math.random() * size);
};
export const revealTile = (tile) => {
  console.log(tile);
  if (tile.status !== TILE_STATUSES.HIDDEN) return;
  tile.status = tile.mine ? TILE_STATUSES.MINE : TILE_STATUSES.NUMBER;
};

export const markTile = (tile) => {
  if (tile.status == TILE_STATUSES.NUMBER) return;
  tile.status =
    tile.status == TILE_STATUSES.MARKED
      ? TILE_STATUSES.HIDDEN
      : TILE_STATUSES.MARKED;
};
