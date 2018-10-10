
export default (books, book) => {
    const exist = books.filter((b) => b.id === book.id);
    if(exist.length > 0) {    
        return exist[0].shelf        
    } else {
        return book.shelf === undefined ? 'none' : book.shelf;
    }
}
