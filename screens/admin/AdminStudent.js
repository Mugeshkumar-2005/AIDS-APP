import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AdminStudent = () => {
  const students = [
    { id: 1, name: "Alice", marks: 85 },
    { id: 2, name: "Bob", marks: 78 },
    { id: 3, name: "Charlie", marks: 92 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Details</Text>
      {students.map((student) => (
        <Text key={student.id} style={styles.text}>
          {student.name} - Marks: {student.marks}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default AdminStudent;
