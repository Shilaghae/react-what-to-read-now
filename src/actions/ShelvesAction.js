import fixshelves from '../fixtures/shelves'

const setShelves = (shelves) => ({
    type: 'SET_SHELVES',
    shelves
});

export const startSetShelves = () => {
    return (dispatch) => {
        const cachedShelves = localStorage.getItem("shelves");
        let sv = fixshelves;
        if(cachedShelves) {
            sv = JSON.parse(cachedShelves)
        }
        return new Promise((resolve, reject) => {
            localStorage.setItem("shelves", JSON.stringify(sv));
            dispatch(setShelves(sv))
            resolve();
        })
    }
}

export const moveBook = (shelf_id, new_shelf_id, book_id) => {
    return (dispatch, getState) => {

        if(shelf_id !== new_shelf_id) {
            const new_shelves = [];

            getState().shelves.map((sv) => {
                if(sv.id === shelf_id) {
                    new_shelves.push ({
                        id: sv.id,
                        title: sv.title,
                        books: sv.books.filter((b) => b !== book_id)
                    })
                } else if(sv.id === new_shelf_id) {
                    new_shelves.push({
                        id: sv.id,
                        title: sv.title,
                        books: [...sv.books, book_id]
                    })
                } else {
                    new_shelves.push(sv);
                }
            })
            return new Promise((resolve, reject) => {
                localStorage.setItem("shelves", JSON.stringify(new_shelves));
                dispatch(setShelves(new_shelves))
                resolve();
            })
        }
    }
}