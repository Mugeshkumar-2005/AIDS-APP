import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Attendance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance Management</Text>
      <Text style={styles.text}>Upload and manage attendance here.</Text>
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

export default Attendance;
