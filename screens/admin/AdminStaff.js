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

const AdminStaff = () => {
  const [staff, setStaff] = useState([
    { id: 1, name: "Dr. Smith", subject: "Mathematics" },
    { id: 2, name: "Dr. Jones", subject: "Physics" },
  ]);
  const [newName, setNewName] = useState("");
  const [newSubject, setNewSubject] = useState("");
  const [editId, setEditId] = useState(null);

  // Add new staff member
  const handleAddStaff = () => {
    if (!newName.trim() || !newSubject.trim()) {
      Alert.alert("Error", "Please enter both name and subject.");
      return;
    }

    if (editId) {
      // Edit existing staff member
      setStaff((prevStaff) =>
        prevStaff.map((member) =>
          member.id === editId
            ? { ...member, name: newName, subject: newSubject }
            : member
        )
      );
      setEditId(null);
    } else {
      // Add new staff
      setStaff((prevStaff) => [
        ...prevStaff,
        { id: prevStaff.length + 1, name: newName, subject: newSubject },
      ]);
    }

    setNewName("");
    setNewSubject("");
  };

  // Delete staff member
  const handleDelete = (id) => {
    setStaff((prevStaff) => prevStaff.filter((member) => member.id !== id));
  };

  // Edit staff member
  const handleEdit = (id) => {
    const staffMember = staff.find((member) => member.id === id);
    setNewName(staffMember.name);
    setNewSubject(staffMember.subject);
    setEditId(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faculty Management</Text>

      {/* Input Fields for Name and Subject */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={newName}
          onChangeText={setNewName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Subject"
          value={newSubject}
          onChangeText={setNewSubject}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddStaff}>
          <Text style={styles.addButtonText}>
            {editId ? "Update Staff" : "Add Staff"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* List of Staff */}
      <FlatList
        data={staff}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.staffRow}>
            <Text style={styles.staffText}>
              {item.name} - Subject: {item.subject}
            </Text>
            <View style={styles.actions}>
              <TouchableOpacity
                style={[styles.actionButton, styles.editButton]}
                onPress={() => handleEdit(item.id)}
              >
                <Text style={styles.actionButtonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, styles.deleteButton]}
                onPress={() => handleDelete(item.id)}
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
  staffRow: {
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
  staffText: {
    fontSize: 16,
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

export default AdminStaff;
