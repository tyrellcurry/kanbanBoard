import React, { useState, FormEvent } from "react";

const Issue = ({ issue, deleteIssue, updateIssue }: any) => {
  const [editing, setEditing] = useState(false);

  const saveEditedIssue = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('I was clicked!')
    const formData = new FormData(event.currentTarget);
    const inputText = formData.get('edit') as string;

    console.log('Input Text:', inputText);
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
          <p data-testid="issue_title">{issue.issue}</p>
          <div>
            <button data-testid="edit_button" onClick={() => setEditing(true)}>
              edit
            </button>
            <button
              data-testid="delete_button"
              onClick={() => deleteIssue(issue.id)}>
              delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Issue;
