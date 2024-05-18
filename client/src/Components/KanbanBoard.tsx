// src/REPLACE.tsx
import React from "react";

const KanbanBoard = () => {
  const createIssue = (event: any) => {
    const categoryElement = event.currentTarget.closest(".category");
    
    const issueContainer = categoryElement.querySelector('.issues');
    console.log(issueContainer);
    
    const newIssueElement = document.createElement('div');
    newIssueElement.classList.add('issue');
    newIssueElement.innerHTML = `
      <div className="content">
        <h3>Issue Title</h3>
        <p>Issue Description</p>
      </div>
    `
    issueContainer.appendChild(newIssueElement);
  }
  return (
    <>
      <section className="board">
        <div className="category" data-category="todo" data-testid="todo">
          <h2>To Do</h2>
          <div className="issues"></div>
          <button className="create_issue" onClick={createIssue}>Create new issue</button>
        </div>
        <div className="category" data-category="in_progress" data-testid="in_progress">
          <h2>In Progress</h2>
          <div className="issues"></div>
          <button className="create_issue" onClick={createIssue}>Create new issue</button>
        </div>
        <div className="category" data-category="completed" data-testid="completed">
          <h2>Completed</h2>
          <div className="issues"></div>
          <button className="create_issue" onClick={createIssue}>Create new issue</button>
        </div>
      </section>
    </>
  );
};

export default KanbanBoard;
