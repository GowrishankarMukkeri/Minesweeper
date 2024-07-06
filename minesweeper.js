export const createBoard = (size, mines) => {
  const board = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.dataset.status = "hidden";
      const tile = {
        div,
      };
      row.push(tile);
    }
    board.push(row);
  }
  return board;
};
