import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]); //* Not a book but an array of all the books.

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.patch(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    console.log("Updated title: ", response.data.title);

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          title: newTitle,
        };
      }
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
