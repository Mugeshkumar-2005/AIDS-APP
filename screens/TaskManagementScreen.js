// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

// const TaskManagementScreen = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const addTask = () => {
//     if (newTask.trim()) {
//       setTasks([...tasks, { id: Date.now(), task: newTask, completed: false }]);
//       setNewTask('');
//     }
//   };

//   const toggleTaskCompletion = (id) => {
//     setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <TextInput
//         style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
//         placeholder="New Task"
//         value={newTask}
//         onChangeText={setNewTask}
//       />
//       <Button title="Add Task" onPress={addTask} />

//       <FlatList
//         data={tasks}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
//             <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>
//               {item.task}
//             </Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// export default TaskManagementScreen;


import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskManagement = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, { id: Date.now().toString(), task }]);
      setTask('');
    }
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Management</Text>
      
      {/* Input for Task */}
      <TextInput
        style={styles.input}
        placeholder="Enter new task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />

      {/* Button to add task */}
      <Button title="Add Task" onPress={addTask} color="green" />

      {/* Display list of tasks */}
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.task}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Icon name="trash" size={20} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
  },
});

export default TaskManagement;
