import React from 'react';
import Card from './Card';

function DisplayTasks({ tasks, deleteTask, toggleTaskStatus, editTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <Card 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          toggleTaskStatus={toggleTaskStatus} 
          editTask={editTask} />
      ))}
    </div>
  );
}

export default DisplayTasks;
