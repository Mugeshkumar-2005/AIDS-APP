import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AdminNotifications = () => {
  const notifications = [
    "Exam schedule released",
    "New assignment uploaded",
    "Holiday announced for tomorrow",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      {notifications.map((note, index) => (
        <Text key={index} style={styles.text}>
          {note}
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

export default AdminNotifications;
