import React from 'react';

const Filter = ({ onFilter }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilter(name, value);
  };

  return (
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <input
        type="text"
        name="title"
        placeholder="Filtrer par titre"
        onChange={handleChange}
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        name="rating"
        placeholder="Filtrer par note"
        onChange={handleChange}
        style={{ marginRight: '10px' }}
      />
    </div>
  );
};

export default Filter;
