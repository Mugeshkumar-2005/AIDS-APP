import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native'; 
import ProfileImage from '../../assets/Profile.png';  

const DashboardScreen = ({ route, navigation }) => {
  const [profileImage, setProfileImage] = useState(ProfileImage);  
  const [isMenuVisible, setMenuVisible] = useState(false);  // State for menu visibility
  const isFocused = useIsFocused();  

  useEffect(() => {
    if (route.params?.updatedProfileImage) {
      setProfileImage({ uri: route.params.updatedProfileImage });
    }
  }, [isFocused, route.params?.updatedProfileImage]);

  const menuItems = [
    { title: "View Students", navigateTo: "AdminStudent" },
    { title: "View Staff", navigateTo: "AdminStaff" },
  ];

  const toggleMenu = () => setMenuVisible(!isMenuVisible);

  const handleMenuItemPress = (navigateTo) => {
    setMenuVisible(false); // Close the menu
    navigation.navigate(navigateTo); // Navigate to the selected screen
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile', {
      currentImage: profileImage.uri, 
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require('../../assets/clg.png')} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Sri Krishna College Of Technology</Text>
          <Text style={styles.subtitle}>An Autonomous Institution | Accredited by NAAC with 'A' Grade</Text>
        </View>
      </View>

      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
      <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Image
          source={require("../../assets/SKCT-College-Campus-12.jpg")}
          style={styles.collegeImage}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Sri Krishna College of Technology</Text>
          <Text style={styles.infoText}>Address: WWHG+28R, Golf Rd, Arivoli Nagar</Text>
          <Text style={styles.infoText}>Kovaipudur, Tamil Nadu 641042</Text>
          <Text style={styles.infoText}>Phone: +91 422 2604567</Text>
          <Text style={styles.infoText}>Website: www.skct.edu.in</Text>
        </View>
      </View>

      <View style={styles.main}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("AdminAttendance")}
        >
          <Text style={styles.cardText}>Manage Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("AdminNotifications")}
        >
          <Text style={styles.cardText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("StudyMaterials")}
        >
          <Text style={styles.cardText}>Upload Study Materials</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Modal */}
      {isMenuVisible && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={isMenuVisible}
          onRequestClose={() => setMenuVisible(false)}
        >
          <TouchableOpacity
            style={styles.overlay}
            onPress={() => setMenuVisible(false)}
          >
            <View style={styles.menu}>
              <FlatList
                data={menuItems}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => handleMenuItemPress(item.navigateTo)}
                  >
                    <Text style={styles.menuItemText}>{item.title}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center', 
    backgroundColor: '#f8f8f8',    
    borderBottomWidth: 1,          
    borderBottomColor: '#ddd',    
    paddingTop: 30,
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 10, 
    textAlign: 'center', 
    color: '#666',
  },
  content: {
    flex: 1,
    justifyContent: 'center',      
    alignItems: 'center',          
  },
  collegeImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#003366",
  },
  infoText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  main: {
    margin: 20,
  },
  card: {
    backgroundColor: '#0066cc',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  cardText: {
    color: 'white',
    fontSize: 16,
  },
  menuButton: {
    position: 'absolute',
    top: 120,              // Adjust for spacing from the top of the navbar
    right: 15,            // Align to the right side of the screen
    padding: 10, 
  },
  menuIcon: {
    fontSize: 24,             // Icon size
    color: '#333',            // Icon color
    fontWeight: 'bold',       // Make it stand out
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menu: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: 250,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default DashboardScreen;
