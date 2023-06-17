import React from 'react'

const Delete = ({ file, onDelete }) => {
  const handleDelete = () => {
    onDelete(file.id)
  };

  return (
    <div>
      <button onClick={handleDelete}>Remove</button>
    </div>
  );
};

export default Delete