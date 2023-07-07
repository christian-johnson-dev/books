import React from "react";
import { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
  //*---State---*//
  console.log(book.title);
  const [title, setTitle] = useState(book.title);

  //*---Event Handlers---*//
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label htmlFor="">Title</label>
      <input
        type="text"
        className="input"
        onChange={handleChange}
        value={title}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
