import React, { useState, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEllipsis, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { useDrag } from 'react-dnd';

const Issue = ({ issue, deleteIssue, updateIssue }: any) => {
  const [editing, setEditing] = useState(false);
  const [editingMenu, setEditingMenu] = useState(false);
  const [{ isDragging }, drag] = useDrag({
    type: 'ISSUE', // Ensure type is defined
    item: { id: issue.id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;
  const saveEditedIssue = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const editedTitle = formData.get("title") as string; // Assuming 'edit' is the name of the input field for title
    const editedDescription = formData.get("description") as string; // Assuming 'edit_description' is the name of the textarea for description
    updateIssue(issue.id, { issueTitle: editedTitle, issueDescription: editedDescription });
    setEditing(false);
    setEditingMenu(false);
  };
  return (
    <div className="issue" data-testid="issue" ref={drag} style={{ opacity }}>
      {editing ? (
        <div>
          <form className="edit" onSubmit={saveEditedIssue}>
            <input name="title" type="text" data-testid="title_input" placeholder="title" />
            <textarea name="description" data-testid="title_description" placeholder="description"></textarea>
            <button data-testid="save_input"><FontAwesomeIcon icon={faFloppyDisk} />Save</button>
          </form>
        </div>
      ) : (
        <div className="contents">
          <div className="edit_menu">
            <button data-testid="edit_ellipsis" onClick={() => setEditingMenu(!editingMenu)}><FontAwesomeIcon icon={faEllipsis} /></button>
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
          <p data-testid="issue_description">{issue.issueDescription}</p>
        </div>
      )}
    </div>
  );
};

export default Issue;
