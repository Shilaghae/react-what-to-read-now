const booksReducerDefaultState = [];

export default (state = booksReducerDefaultState, action) => {
  switch (action.type) {
    case 'SEARCH_BOOKS':
      return [
        ...action.books
      ]
    case 'SET_BOOKS':
      return [
        ...state,
        ...action.books
      ]
    case 'ADD_BOOK':
      return [
        ...state,
        ...action.book
      ]
    default:
      return state;
  }
};