import React, { useState, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const CreateCategory = ({ addCategory }: any) => {
  const [editing, setEditing] = useState(false);

  const saveCategory = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputText = formData.get("edit") as string;
    addCategory(inputText);
    setEditing(false);
  };
  return (
    <div>
      {editing ? (
        <form onSubmit={saveCategory}>
          <input data-testid="category_name_input" name="edit" type="text" />
          <button data-testid="save_category">
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button type="button" onClick={() => {setEditing(false)}}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </form>
      ) : (
        <button data-testid="add_category" onClick={() => setEditing(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      )}
    </div>
  );
};

export default CreateCategory;
