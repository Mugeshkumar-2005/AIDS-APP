import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AdminStaff = () => {
  const staff = [
    { id: 1, name: "Dr. Smith", subject: "Mathematics" },
    { id: 2, name: "Dr. Jones", subject: "Physics" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faculty Management</Text>
      {staff.map((member) => (
        <Text key={member.id} style={styles.text}>
          {member.name} - Subject: {member.subject}
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

export default AdminStaff;
