//define action
const MOVE_RIGHT = "MOVE_RIGHT";
const MOVE_LEFT = "MOVE_LEFT";

//action creator
export const moveRight = oldArr => {
  const newArr = oldArr;
  newArr.unshift(0);
  newArr.pop();
  return { type: MOVE_RIGHT, newArr };
};
export const moveLeft = oldArr => {
  const newArr = oldArr;
  newArr.push(0);
  newArr.shift();
  return { type: MOVE_RIGHT, newArr };
};

//thunk

//reducer

const initialState = [0, 0, 0, 0, 1, 0, 0, 0, 0];

export const score = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_RIGHT:
      return action.newarr;
    case MOVE_LEFT:
      return action.newarr;
    default:
      return state;
  }
};
