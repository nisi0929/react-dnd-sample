let knightPosition = [0, 0];
let observer = null;

const emitChange = () => {
  observer(knightPosition);
};

export const observe = (o) => {
  console.log(observer);
  if (observer) {
    throw new Error("実行されていません");
  }
  observer = o;
  emitChange();
};

export const moveKnight = (toX, toY) => {
  knightPosition = [toX, toY];
  emitChange();
};

export const canMoveKnight = (toX, toY) => {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  );
};
