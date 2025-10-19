import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';
import EmptyList from './EmptyList';

export default function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TaskItem task={item} onEdit={onEdit} onDelete={onDelete} />
      )}
      ListEmptyComponent={<EmptyList />}
    />
  );
}
