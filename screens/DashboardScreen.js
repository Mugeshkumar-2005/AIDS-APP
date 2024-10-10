import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const handleLogout = () => {
    // You can add any additional logout logic here (e.g., clearing auth state)
    navigation.navigate('Login');  // Navigate back to the login screen
  };

  return (
    <View style={styles.container}>
      {/* Navbar container */}
      <View style={styles.navbar}>
        <Button 
          title="Task Management" 
          onPress={() => navigation.navigate('TaskManagement')} 
        />
        <Button 
          title="Reports/Notifications" 
          onPress={() => navigation.navigate('Reports')} 
        />
        {/* <Button 
          title="Logout" 
          onPress={handleLogout} 
          color="blue"  // Set the color of the Logout button to red for emphasis
        /> */}
      </View>

      {/* Dashboard content */}
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to the Dashboard</Text>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',        // Align buttons in a row
    justifyContent: 'space-around', // Space between buttons
    paddingVertical: 15,           // Padding around the buttons
    backgroundColor: '#f8f8f8',    // Light background color for the navbar
    borderBottomWidth: 1,          // Add a border below the navbar
    borderBottomColor: '#ddd',  
    paddingTop:50,   // Light border color
  },
  content: {
    flex: 1,                       // Take up the remaining screen space
    justifyContent: 'center',      // Center the content vertically
    alignItems: 'center',          // Center the content horizontally
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
