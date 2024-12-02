import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import ProfileImage from '../../assets/Profile.png';
import AdminHome from './adminpages/AdminHome';
import AdminDepartment from './adminpages/AdminDepartment';

const DashboardScreen = ({ route, navigation }) => {
  const [profileImage, setProfileImage] = useState(ProfileImage);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (route.params?.updatedProfileImage) {
      setProfileImage({ uri: route.params.updatedProfileImage });
    }
  }, [isFocused, route.params?.updatedProfileImage]);

  const menuItems = [
    { title: 'View Students', navigateTo: 'AdminStudent' },
    { title: 'View Staff', navigateTo: 'AdminStaff' },
    { title: 'Log Out', navigateTo: 'Login' },
  ];

  const toggleMenu = () => setMenuVisible(!isMenuVisible);

  const handleMenuItemPress = (navigateTo) => {
    setMenuVisible(false);
    navigation.navigate(navigateTo);
  };

  return (
    <ImageBackground
      source={require('../../assets/SKCT-College-Campus-12.jpg')}
      style={styles.backgroundImage}
      >
      <View style={styles.container}>
        {/* Fixed Navbar */}
        <View style={styles.navbar}>
          <Image source={require('../../assets/clg.png')} style={styles.logo} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Sri Krishna College Of Technology</Text>
            <Text style={styles.subtitle}>
              An Autonomous Institution | Accredited by NAAC with 'A' Grade
            </Text>
          </View>
        </View>


        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={styles.scrollViewContent}>

        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>

      <AdminHome/>
          
    
          <View style={styles.main}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('AdminAttendance')}
            >
              <Text style={styles.cardText}>Manage Attendance</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('AdminNotifications')}
              >
              <Text style={styles.cardText}>Notifications</Text>
            </TouchableOpacity>
          </View>

        <AdminDepartment/>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Sri Krishna College of Technology</Text>
            <Text style={styles.infoText}>
              Address: WWHG+28R, Golf Rd, Arivoli Nagar
            </Text>
            <Text style={styles.infoText}>Kovaipudur, Tamil Nadu 641042</Text>
            <Text style={styles.infoText}>Phone: +91 422 2604567</Text>
            <Text style={styles.infoText}>Website: www.skct.edu.in</Text>
          </View>
        </ScrollView>

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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
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
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  logo: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 10,
    textAlign: 'center',
    color: '#666',
  },
  menuButton: {
    position: 'absolute',
    right: 5,
    padding: 10,
  },
  menuIcon: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  scrollViewContent: {
    padding: 20,
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366',
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  main: {
    marginBottom: 20,
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
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
