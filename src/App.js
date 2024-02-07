import React, { useState } from 'react';
import DisplayTasks from './DisplayTasks';
import AddTasks from './AddTasks';
import Footer from './Footer';

function App() {
  const [tasks, setTasks] = useState([
    // Demo data
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
  ]);

  const addTask = (text) => {
    const newTask = {
      id: Math.random(), // Not ideal for real apps, but okay for this demo
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, text: newText} : task
    ));
  };

  return (
    <div>
      <AddTasks addTask={addTask} />
      <DisplayTasks 
        tasks={tasks} 
        deleteTask={deleteTask} 
        toggleTaskStatus={toggleTaskStatus} 
        editTask={editTask} />
      <Footer 
        totalTasks={tasks.length} 
        completedTasks={tasks.filter(task => task.completed).length} />
    </div>
  );
}

export default App;
