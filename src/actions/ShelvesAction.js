import fixshelves from '../fixtures/shelves'

const setShelves = (shelves = fixshelves) => ({
    type: 'SET_SHELVES',
    shelves
});

export const startSetShelves = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(setShelves())
            resolve();
        })
    }
}