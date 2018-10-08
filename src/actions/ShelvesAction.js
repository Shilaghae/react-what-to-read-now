import fixshelves from '../fixtures/shelves'

const setShelves = (shelves = fixshelves) => ({
    type: 'SET_SHELVES',
    shelves
});

export const startSetShelves = (shelves) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(setShelves(shelves))
            resolve();
        })
    }
}

export const moveBook = (shelf_id, new_shelf_id, book_id) => {
    return (dispatch, getState) => {

        if(shelf_id !== new_shelf_id) {
            const new_shelves = getState().shelves;

            new_shelves[new_shelf_id - 1] = {
                id: getState().shelves[new_shelf_id - 1].id,
                title: getState().shelves[new_shelf_id - 1].title,
                books: [...getState().shelves[new_shelf_id - 1].books, book_id]
            }
            
            new_shelves[shelf_id - 1] = {
                id: getState().shelves[shelf_id - 1].id,
                title: getState().shelves[shelf_id - 1].title,
                books: getState().shelves[shelf_id - 1].books.filter((b) => b !== book_id)
            }
            return new Promise((resolve, reject) => {
                dispatch(setShelves(new_shelves))
                resolve();
            })
        }
    }
}