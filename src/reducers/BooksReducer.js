const booksReducerDefaultState = [];

export default (state = booksReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_SHELVES':
      return [
        ...state,
        ...action.shelves
      ]
    case 'SET_BOOKS':
      return [
        ...state,
        ...action.books
      ]
    default:
      return state;
  }
};