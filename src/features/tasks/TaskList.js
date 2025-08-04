// src/features/tasks/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTask } from './taskSlice';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleToggleStatus = (id, currentStatus) => {
    const nextStatus =
      currentStatus === 'todo'
        ? 'in-progress'
        : currentStatus === 'in-progress'
        ? 'done'
        : 'todo';

    dispatch(updateTask({ id, changes: { status: nextStatus } }));
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 && <p>No tasks yet.</p>}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => handleToggleStatus(task.id, task.status)}>
              Toggle Status
            </button>
            <button onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
