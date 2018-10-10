import fixbooks from '../fixtures/books'
import {search} from '../api/BookApi'

const setBooks = (books) => ({
    type: 'SET_BOOKS',
    books
});

export const startSetBooks = () => {
    const cached = localStorage.getItem("books");
    let books = fixbooks;
    if(cached !== null) {
        books = JSON.parse(cached)
    }
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                localStorage.setItem("books", JSON.stringify(books));
                dispatch(setBooks(books))
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

const changeBookSet = (book) => ({
    type: 'CHANGE_BOOKS_SET',
    book
});

export const startChangeBookSet = (book, new_shelf_id) => {
    console.log('new shlef id', new_shelf_id)
    book = {
        id : book.id,
        title : book.title,
        subtitle : book.subtitle,
        authors : book.authors,
        shelf_id : new_shelf_id,
        imageLinks : book.imageLinks,
    };
    console.log('new book', book)
    const cached = localStorage.getItem("books");
    let books = [];
    if(cached !== null) {
        books = JSON.parse(cached)
    }
    
    return (dispatch) => {
        if(books.filter((b) => b.id === book.id).length === 0) {
            books.push(book)
            localStorage.setItem("books", JSON.stringify(books));
            dispatch(changeBookSet(book))
        } else {
            const newSetBooks = books.filter((b) => b.id !== book.id)
            newSetBooks.push(book)
            localStorage.setItem("books", JSON.stringify(newSetBooks));
            dispatch(changeBookSet(book))
        }
        return new Promise((resolve) => {
            resolve();
        })
    }
}


