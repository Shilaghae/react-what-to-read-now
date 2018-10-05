import fixbooks from '../fixtures/books'

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