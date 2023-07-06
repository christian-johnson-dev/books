import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value); //? Updates the title state.
  };
  const handleSubmit = (event) => {
    event.preventDefault(); //? Prevents the page from refreshing.
    onCreate(title); //? Calls the function passed down from App.js
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
