// src/features/tasks/AddTaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './taskSlice';

const AddTaskForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    dispatch(
      addTask({
        title,
        description,
        deadline: deadline || null,
        tags: tags.split(',').map(tag => tag.trim()).filter(Boolean)
      })
    );

    setTitle('');
    setDescription('');
    setDeadline('');
    setTags('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Task</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <br />
      <input
        type="date"
        value={deadline}
        onChange={e => setDeadline(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Tags (comma-separated)"
        value={tags}
        onChange={e => setTags(e.target.value)}
      />
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
