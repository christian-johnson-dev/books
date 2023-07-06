import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]); //* Not a book but an array of all the books.

  const createBook = (title) => {
    console.log("Need to add book with:", title);
  };
  const editBook = () => {};
  const deleteBook = () => {};
  return (
    <div className="App">
      <h1>Rollcall</h1>
      <BookList />
      <BookCreate onCreate={createBook} />
    </div>
  );
};
export default App;
