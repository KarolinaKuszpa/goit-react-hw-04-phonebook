import React from 'react';

const Filter = ({ filterValue, setFilter }) => {
  return (
    <div>
      <label>
        Find contacts by name:
        <input
          type="text"
          value={filterValue}
          onChange={e => setFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Filter;
