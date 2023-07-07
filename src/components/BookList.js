import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
  // Map over the books and display a BookShow component for each book.
  const bookList = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return (
    <div className="book-list">
      {bookList.length > 0 ? bookList : "No books yet!"}
    </div>
  );
};

export default BookList;
