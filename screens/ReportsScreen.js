import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

const ReportsScreen = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch reports from backend or API (Firebase, Flask, etc.)
    const fetchedReports = [
      { id: 1, title: 'Monthly Performance', description: 'Department performance for September' },
      { id: 2, title: 'Task Completion', description: 'Overview of completed tasks' }
    ];
    setReports(fetchedReports);
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Reports</Text>
      <FlatList
        data={reports}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ReportsScreen;
