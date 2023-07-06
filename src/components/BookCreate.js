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
    <div>
      <h2>Add a book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title:</label>
        <input type="text" value={title} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default BookCreate;
