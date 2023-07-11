import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext(); //? Destructure the createBook function from the BooksContext.

  const handleChange = (event) => {
    setTitle(event.target.value); //? Updates the title state.
  };
  const handleSubmit = (event) => {
    event.preventDefault(); //? Prevents the page from refreshing.
    createBook(title); //? Calls the createBook function from the BooksContext.
    setTitle(""); //? Resets the input field.
  };
  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title:</label>
        <input
          type="text"
          value={title}
          onChange={handleChange}
          className="input"
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default BookCreate;
