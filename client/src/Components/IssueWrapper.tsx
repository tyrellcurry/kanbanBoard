import React, {useEffect, useState} from "react";
import CreateIssue from "./CreateIssue";
import uuid from "react-uuid";
import Issue from "./Issue";

interface Issue {
  id: string;
  issue: string;
  category: string;
  isEditing: boolean;
}

const IssueWrapper = () => {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    issues. length > 0 &&
    console.log(issues)
  }, [issues])

  const createIssue = (issue: string) => {
    const newIssue: Issue = { id: uuid(), issue: issue, category: 'todo', isEditing: false };
    setIssues([...issues, newIssue]);
  };

  const deleteIssue = (id: string) => {
    setIssues(issues.filter(issue => issue.id !== id));
  }
  
  return (
    <div className="issue_wrapper">
      {
        issues.map((issue, index) => (        
          <Issue issue={issue} key={index} deleteIssue={deleteIssue} />
        ))
      }
      <CreateIssue createIssue={createIssue} />
    </div>
  );
};

export default IssueWrapper;
