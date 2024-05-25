import React, { useEffect, useState } from "react";
import CreateIssue from "./CreateIssue";
import uuid from "react-uuid";
import Issue from "./Issue";
import { useDrop, DropTargetMonitor } from 'react-dnd';

interface Issue {
  id: string;
  issueTitle: string;
  issueDescription: string;
  category: string;
}

interface DropProps {
  accept: string;
  drop: (item: any, monitor: DropTargetMonitor, component: any) => void;
  collect: (monitor: DropTargetMonitor) => { isOver: boolean };
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
  const [{ isOver }, drop] = useDrop<DropProps, void, { isOver: boolean }>({
    accept: 'ISSUE', // Accepted type(s)
    drop: (item: DropProps, monitor: DropTargetMonitor) => {
      console.log('item dropped');
      console.log(item, monitor);
    }, // Drop handling function
    collect: (monitor: DropTargetMonitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <div className="issue_wrapper" ref={drop} style={{ backgroundColor: isOver ? 'lightblue' : '#f0f0f0' }}>
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
