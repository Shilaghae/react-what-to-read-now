const booksReducerDefaultState = [];

export default (state = booksReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return [
        ...action.books
      ]
    case 'ADD_BOOKS_TO_SET':
      return [
        ...state,
        action.book
      ]
    default:
      return state;
  }
};