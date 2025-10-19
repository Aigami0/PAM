import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import TaskForm from './src/components/TaskForm';
import TaskList from './src/components/TaskList';
import { useTasks } from './src/hooks/useTasks';
import { styles } from './src/styles/styles';

export default function App() {
  const { tasks, addTask, deleteTask, editTask, saveEdit, editingTask } = useTasks();

  return (
    <View style={{ flex: 1 }}>
      <Header total={tasks.length} />
      <TaskForm onSubmit={editingTask ? saveEdit : addTask} editingTask={editingTask} />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
    </View>
  );
}
