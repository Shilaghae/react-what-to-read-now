import {search} from '../api/BookApi'

const setQuery = (query, results) => ({
    type: 'QUERY',
    query,
    results
});

export const startQuery = (query = '') => {
    return (dispatch) => {
        return search(query).then((results) => {
            const books = []
            if(results.length > 0) {
                results.map((result) => {
                    books.push({
                        title : result.title,
                        id: result.id,
                        imageLinks: result.imageLinks
                    })
                })
                return dispatch(setQuery(query, books));
            }
        })
    }
}

