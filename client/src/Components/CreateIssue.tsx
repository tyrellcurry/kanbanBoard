import React, { useState } from "react";

const CreateIssue = ({ createIssue }: any) => {
  const [issue, setIssue] = useState({});

  const handleClick = () => {
    createIssue("test");
  };
  return (
    <div className="create_issue">
      <button data-testid="create_issue" onClick={handleClick}>+ Create new issue</button>
    </div>
  );
};

export default CreateIssue;
