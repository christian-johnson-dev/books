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
  const editBook = () => {};
  const deleteBookById = (id) => {
    console.log("Need to delete book with id:", id);
    const updatedBooks = books.filter((book) => book.id !== id); //
    setBooks(updatedBooks);
  };
  return (
    <div className="App">
      <h1>Rollcall</h1>
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};
export default App;
