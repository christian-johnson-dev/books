import BookEdit from "./BookEdit";
import { useState } from "react";

const BookShow = ({ book, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);
  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };
  const handleDelete = () => {
    onDelete(book.id);
  };
  return (
    <div className="book-show">
      <div className="actions">
        <button className="edit" onClick={toggleEdit}>
          edit
        </button>
        <button className="delete " onClick={handleDelete}>
          Delete
        </button>
      </div>
      {showEdit ? <BookEdit /> : <h3>{book.title}</h3>}
    </div>
  );
};

export default BookShow;
