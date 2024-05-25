// src/REPLACE.tsx
import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import Category from "./Category";
import CreateCategory from "./CreateCategory";

interface Category {
  id: string;
  name: string;
}

const KanbanBoard: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const addCategory = (category: any) => {
    const newCategory: Category = {
      id: uuid(),
      name: category,
    };
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <section className="board">
        <Category name={"To Do"} />
        <Category name={"In Progress"} />
        <Category name={"Completed"} />
        {categories.map((category) => (
          <Category name={category.name} key={category.id} />
        ))}
        <div className="add_category">
          <CreateCategory addCategory={addCategory} />
        </div>
      </section>
    </>
  );
};

export default KanbanBoard;
