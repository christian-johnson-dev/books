import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

const BookList = ({ books, onDelete, onEdit }) => {
  // Use the useContext hook to access the value of the BooksContext.
  const value = useContext(BooksContext);
  // Map over the books and display a BookShow component for each book.
  const bookList = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return (
    <div className="book-list">
      {value}
      {bookList.length > 0 ? bookList : "No books yet!"}
    </div>
  );
};

export default BookList;
