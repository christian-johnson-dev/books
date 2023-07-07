import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]); //* Not a book but an array of all the books.

  const createBook = (title) => {
    console.log("Need to add book with:", title);
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 1000000),
        title: title,
      },
    ];
    console.log(updatedBooks);
    setBooks(updatedBooks);
  };
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        //? If the book id matches the id passed in, then update the title.
        return {
          ...book,
          title: newTitle,
        };
      }
      //? Otherwise, just return the book as is.
      return book;
    });
    setBooks(updatedBooks);
  };
  const deleteBookById = (id) => {
    console.log("Need to delete book with id:", id);
    const updatedBooks = books.filter((book) => book.id !== id); //
    setBooks(updatedBooks);
  };
  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};
export default App;
