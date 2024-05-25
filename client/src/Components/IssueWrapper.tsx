import React, { useEffect, useState } from "react";
import CreateIssue from "./CreateIssue";
import uuid from "react-uuid";
import Issue from "./Issue";
import { useDrag } from 'react-dnd'

interface Issue {
  id: string;
  issueTitle: string;
  issueDescription: string;
  category: string;
}

const IssueWrapper = () => {
  const [issues, setIssues] = useState<Issue[]>([]);

  const createIssue = (issueTitle: string, issueDescription: string) => {
    const newIssue: Issue = { id: uuid(), issueTitle: issueTitle, issueDescription: issueDescription, category: 'todo' };
    setIssues([...issues, newIssue]);
  };

  const deleteIssue = (id: string) => {
    setIssues(issues.filter(issue => issue.id !== id));
  }

  const updateIssue = (id: string, updatedIssue: Partial<Issue>) => {
    console.log(updatedIssue)
    setIssues(issues.map(issue =>
      issue.id === id ? { ...issue, ...updatedIssue } : issue
    ));
  };

  return (
    <div className="issue_wrapper">
      {
        issues.map((issue, index) => (
          <Issue issue={issue} key={index} deleteIssue={deleteIssue} updateIssue={updateIssue} />
        ))
      }
      <CreateIssue createIssue={createIssue} />
    </div>
  );
};

export default IssueWrapper;
