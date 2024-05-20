import React, { useState, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Issue = ({ issue, deleteIssue, updateIssue }: any) => {
  const [editing, setEditing] = useState(false);

  const saveEditedIssue = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputText = formData.get('edit') as string;
    updateIssue(issue.id, inputText);
    setEditing(false);
  };
  return (
    <div className="issue" data-testid="issue">
      {editing ? (
        <div>
          <form onSubmit={saveEditedIssue}>
            <input name="edit" type="text" data-testid="title_input" />
            <button data-testid="save_input">Save</button>
          </form>
        </div>
      ) : (
        <div>
          <div>
          <button data-testid="edit_button" onClick={() => setEditing(true)}>
          <FontAwesomeIcon icon={faEdit} />
          </button>
            <button
              data-testid="delete_button"
              onClick={() => deleteIssue(issue.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          <p data-testid="issue_title">{issue.issue}</p>
        </div>
      )}
    </div>
  );
};

export default Issue;
