import BookEdit from "./BookEdit";
import { useState } from "react";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };
  const handleDelete = () => {
    onDelete(book.id);
  };
  const handleEditSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
    setShowEdit(false);
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
      {showEdit ? (
        <BookEdit book={book} onSubmit={handleEditSubmit} />
      ) : (
        <h3>{book.title}</h3>
      )}
    </div>
  );
};

export default BookShow;
