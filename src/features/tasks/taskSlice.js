// src/features/tasks/taskSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: nanoid(),
    title: 'First Task',
    description: 'This is your first task!',
    status: 'todo', // other values: 'in-progress', 'done'
    deadline: null,
    tags: ['demo'],
  }
];

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ title, description, deadline, tags }) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            status: 'todo',
            deadline,
            tags,
          }
        };
      }
    },
    updateTask(state, action) {
      const { id, changes } = action.payload;
      const task = state.find(t => t.id === id);
      if (task) Object.assign(task, changes);
    },
    deleteTask(state, action) {
      return state.filter(task => task.id !== action.payload);
    }
  }
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
