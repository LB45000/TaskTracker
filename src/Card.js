import React, { useState } from 'react';

function Card({ task, deleteTask, toggleTaskStatus, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="card">
      {isEditing ? (
        <input 
          type="text" 
          value={editedText} 
          onChange={(e) => setEditedText(e.target.value)} />
      ) : (
        <p onClick={handleEdit}>{task.text}</p>
      )}
      <button onClick={() => toggleTaskStatus(task.id)}>
        {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default Card;
