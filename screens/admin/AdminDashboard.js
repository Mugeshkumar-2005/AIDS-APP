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
  Animated,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import vector icons
import ProfileImage from '../../assets/Profile.png';
import AdminHome from './adminpages/AdminHome';
import AdminDepartment from './adminpages/AdminDepartment';

const DashboardScreen = ({ route, navigation }) => {
  const [profileImage, setProfileImage] = useState(ProfileImage);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [menuSlide] = useState(new Animated.Value(-300)); // Initial menu position
  const isFocused = useIsFocused();

  useEffect(() => {
    if (route.params?.updatedProfileImage) {
      setProfileImage({ uri: route.params.updatedProfileImage });
    }
  }, [isFocused, route.params?.updatedProfileImage]);

  // Menu items with titles, navigation, and icons
  const menuItems = [
    { title: 'View Students', navigateTo: 'AdminStudent', icon: 'school' },
    { title: 'View Staff', navigateTo: 'AdminStaff', icon: 'groups' },
    { title: 'Log Out', navigateTo: 'Login', icon: 'logout' },
  ];

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
    Animated.timing(menuSlide, {
      toValue: isMenuVisible ? -300 : 0, // Slide in or out
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleMenuItemPress = (navigateTo) => {
    toggleMenu();
    navigation.navigate(navigateTo);
  };

  return (
    <ImageBackground
      source={require('../../assets/SKCT-College-Campus-12.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Navbar */}
        <View style={styles.navbar}>
          <Image source={require('../../assets/clg.png')} style={styles.logo} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Sri Krishna College Of Technology</Text>
            <Text style={styles.subtitle}>
              An Autonomous Institution | Accredited by NAAC with 'A' Grade
            </Text>
          </View>
          <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
            <Text style={styles.menuIcon}>{isMenuVisible ? '✖' : '☰'}</Text>
          </TouchableOpacity>
        </View>

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <AdminHome />

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

          <AdminDepartment />

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

        {/* Sliding Menu */}
        <Animated.View style={[styles.menu, { left: menuSlide }]}>
          <FlatList
            data={menuItems}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => handleMenuItemPress(item.navigateTo)}
              >
                <Icon
                  name={item.icon} // Dynamically set the icon
                  size={24}
                  color="#003366" // Customize color
                  style={styles.menuIconStyle}
                />
                <Text style={styles.menuItemText}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </Animated.View>
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
    justifyContent: 'space-between',
    backgroundColor: '#003366',
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  logo: {
    width: 60,
    height: 60,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'center',
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  scrollViewContent: {
    padding: 20,
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
  menu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 250,
    backgroundColor: '#ffffff',
    padding: 20,
    elevation: 10,
    zIndex: 1,
  },
  menuItem: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10, // Add space between icon and text
    fontWeight: 'bold',
  },
  menuIconStyle: {
    marginRight: 10, // Space for consistency
  },
});

export default DashboardScreen;
