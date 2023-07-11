import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]); //* Not a book but an array of all the books.

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };
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
          ...response.data,
        };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => book.id !== id); //
    setBooks(updatedBooks);
  };

  const valueToShare = {
    //* Note: these are identical key-value pairs so we can use the shorthand syntax. "books : books" is the same as "books"
    books,
    fetchBooks,
    createBook,
    editBookById,
    deleteBookById,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider }; // named export
export default BooksContext; // default export
