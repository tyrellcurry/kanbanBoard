import React from "react";
import IssueWrapper from "./IssueWrapper";

const Category = ({name}: any) => {
  const dataCategory = name.toLowerCase().split(' ').join('_');
  return (
    <div className="category" data-category={dataCategory} data-testid="category">
      <h2>{name}</h2>
      <div className="issues">
        <IssueWrapper />
      </div>
    </div>
  );
};

export default Category;
