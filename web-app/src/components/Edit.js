import React, { useState } from 'react'

const Edit = ({ file, onNameChange }) => {
  const [editMode, setEditMode] = useState(false)
  const [newName, setNewName] = useState(file.name)

  const handleEditClick = () => {
    setEditMode(true)
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  };

  const handleSubmit = () => {
    fetch(`/api/files/${file.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName }),
    })
      .then((res) => res.json())
      .then(() => {
        setEditMode(false)
        onNameChange(file.id, newName)
      })
      .catch((err) => console.error(err))
  }

  return (
    <div>
      {!editMode ? (
        <div>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={newName}
            onChange={handleNameChange}
            className="text-gray-900"
            />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Edit