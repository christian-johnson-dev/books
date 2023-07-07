import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]); //* Not a book but an array of all the books.

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });
    const updatedBooks = [...books, response.data];
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
