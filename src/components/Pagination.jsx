import React from "react";
import "../styles/Pagination.css";

const Pagination = ({ temasPerPage, totalTemas, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTemas / temasPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      {pageNumbers.map((number) => (
        <div key={number} className="page-number" onClick={() => paginate(number)}>
          {number}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
