import BookEdit from "./BookEdit";
import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };
  const handleDelete = () => {
    deleteBookById(book.id);
  };
  const handleEditSubmit = () => {
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
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt="bookcover"
      />
      {showEdit ? (
        <BookEdit book={book} onSubmit={handleEditSubmit} />
      ) : (
        <h3>{book.title}</h3>
      )}
    </div>
  );
};

export default BookShow;
