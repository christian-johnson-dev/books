import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

const BookList = () => {
  const { books } = useBooksContext(); //? Destructure the books array from the BooksContext.
  // Map over the books and display a BookShow component for each book.
  const bookList = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return (
    <div className="book-list">
      {bookList.length > 0 ? bookList : "No books yet!"}
    </div>
  );
};

export default BookList;
