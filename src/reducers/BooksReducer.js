const booksReducerDefaultState = [];

export default (state = booksReducerDefaultState, action) => {
  console.log('action book', action.book)
  console.log('action book', [...state, action.book])
  switch (action.type) {
    case 'SEARCH_BOOKS':
      return [
        ...action.books
      ]
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