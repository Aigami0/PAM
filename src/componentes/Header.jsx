import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

export default function Header({ total }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Gerenciador de Tarefas</Text>
      <Text style={styles.headerCounter}>{total} tarefas</Text>
    </View>
  );
}