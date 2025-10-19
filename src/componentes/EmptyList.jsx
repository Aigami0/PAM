import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

export default function EmptyList() {
  return (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>Nenhuma tarefa por enquanto 😴</Text>
    </View>
  );
}
