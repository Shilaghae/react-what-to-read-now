const searchReducerDefaultState =  {
    query: '',
    results: []
  };

export default (state = searchReducerDefaultState, action) => {
  switch (action.type) {
    case 'QUERY':
        return {        
            query: action.query,
            results: action.results
        };
    default:
        return state;
  }
};