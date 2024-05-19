import React, {useEffect, useState} from "react";
import CreateIssue from "./CreateIssue";
import uuid from "react-uuid";
import Issue from "./Issue";

interface Issue {
  id: string;
  issue: string;
  category: string;
}

const IssueWrapper = () => {
  const [issues, setIssues] = useState<Issue[]>([]);

  const createIssue = (issue: string) => {
    const newIssue: Issue = { id: uuid(), issue: issue, category: 'todo'};
    setIssues([...issues, newIssue]);
  };

  const deleteIssue = (id: string) => {
    setIssues(issues.filter(issue => issue.id !== id));
  }

  const updateIssue = (id: string, inputText: string) => {
    setIssues(issues.map(issue => issue.id === id ? {...issue, issue: inputText} : issue))
  }

  return (
    <div className="issue_wrapper">
      {/* <Issue issue={'test'} /> */}
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
