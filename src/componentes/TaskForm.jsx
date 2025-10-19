import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../styles/styles';

export default function TaskForm({ onSubmit, editingTask }) {
  const [text, setText] = useState(editingTask ? editingTask.text : '');

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Digite uma tarefa..."
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <Button title={editingTask ? "Salvar" : "Adicionar"} onPress={handleSubmit} />
    </View>
  );
}
