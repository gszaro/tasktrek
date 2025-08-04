// src/App.js
import React from 'react';
import TaskList from './features/tasks/TaskList';
import AddTaskForm from './features/tasks/AddTaskForm';
import './App.css';


//function app
function App() {
  return (
    <div className="App">
      <h1>TaskTrek</h1>
      <AddTaskForm />
      <TaskList />
    </div>
  );
}

export default App;

//end