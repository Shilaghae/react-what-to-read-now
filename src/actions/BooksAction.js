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

export const moveBooksBetweenShelves = (change) => {
    const book = {
        id : change.book.id,
        title : change.book.title,
        subtitle : change.book.subtitle,
        authors : change.book.authors,
        shelf : change.new_shelf,
        imageLinks : change.book.imageLinks,
    };
    return (dispatch, getState) => {
        const newSetBooks = getState().books.filter((b) => b.id !== book.id)
        newSetBooks.push(book)
        localStorage.setItem("books", JSON.stringify(newSetBooks));
        return dispatch(startSetBooks(newSetBooks))
    }
}

const changeBookSet = (book) => ({
    type: 'ADD_BOOKS_TO_SET',
    book
});

export const addBookToShelf = (change) => {
    const book = {
        id : change.book.id,
        title : change.book.title,
        subtitle : change.book.subtitle,
        authors : change.book.authors,
        shelf : change.new_shelf,
        imageLinks : change.book.imageLinks,
    };
    const cached = localStorage.getItem("books");
    let books = [];
    if(cached !== null) {
        books = JSON.parse(cached)
    }
    return (dispatch, getState) => {
        const newSetBooks = books.filter((b) => b.id !== book.id)
        newSetBooks.push(book)
        localStorage.setItem("books", JSON.stringify(newSetBooks));
        dispatch(changeBookSet(book))
    }
}


