const shelvesReducerDefaultState = [];

export default (state = shelvesReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_SHELVES':
      return [   
        ...action.shelves
    ] 
    case 'MOVE_BOOK_BETWEEN_SHELVES':
      return [   
        ...action.shelves
    ] 
    default:
      return state;
  }
};