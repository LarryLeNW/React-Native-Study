import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave'; // Assuming these components are implemented elsewhere
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [task, setTask] = useState('');
  const [editingTask, setEditingTask] = useState(null); // For handling task updates
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      if (editingTask) {
        // Update existing task
        setTasks(tasks.map(t =>
          t.id === editingTask.id ? { ...t, text: task } : t
        ));
        setEditingTask(null);
      } else {
        // Add new task
        setTasks([...tasks, { id: Date.now().toString(), text: task }]);
      }
      setTask('');
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    if (editingTask && editingTask.id === id) {
      setEditingTask(null); // Clear editing if the task is removed
    }
  };

  const startEditing = (item) => {
    setEditingTask(item);
    setTask(item.text);
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.text}</Text>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={() => startEditing(item)}>
          <Text style={styles.editTask}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeTask(item.id)}>
          <Text style={styles.removeTask}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" lightColor='blue'>List Todo !!!</ThemedText>
      </ThemedView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={editingTask ? "Update the task" : "Add a new task"}
          value={task}
          onChangeText={setTask}
        />
        <Button title={editingTask ? "Update Task" : "Add Task"} onPress={addTask} />
      </View>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.taskList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  taskList: {
    flex: 1,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle : "dotted",
    marginVertical  : 2 ,
  },
  taskText: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
  },
  actionContainer: {
    flexDirection: 'row',
  },
  editTask: {
    color: 'blue',
    marginRight: 10,
  },
  removeTask: {
    color: 'red',
  },
});
