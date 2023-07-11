import { useEffect, useContext } from "react";
import BooksContext from "./context/books";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};
export default App;
