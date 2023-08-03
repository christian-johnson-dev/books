import { useState } from "react";
import BookEdit from "./BookEdit";

import useBooksContext from "../hooks/use-books-context";

const BookShow = ({ book }) => {
  const { deleteBookByID } = useBooksContext();
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteBookByID(book.id);
  };
  const handleEditClick = () => {
    setShowEdit((showEdit) => !showEdit);
  };

  const toggleEdit = () => {
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt="book cover"
      />
      {showEdit ? <BookEdit book={book} toggleEdit={toggleEdit} /> : book.title}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
