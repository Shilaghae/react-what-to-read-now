import fixbooks from '../fixtures/books'
import {search} from '../api/BookApi'

const setBooks = (books = fixbooks) => ({
    type: 'SET_BOOKS',
    books
});

export const startSetBooks = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch(setBooks())
                resolve();
            }, 0)
        })
    }
}

const searchesBooks = (books) => ({
    type: 'SEARCH_BOOKS',
    books
});

export const startSearchBooks = (query) => {
    return (dispatch, getState) => {
        return search(query).then((result) => {
            console.log('result', result)
            const books = []
            result.map((result) => {
                books.push({
                    title : result.title,
                    id: result.id,
                    imageLinks: result.imageLinks
                })
            })
            return dispatch(searchesBooks(books));
        })
    }
}