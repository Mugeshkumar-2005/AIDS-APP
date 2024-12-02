// import React, { useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from "react-native";
// import * as DocumentPicker from "expo-document-picker";
// import * as FileSystem from "expo-file-system";
// import * as XLSX from "xlsx";

// const Attendance = () => {
//   const [fileName, setFileName] = useState(null);
//   const [parsedData, setParsedData] = useState([]);

//   const handleFileUpload = async () => {
//     try {
//       const result = await DocumentPicker.getDocumentAsync({
//         type: ["text/csv", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
//       });

//       if (result.type === "success") {
//         setFileName(result.name);
//         const fileUri = result.uri;

//         // Read the file's content
//         const fileContent = await FileSystem.readAsStringAsync(fileUri, {
//           encoding: FileSystem.EncodingType.Base64,
//         });

//         if (result.name.endsWith(".csv")) {
//           handleCSV(fileContent);
//         } else if (result.name.endsWith(".xlsx")) {
//           handleExcel(fileContent);
//         } else {
//           Alert.alert("Unsupported File", "Please upload a CSV or Excel file.");
//         }
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert("Error", "An error occurred while uploading the file.");
//     }
//   };

//   const handleCSV = (fileContent) => {
//     const decodedData = atob(fileContent);
//     const rows = decodedData.split("\n");
//     const csvData = rows.map((row) => row.split(","));
//     if (csvData.length > 0) {
//       setParsedData(csvData);
//       Alert.alert("File Processed", `Parsed ${csvData.length} rows from CSV.`);
//     } else {
//       Alert.alert("Invalid File", "The CSV file is empty or invalid.");
//     }
//   };

//   const handleExcel = (fileContent) => {
//     const binaryString = atob(fileContent);
//     const workbook = XLSX.read(binaryString, { type: "binary" });
//     const sheetName = workbook.SheetNames[0];
//     const sheet = workbook.Sheets[sheetName];
//     const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
//     if (excelData.length > 0) {
//       setParsedData(excelData);
//       Alert.alert("File Processed", `Parsed ${excelData.length} rows from Excel.`);
//     } else {
//       Alert.alert("Invalid File", "The Excel file is empty or invalid.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Attendance Management</Text>
//       <Text style={styles.text}>Upload and manage attendance here.</Text>
//       <TouchableOpacity style={styles.uploadButton} onPress={handleFileUpload}>
//         <Text style={styles.uploadButtonText}>Upload Excel or CSV</Text>
//       </TouchableOpacity>
//       {fileName && <Text style={styles.fileName}>Selected File: {fileName}</Text>}
//       {parsedData.length > 0 && (
//         <ScrollView style={styles.dataPreview}>
//           <Text style={styles.previewTitle}>Parsed Data:</Text>
//           {parsedData.map((row, index) => (
//             <Text key={index} style={styles.row}>
//               {row.join(", ")}
//             </Text>
//           ))}
//         </ScrollView>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   uploadButton: {
//     backgroundColor: "#0066cc",
//     padding: 10,
//     borderRadius: 5,
//   },
//   uploadButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   fileName: {
//     marginTop: 20,
//     fontSize: 14,
//     color: "#333",
//   },
//   dataPreview: {
//     marginTop: 20,
//     width: "100%",
//     maxHeight: 300,
//     backgroundColor: "#f9f9f9",
//     padding: 10,
//     borderRadius: 5,
//   },
//   previewTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   row: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
// });

// export default Attendance;



import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import * as XLSX from "xlsx";

const Attendance = () => {
  const [fileName, setFileName] = useState(null);
  const [parsedData, setParsedData] = useState([]);

  const handleFileUpload = async () => {
    try {
      // Open the document picker to allow the user to select a file
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          "text/csv",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        ],
      });

      // Check if the user selected a file (successful upload)
      if (result.type === "success") {
        setFileName(result.name);
        const fileUri = result.uri;

        // Read the file's content as a string
        const fileContent = await FileSystem.readAsStringAsync(fileUri);

        if (result.name.endsWith(".csv")) {
          handleCSV(fileContent);
        } else if (result.name.endsWith(".xlsx")) {
          handleExcel(fileContent);
        } else {
          Alert.alert("Unsupported File", "Please upload a CSV or Excel file.");
        }
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "An error occurred while uploading the file.");
    }
  };

  const handleCSV = (fileContent) => {
    const rows = fileContent.split("\n");
    const csvData = rows.map((row) => row.split(","));
    if (csvData.length > 0) {
      setParsedData(csvData);
      Alert.alert("File Processed", `Parsed ${csvData.length} rows from CSV.`);
    } else {
      Alert.alert("Invalid File", "The CSV file is empty or invalid.");
    }
  };

  const handleExcel = (fileContent) => {
    const workbook = XLSX.read(fileContent, { type: "string" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    if (excelData.length > 0) {
      setParsedData(excelData);
      Alert.alert("File Processed", `Parsed ${excelData.length} rows from Excel.`);
    } else {
      Alert.alert("Invalid File", "The Excel file is empty or invalid.");
    }
  };

  const renderTableHeader = () => {
    if (parsedData.length === 0) return null;
    return (
      <View style={styles.tableHeader}>
        {parsedData[0].map((header, index) => (
          <Text key={index} style={styles.headerCell}>{header}</Text>
        ))}
      </View>
    );
  };

  const renderTableRows = () => {
    return parsedData.slice(1).map((row, index) => (
      <View key={index} style={styles.tableRow}>
        {row.map((cell, i) => (
          <Text key={i} style={styles.cell}>{cell}</Text>
        ))}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance Management</Text>
      <Text style={styles.text}>Upload and manage attendance here.</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={handleFileUpload}>
        <Text style={styles.uploadButtonText}>Upload Excel or CSV</Text>
      </TouchableOpacity>
      {fileName && <Text style={styles.fileName}>Selected File: {fileName}</Text>}
      {parsedData.length > 0 && (
        <ScrollView style={styles.dataPreview}>
          <Text style={styles.previewTitle}>Parsed Data:</Text>
          {renderTableHeader()}
          {renderTableRows()}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: "#0066cc",
    padding: 10,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  fileName: {
    marginTop: 20,
    fontSize: 14,
    color: "#333",
  },
  dataPreview: {
    marginTop: 20,
    width: "100%",
    maxHeight: 300,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 5,
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  headerCell: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
  tableRow: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
  },
});

export default Attendance;
