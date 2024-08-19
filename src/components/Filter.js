import React from 'react';

function Filter({ onCategoryChange }) {
  return (
    <select onChange={(e) => onCategoryChange(e.target.value)} aria-label="Filter by category">
      <option value="">Select a category</option>
      <option value="Fruits">Fruits</option>
      <option value="Vegetables">Vegetables</option>
      <option value="Dairy">Dairy</option>
      <option value="Meat">Meat</option>
    </select>
  );
}

export default Filter;