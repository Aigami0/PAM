import { useState } from 'react';
import { Alert } from 'react-native';
import { generateId } from '../utils/constants';

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (text) => {
    const newTask = { id: generateId(), text };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (task) => setEditingTask(task);

  const saveEdit = (text) => {
    setTasks(tasks.map(t => (t.id === editingTask.id ? { ...t, text } : t)));
    setEditingTask(null);
  };

  return { tasks, addTask, deleteTask, editTask, saveEdit, editingTask };
}
