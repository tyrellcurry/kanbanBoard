import React, { useState, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Issue = ({ issue, deleteIssue, updateIssue }: any) => {
  const [editing, setEditing] = useState(false);
  const [editingMenu, setEditingMenu] = useState(false);

  const saveEditedIssue = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputText = formData.getAll("edit");
    updateIssue(issue.id, inputText);
    setEditing(false);
  };
  return (
    <div className="issue" data-testid="issue">
      {editing ? (
        <div>
          <form onSubmit={saveEditedIssue}>
            <input name="edit" type="text" data-testid="title_input" />
            <textarea name="edit" data-testid="title_description"></textarea>
            <button data-testid="save_input">Save</button>
          </form>
        </div>
      ) : (
        <div className="contents">
          <div className="edit_menu">
            <button onClick={() => setEditingMenu(!editingMenu)}><FontAwesomeIcon icon={faEllipsis} /></button>
          </div>
          {editingMenu && (
            <div className="editing">
              <button
                data-testid="edit_button"
                onClick={() => setEditing(true)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                data-testid="delete_button"
                onClick={() => deleteIssue(issue.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          )}
          <h3 data-testid="issue_title">{issue.issueTitle}</h3>
          <h3 data-testid="issue_description">{issue.issueDescription}</h3>
        </div>
      )}
    </div>
  );
};

export default Issue;
