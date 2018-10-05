const shelvesReducerDefaultState = [];

export default (state = shelvesReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_SHELVES':
      return [
        ...state,
        ...action.shelves
      ]
    default:
      return state;
  }
};