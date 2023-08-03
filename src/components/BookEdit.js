import { useState } from "react";

import useBooksContext from "../hooks/use-books-context";

const BookEdit = ({ book, toggleEdit }) => {
  const [title, setTitle] = useState(book.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const { editBookByID } = useBooksContext();
  const handleSubmit = (event) => {
    event.preventDefault();
    toggleEdit();
    editBookByID(book.id, title);
  };

  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label htmlFor="">Edit title</label>
        <input type="text" value={title} onChange={handleChange} />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
};

export default BookEdit;
