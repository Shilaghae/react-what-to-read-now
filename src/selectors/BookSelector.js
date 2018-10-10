
export default (books, book) => {
    const bookIsIn = books.filter((b) => b.id === book.id);
    if(bookIsIn.length > 0) {    
        return bookIsIn[0].shelf        
    } else {
        return book.shelf === undefined ? 'none' : book.shelf;
    }
}
