import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([
    "Exam schedule released",
    "New assignment uploaded",
    "Holiday announced for tomorrow",
  ]);
  const [newNotification, setNewNotification] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Add or Edit Notification
  const handleAddOrEditNotification = () => {
    if (!newNotification.trim()) {
      Alert.alert("Error", "Please enter a notification.");
      return;
    }

    if (editIndex !== null) {
      // Edit existing notification
      const updatedNotifications = [...notifications];
      updatedNotifications[editIndex] = newNotification;
      setNotifications(updatedNotifications);
      setEditIndex(null);
    } else {
      // Add new notification
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        newNotification,
      ]);
    }

    setNewNotification("");
  };

  // Simulate staff uploading something (e.g., an assignment or exam schedule)
  const handleStaffUpload = (fileName) => {
    const newNotification = `${fileName} uploaded by staff`;
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      newNotification,
    ]);
  };

  // Delete Notification
  const handleDeleteNotification = (index) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((_, i) => i !== index)
    );
  };

  // Edit Notification
  const handleEditNotification = (index) => {
    setNewNotification(notifications[index]);
    setEditIndex(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      {/* Input Field to Add or Edit Notification */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter new notification"
          value={newNotification}
          onChangeText={setNewNotification}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddOrEditNotification}
        >
          <Text style={styles.addButtonText}>
            {editIndex !== null ? "Update Notification" : "Add Notification"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Simulate Staff Uploads */}
      <View style={styles.uploadContainer}>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => handleStaffUpload("Assignment 1")}
        >
          <Text style={styles.uploadButtonText}>Upload Assignment 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => handleStaffUpload("Exam Schedule")}
        >
          <Text style={styles.uploadButtonText}>Upload Exam Schedule</Text>
        </TouchableOpacity>
      </View>

      {/* List of Notifications */}
      <FlatList
        data={notifications}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.notificationRow}>
            <Text style={styles.notificationText}>{item}</Text>
            <View style={styles.actions}>
              <TouchableOpacity
                style={[styles.actionButton, styles.editButton]}
                onPress={() => handleEditNotification(index)}
              >
                <Text style={styles.actionButtonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, styles.deleteButton]}
                onPress={() => handleDeleteNotification(index)}
              >
                <Text style={styles.actionButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  addButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  uploadContainer: {
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  uploadButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  notificationRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  notificationText: {
    fontSize: 16,
    flex: 1,
  },
  actions: {
    flexDirection: "row",
  },
  actionButton: {
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  editButton: {
    backgroundColor: "#ffc107",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default AdminNotifications;
