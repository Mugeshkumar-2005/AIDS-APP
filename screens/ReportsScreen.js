// import React, { useState } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const ReportNotifications = () => {
//   const [notifications, setNotifications] = useState([
//     { id: '1', title: 'Report 1: Quarterly Sales Report', type: 'report', date: '2024-10-01' },
//     { id: '2', title: 'Notification: System Maintenance on 2024-10-15', type: 'notification', date: '2024-10-10' },
//     { id: '3', title: 'Report 2: Customer Feedback Report', type: 'report', date: '2024-09-28' },
//     { id: '4', title: 'Notification: New Policy Update', type: 'notification', date: '2024-10-05' },
//   ]);

//   const handleDelete = (id) => {
//     setNotifications(notifications.filter((item) => item.id !== id));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Reports & Notifications</Text>

//       <FlatList
//         data={notifications}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <View style={styles.itemContent}>
//               <Icon
//                 name={item.type === 'report' ? 'file-text' : 'bell'}
//                 size={20}
//                 color={item.type === 'report' ? 'blue' : 'orange'}
//                 style={styles.icon}
//               />
//               <View style={styles.textContainer}>
//                 <Text style={styles.itemTitle}>{item.title}</Text>
//                 <Text style={styles.itemDate}>{item.date}</Text>
//               </View>
//             </View>

//             <TouchableOpacity onPress={() => handleDelete(item.id)}>
//               <Icon name="trash" size={20} color="red" />
//             </TouchableOpacity>
//           </View>
//         )}
//       />
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
//     textAlign: 'center',
//     marginVertical: 20,
//   },
//   item: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 5,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.3,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   itemContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     marginRight: 10,
//   },
//   textContainer: {
//     flexDirection: 'column',
//   },
//   itemTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   itemDate: {
//     fontSize: 14,
//     color: '#666',
//   },
// });

// export default ReportNotifications;

import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ReportNotifications = () => {
  const [notifications, setNotifications] = useState([
    { id: '1', title: 'Report 1: Quarterly Sales Report', type: 'report', date: '2024-10-01', source: 'app' },
    { id: '2', title: 'Notification: System Maintenance on 2024-10-15', type: 'notification', date: '2024-10-10', source: 'mobile' },
    { id: '3', title: 'Report 2: Customer Feedback Report', type: 'report', date: '2024-09-28', source: 'app' },
    { id: '4', title: 'Notification: New Policy Update', type: 'notification', date: '2024-10-05', source: 'app' },
  ]);

  const [filterType, setFilterType] = useState('all');

  // Filter notifications by type or source
  const filteredNotifications = notifications.filter(item => 
    filterType === 'all' || item.type === filterType
  ).filter(item => item.source === 'app');

  const handleDelete = (id) => {
    setNotifications(notifications.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reports & Notifications</Text>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <Button title="All" onPress={() => setFilterType('all')} />
        <Button title="Reports" onPress={() => setFilterType('report')} />
        <Button title="Notifications" onPress={() => setFilterType('notification')} />
      </View>

      {/* List of notifications/reports */}
      <FlatList
        data={filteredNotifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemContent}>
              <Icon
                name={item.type === 'report' ? 'file-text' : 'bell'}
                size={20}
                color={item.type === 'report' ? 'blue' : 'orange'}
                style={styles.icon}
              />
              <View style={styles.textContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDate}>{item.date}</Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Icon name="trash" size={20} color="red" />
            </TouchableOpacity>
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default ReportNotifications;
