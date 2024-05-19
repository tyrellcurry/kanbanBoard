// src/REPLACE.tsx
import React, { useState } from "react";
import uuid from "react-uuid";
import IssueWrapper from "./IssueWrapper";

const KanbanBoard: React.FC = () => {
  return (
    <>
      <section className="board">
        <div className="category" data-category="todo" data-testid="category">
          <h2>To Do</h2>
          <div className="issues">
            <IssueWrapper />
          </div>
        </div>
        <div
          className="category"
          data-category="in_progress"
          data-testid="category">
          <h2>In Progress</h2>
          <div className="issues">
            <IssueWrapper />
          </div>
        </div>
        <div
          className="category"
          data-category="completed"
          data-testid="category">
          <h2>Completed</h2>
          <div className="issues">
            <IssueWrapper />
          </div>
        </div>
      </section>
    </>
  );
};

export default KanbanBoard;
