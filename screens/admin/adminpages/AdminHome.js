// import React from "react";
// import { View, Text, StyleSheet, ScrollView } from "react-native";

// const placementDetails = [
//   {
//     id: 1,
//     companyName: "Coding Mart",
//     ctc: "4.5 LPA",
//     offers: 2,
//   },
//   {
//     id: 2,
//     companyName: "Tech Solutions",
//     ctc: "5.0 LPA",
//     offers: 3,
//   },
// ];

// const PlacedStudents = [
//   { id: 1, name: "SRIHARIHARAN V", regNo: "727821TUAD049", company: "Coding Mart" },
//   { id: 2, name: "SNEHA R S", regNo: "727821TUAD048", company: "Tech Solutions" },
// ];

// const AdminHome = () => {
//   const renderTableHeader = (headers) => (
//     <View style={styles.tableHeader}>
//       {headers.map((header, index) => (
//         <Text key={index} style={styles.headerText}>
//           {header}
//         </Text>
//       ))}
//     </View>
//   );

//   const renderTableRow = (rowData, isHeader = false) => (
//     <View
//       style={[styles.tableRow, isHeader && { backgroundColor: "#f0f0f0", borderTopWidth: 0 }]}
//     >
//       {Object.values(rowData).map((value, index) => (
//         <Text key={index} style={styles.rowText}>
//           {value}
//         </Text>
//       ))}
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Placement Offers</Text>
//       <View style={styles.table}>
//         {renderTableHeader(["ID", "Company", "CTC", "Offers"])}
//         {placementDetails.map((item) => renderTableRow(item))}
//       </View>

//       <Text style={styles.title}>Placed Students List</Text>
//       <View style={styles.table}>
//         {renderTableHeader(["ID", "Name", "Reg. No.", "Company"])}
//         {PlacedStudents.map((student) => renderTableRow(student))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     padding: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "#003366",
//     marginVertical: 20,
//   },
//   table: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     overflow: "hidden",
//   },
//   tableHeader: {
//     flexDirection: "row",
//     backgroundColor: "#0066cc",
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//   },
//   tableRow: {
//     flexDirection: "row",
//     borderBottomWidth: 1,
//     borderColor: "#ccc",
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//   },
//   headerText: {
//     flex: 1,
//     fontWeight: "bold",
//     color: "#fff",
//     textAlign: "center",
//     fontSize: 16,
//   },
//   rowText: {
//     flex: 1,
//     textAlign: "center",
//     fontSize: 14,
//     color: "#333",
//   },
// });

// export default AdminHome;



import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const placementStatistics = [
  {
    year: "2023-2024",
    maxSalary: "4.5 LPA",
    avgSalary: "4.5 LPA",
  },
];

const placementOffers = [
  {
    companyName: "Coding Mart",
    ctc: "4.5 LPA",
    offers: 2,
  },
];

const placedStudents = [
  { id: 1, name: "SRIHARIHARAN V", regNo: "727821TUAD049", company: "Coding Mart" },
  { id: 2, name: "SNEHA R S", regNo: "727821TUAD048", company: "Coding Mart" },
];

const AdminHome = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Placement Statistics */}
      <Text style={styles.title}>Placement Statistics (2023-2024)</Text>
      <View style={styles.table}>
        {/* Header Row */}
        <View style={styles.tableRow}>
          <Text style={styles.headerCell}>Academic Year</Text>
          <Text style={styles.headerCell}>Maximum Salary (LPA)</Text>
          <Text style={styles.headerCell}>Average Salary (LPA)</Text>
        </View>
        {/* Data Row */}
        {placementStatistics.map((stat, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.cell}>{stat.year}</Text>
            <Text style={styles.cell}>{stat.maxSalary}</Text>
            <Text style={styles.cell}>{stat.avgSalary}</Text>
          </View>
        ))}
      </View>

      {/* Placement Offers */}
      <Text style={styles.title}>Placement Offers</Text>
      <View style={styles.table}>
        {/* Header Row */}
        <View style={styles.tableRow}>
          <Text style={styles.headerCell}>Company Name</Text>
          <Text style={styles.headerCell}>CTC</Text>
          <Text style={styles.headerCell}>No of Offers</Text>
        </View>
        {/* Data Row */}
        {placementOffers.map((offer, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.cell}>{offer.companyName}</Text>
            <Text style={styles.cell}>{offer.ctc}</Text>
            <Text style={styles.cell}>{offer.offers}</Text>
          </View>
        ))}
      </View>

      {/* Placed Students List */}
      <Text style={styles.title}>Placed Students List (2023 – 2024)</Text>
      <View style={styles.table}>
        {/* Header Row */}
        <View style={styles.tableRow}>
          <Text style={styles.headerCell}>SL. No.</Text>
          <Text style={styles.headerCell}>Student Name</Text>
          <Text style={styles.headerCell}>Reg No</Text>
          <Text style={styles.headerCell}>Company Name</Text>
        </View>
        {/* Data Row */}
        {placedStudents.map((student) => (
          <View key={student.id} style={styles.tableRow}>
            <Text style={styles.cell}>{student.id}</Text>
            <Text style={styles.cell}>{student.name}</Text>
            <Text style={styles.cell}>{student.regNo}</Text>
            <Text style={styles.cell}>{student.company}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius:20,
    marginBottom:20,
    marginTop:30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
    color: "#003366",
  },
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerCell: {
    flex: 1,
    padding: 10,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#0066cc",
    color: "#fff",
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    color: "#333",
  },
});

export default AdminHome;
