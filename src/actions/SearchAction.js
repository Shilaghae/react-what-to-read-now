import {search} from '../api/BookApi'

const setQuery = (query, results) => ({
    type: 'QUERY',
    query,
    results
});

export const startQuery = (query) => {
    console.log('query', query)
    return (dispatch) => {
        const books = []
        return search(query).then((results) => {
            console.log('results', results)
            results.map((result) => {
                books.push({
                    title : result.title,
                    id: result.id,
                    imageLinks: result.imageLinks
                })
            })
            return dispatch(setQuery(query, books));
        }).catch((e) => {
            return dispatch(setQuery(query, []));
        })
    }
}

