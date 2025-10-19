import { StyleSheet } from 'react-native';
import { COLORS } from '../utils/constants';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    padding: 16,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerCounter: {
    color: '#fff',
    marginTop: 4,
  },
  form: {
    flexDirection: 'row',
    padding: 16,
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 8,
    borderRadius: 8,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  taskText: { fontSize: 16 },
  actions: { flexDirection: 'row', gap: 8 },
  empty: { alignItems: 'center', padding: 24 },
  emptyText: { color: COLORS.muted },
  edit: { color: COLORS.primary },
  delete: { color: COLORS.danger },
});
