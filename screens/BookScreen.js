// import React, { useState } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

// const BookScreen = () => {
//   // Sample data for internal marks and attendance
//   const [internalMarks] = useState([
//     { id: '1', subject: 'Mathematics', marks: 85 },
//     { id: '2', subject: 'Physics', marks: 90 },
//     { id: '3', subject: 'Chemistry', marks: 75 },
//   ]);

//   const [attendance] = useState([
//     { id: '1', date: '2024-10-01', status: 'Present' },
//     { id: '2', date: '2024-10-02', status: 'Absent' },
//     { id: '3', date: '2024-10-03', status: 'Present' },
//   ]);

//   const renderMarksItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.subjectText}>{item.subject}: {item.marks}</Text>
//     </View>
//   );

//   const renderAttendanceItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.attendanceText}>{item.date}: {item.status}</Text>
//     </View>
//   );

//   const handlePress = () => {
//     Alert.alert('Info', 'You can manage your marks and attendance here.');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Internal Marks</Text>
//       <FlatList
//         data={internalMarks}
//         renderItem={renderMarksItem}
//         keyExtractor={item => item.id}
//       />

//       <Text style={styles.title}>Attendance</Text>
//       <FlatList
//         data={attendance}
//         renderItem={renderAttendanceItem}
//         keyExtractor={item => item.id}
//       />

//       <TouchableOpacity style={styles.button} onPress={handlePress}>
//         <Text style={styles.buttonText}>Manage Marks and Attendance</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   itemContainer: {
//     padding: 10,
//     marginVertical: 5,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   subjectText: {
//     fontSize: 18,
//   },
//   attendanceText: {
//     fontSize: 18,
//   },
//   button: {
//     marginTop: 20,
//     padding: 15,
//     backgroundColor: '#007bff',
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default BookScreen;


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';

const BookScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.myklassroom.com/dashboard/view');
        console.log('Response data:', response.data); 
        setData(response.data); 
      } catch (err) {
        console.error(err);
        setError('Failed to fetch data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Internal Marks and Attendance</Text>
      <FlatList
        data={data} 
        keyExtractor={(item) => item.subject || Math.random().toString()} 
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Subject: {item.subject}</Text>
            <Text style={styles.itemText}>Marks: {item.marks}</Text>
            <Text style={styles.itemText}>Attendance: {item.attendance ? 'Present' : 'Absent'}</Text>
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
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default BookScreen;
