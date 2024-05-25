import React from "react";
import { fireEvent, render, screen, within, waitFor } from "@testing-library/react";
import KanbanBoard from "../../Components/KanbanBoard";

describe("KanbanBoard", () => {
  beforeEach(() => {
    render(<KanbanBoard />);
  });

  describe("base categories rendering", () => {
    test("categories rendering", async () => {
      // Create new category
      const categoryAddButton = screen.getByTestId('add_category');
      fireEvent.click(categoryAddButton);
      const categoryNameInput = screen.getByTestId('category_name_input');
      fireEvent.change(categoryNameInput, { target: { value: 'New Category' } });
      const categorySaveButton = screen.getByTestId('save_category');
      fireEvent.click(categorySaveButton);

      // Get all category elements
      const categoryElements = screen.getAllByTestId('category');

      // Extract category names
      const categories = categoryElements.map((categoryElement) => {
        return categoryElement.textContent?.split('+')[0].trim();
      });

      // Ensure base categories are present
      expect(categories).toContain("To Do");
      expect(categories).toContain("In Progress");
      expect(categories).toContain("Completed");
      expect(categories).toContain("New Category");
    });

    describe("issue tests", () => {
      beforeEach(() => {
        const categoryElements = screen.getAllByTestId('category');

        categoryElements.forEach((categoryElement) => {
          const categoryWithin = within(categoryElement);

          const createIssueButton = categoryWithin.getByTestId("create_issue");
          expect(createIssueButton).toBeInTheDocument();

          // Clicking create issue button and checking if issue appears
          fireEvent.click(createIssueButton);
        });
      });

      test("create issue button in each category", () => {
        const categoryElements = screen.getAllByTestId('category');

        categoryElements.forEach((categoryElement) => {
          const categoryWithin = within(categoryElement);

          const createIssueButton = categoryWithin.getByTestId("create_issue");
          expect(createIssueButton).toBeInTheDocument();

          // Clicking create issue button and checking if issue appears
          fireEvent.click(createIssueButton);
          expect(categoryWithin.getAllByTestId("issue").length).toBeGreaterThan(0);
        });
      });

      test("Edit issue and verify title change", async () => {
        const categoryElements = screen.getAllByTestId('category');

        for (const categoryElement of categoryElements) {
          const categoryWithin = within(categoryElement);
          const ellipsis = categoryWithin.getByTestId("edit_ellipsis");

          // Test edit functionality
          fireEvent.click(ellipsis);
          const editButton = categoryWithin.getByTestId("edit_button");
          fireEvent.click(editButton);

          // Simulate editing title and description
          const editTitleInput = categoryWithin.getByTestId("title_input");
          fireEvent.change(editTitleInput, { target: { value: 'New Title' } });

          const editDescriptionTextarea = categoryWithin.getByTestId("title_description");
          fireEvent.change(editDescriptionTextarea, { target: { value: 'New Description' } });

          fireEvent.click(categoryWithin.getByTestId("save_input"));

          // Wait for the issueTitle and issueDescription to update
          await waitFor(() => {
            const updatedIssueTitle = categoryWithin.getByTestId("issue_title").textContent;
            expect(updatedIssueTitle).toBe("New Title");
          });

          // Test delete functionality
          await waitFor(() => {
            expect(categoryWithin.queryByTestId("edit_ellipsis")).toBeInTheDocument();
          });
          fireEvent.click(categoryWithin.getByTestId("edit_ellipsis"));
          const deleteButton = categoryWithin.getByTestId("delete_button");
          fireEvent.click(deleteButton);
          await waitFor(() => {
            expect(categoryWithin.queryByTestId("issue")).not.toBeInTheDocument();
          });
        }
      });
      test.todo("Drag and drop issue into another category")
    });
  });
});

