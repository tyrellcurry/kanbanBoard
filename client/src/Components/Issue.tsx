import React, { useState } from "react";

const Issue = ({ issue, deleteIssue }: any) => {

  const [editing, setEditing] = useState(false);
  const editIssue = () => {
    console.log('edit issue');
  }
  return (
    <div className="issue" data-testid="issue">
      <p data-testid="issue_title">{issue.issue}</p>
      <div>
        <button data-testid="edit_button" onClick={editIssue}>edit</button>
        <button data-testid="delete_button" onClick={() => deleteIssue(issue.id)}>delete</button>
      </div>
    </div>
  );
};

export default Issue;
