import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  Alert,
} from "react-native";

const AdminClassManagement = () => {
  const [classData, setClassData] = useState({});
  const [newClass, setNewClass] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreateClass = () => {
    if (!newClass.trim()) {
      Alert.alert("Error", "Class name cannot be empty!");
      return;
    }
    if (classData[newClass]) {
      Alert.alert("Error", "Class already exists!");
      return;
    }

    setClassData((prevData) => ({ ...prevData, [newClass]: [] }));
    setNewClass("");
  };

  const handleOpenClass = (className) => {
    setSelectedClass(className);
    setModalVisible(true);
  };

  const handleAddStudent = () => {
    setClassData((prevData) => ({
      ...prevData,
      [selectedClass]: [
        ...prevData[selectedClass],
        { id: prevData[selectedClass].length + 1, name: "", mobile: "" },
      ],
    }));
  };

  const handleInputChange = (id, field, value) => {
    setClassData((prevData) => ({
      ...prevData,
      [selectedClass]: prevData[selectedClass].map((student) =>
        student.id === id ? { ...student, [field]: value } : student
      ),
    }));
  };

  const handleSave = () => {
    const hasEmptyFields = classData[selectedClass].some(
      (student) => student.name.trim() === "" || student.mobile.trim() === ""
    );

    if (hasEmptyFields) {
      Alert.alert("Error", "All rows must have Name and Mobile No filled.");
    } else {
      Alert.alert("Success", `Data for ${selectedClass} saved successfully!`);
      setModalVisible(false);
    }
  };

  const renderStudentRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.id}</Text>
      <TextInput
        style={[styles.cell, styles.input]}
        placeholder="Name"
        value={item.name}
        onChangeText={(text) => handleInputChange(item.id, "name", text)}
      />
      <TextInput
        style={[styles.cell, styles.input]}
        placeholder="Mobile No"
        value={item.mobile}
        keyboardType="numeric"
        onChangeText={(text) => handleInputChange(item.id, "mobile", text)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Class Management</Text>

      {/* Add a New Class */}
      <View style={styles.newClassContainer}>
        <TextInput
          style={styles.newClassInput}
          placeholder="Enter Class Name (e.g., 1st Year A)"
          value={newClass}
          onChangeText={setNewClass}
        />
        <TouchableOpacity style={styles.createButton} onPress={handleCreateClass}>
          <Text style={styles.createButtonText}>Create Class</Text>
        </TouchableOpacity>
      </View>

      {/* List Existing Classes */}
      <FlatList
        data={Object.keys(classData)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.classButton}
            onPress={() => handleOpenClass(item)}
          >
            <Text style={styles.classText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />

      {/* Modal for Adding Students */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedClass} - Add Students</Text>
            <FlatList
              data={classData[selectedClass]}
              renderItem={renderStudentRow}
              keyExtractor={(item) => item.id.toString()}
            />
            <TouchableOpacity style={styles.addRowButton} onPress={handleAddStudent}>
              <Text style={styles.addRowText}>Add Row</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.saveButton, { backgroundColor: "red" }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.saveButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  newClassContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  newClassInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  createButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  createButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  classButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  classText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    height: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 10,
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  input: {
    textAlign: "left",
    padding: 10,
  },
  addRowButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  addRowText: {
    color: "#fff",
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AdminClassManagement;
