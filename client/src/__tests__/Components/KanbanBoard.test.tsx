import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import KanbanBoard from "../../Components/KanbanBoard";

describe("KanbanBoard", () => {
  beforeEach(() => {
    render(<KanbanBoard />);
  });

  describe("three base categories rendering", () => {
    test('to do category', () => {
      expect(screen.getByText(/To Do/i)).toBeInTheDocument();
    })
    test('in progress category', () => {
      expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
    })
    test('completed category', () => {
      expect(screen.getByText(/Completed/i)).toBeInTheDocument();
    })
  });

  describe("create issue button in each category", () => {
    test('to do button on page', () => {
      const todoCategory = screen.getByTestId("todo");
      const todoButton = todoCategory.querySelector('button.create_issue');
      expect(todoButton).toBeInTheDocument();
    })
    test('in progress button on page', () => {
      const inProgressCategory = screen.getByTestId("in_progress");
      const inProgressButton = inProgressCategory.querySelector('button.create_issue');
      expect(inProgressButton).toBeInTheDocument();
    })
    test('completed button on page', () => {
      const completedCategory = screen.getByTestId("completed");
      const completedButton = completedCategory.querySelector('button.create_issue');
      expect(completedButton).toBeInTheDocument();
    })

    describe("create issue button creates new issue via new div", () => {
      test('to do button creates new issue', () => {
        const todoCategory = screen.getByTestId("todo");

        const todoButton = todoCategory.querySelector('button.create_issue');

        // Simulate click on the button
        fireEvent.click(todoButton!);

        // Verify that a issues section is within document
        const issueContainer = todoCategory.querySelector('.issues');
        expect(issueContainer).toBeInTheDocument();

        // Check if the new issue element is added
        const newIssueElement = issueContainer?.querySelector('div');
        expect(newIssueElement).toBeInTheDocument();
      })

      test('in progress button creates new issue', () => {
        const inProgressCategory = screen.getByTestId("in_progress");

        const inProgressButton = inProgressCategory.querySelector('button.create_issue');

        // Simulate click on the button
        fireEvent.click(inProgressButton!);

        // Verify that a issues section is within document
        const issueContainer = inProgressCategory.querySelector('.issues');
        expect(issueContainer).toBeInTheDocument();

        // Check if the new issue element is added
        const newIssueElement = issueContainer?.querySelector('div');
        expect(newIssueElement).toBeInTheDocument();
      })

      test('completed button creates new issue', () => {
        const completedCategory = screen.getByTestId("completed");

        const completedButton = completedCategory.querySelector('button.create_issue');

        // Simulate click on the button
        fireEvent.click(completedButton!);

        // Verify that a issues section is within document
        const issueContainer = completedCategory.querySelector('.issues');
        expect(issueContainer).toBeInTheDocument();

        // Check if the new issue element is added
        const newIssueElement = issueContainer?.querySelector('div');
        expect(newIssueElement).toBeInTheDocument();
      })

    })
  })
});
