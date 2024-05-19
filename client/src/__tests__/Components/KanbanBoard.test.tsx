import React from "react";
import { fireEvent, render, screen, within, waitFor } from "@testing-library/react";
import KanbanBoard from "../../Components/KanbanBoard";

describe("KanbanBoard", () => {
  beforeEach(() => {
    render(<KanbanBoard />);
  });

  describe("base categories rendering", () => {
    test("categories rendering", () => {
      // Get all category elements
      const categoryElements = screen.getAllByTestId(/category/i);

      // Extract category names
      const categories = categoryElements.map((categoryElement) => {
        return categoryElement.textContent?.split('+')[0].trim();
      });
      
    
    // Ensure base categories are present
      expect(categories).toContain("To Do");
      expect(categories).toContain("In Progress");
      expect(categories).toContain("Completed");
    });

    test("create issue button in each category", () => {
      const categoryElements = screen.getAllByTestId(/category/i);

      categoryElements.forEach(async (categoryElement) => {
        const categoryWithin = within(categoryElement);

        const createIssueButton = categoryWithin.getByTestId("create_issue");
        expect(createIssueButton).toBeInTheDocument();

        // Clicking create issue button and checking if issue appears
        fireEvent.click(createIssueButton);
        expect(categoryWithin.getByTestId("issue")).toBeInTheDocument();

        // Test edit functionality
        const editButton = categoryWithin.getByTestId("edit_button");
        const issueTitle = categoryWithin.getByTestId("issue_title");
        expect(issueTitle.textContent).toBe("test");
        fireEvent.click(editButton);
        const editTitleInput = categoryWithin.getByTestId("title_input");
        fireEvent.change(editTitleInput, { target: { value: 'New Title' } });
        expect((editTitleInput as HTMLInputElement).value).toBe('New Title');
        const saveInput = categoryWithin.getByTestId("save_input");
        fireEvent.click(saveInput);
        await waitFor(() => {
          expect(issueTitle.textContent).toBe("New Title");
        });

        // Test delete functionality
        const deleteButton = categoryWithin.getByTestId("delete_button");
        fireEvent.click(deleteButton);
        expect(categoryWithin.queryByTestId("issue")).not.toBeInTheDocument();

      });
    });
  });

});
