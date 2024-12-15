// import React, { useState, useEffect } from 'react';
// import { View, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { useIsFocused } from '@react-navigation/native'; 
// import ProfileImage from '../assets/Profile.png';  
// import Icon from 'react-native-vector-icons/FontAwesome';

// const DashboardScreen = ({ route, navigation }) => {
//   const [profileImage, setProfileImage] = useState(ProfileImage);  

//   const isFocused = useIsFocused();  

//   useEffect(() => {
//     if (route.params?.updatedProfileImage) {
//       setProfileImage({ uri: route.params.updatedProfileImage });
//     }
//   }, [isFocused, route.params?.updatedProfileImage]);

//   const handleProfilePress = () => {
//     navigation.navigate('Profile', {
//       currentImage: profileImage.uri, 
//     });
//   };
//   const handleTaskManagementPress = () => {
//     navigation.navigate('TaskManagement');
//   };

//   const handleReportsPress = () => {
//     navigation.navigate('Reports');
//   };
//   return (
//     <View style={styles.container}>
//       <View style={styles.navbar}>
//       <Image source={require('../assets/clg.png')} style={styles.logo} />
//       <Text style={styles.title}>Sri Krishna College Of Technology</Text>
//       <Text style={styles.subtitle}>An Autonomus Institution | Accredited by NAAC with 'A' Grade</Text>
//       </View>

//       <View style={styles.content}>
//         <Text style={styles.welcomeText}>Welcome to the Dashboard</Text>
//       </View>


//       <View style={styles.navbar2}>
//         <TouchableOpacity onPress={handleTaskManagementPress}>
//         <Icon name="tasks" size={20} color="green" />
//           <Text  style={styles.touchableButton}>Task</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleReportsPress} >
//          <Icon name="bell" size={20} color="orange" />
//           <Text style={styles.touchableButton}>Report</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={handleProfilePress} style={styles.profileContainer}>
//           <Image 
//             source={profileImage}  
//             style={styles.profileImage} 
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   subtitle: {
//     fontSize: 14, 
//     textAlign: 'center', 
//     color: '#666',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   logo: {
//     width: 70,
//     height: 70,
//     marginTop:10,
//     marginBottom:10,
//   },
//   touchableButton: {
//     fontSize:17,           
//     alignItems: 'center',    
//   },
//   navbar2:{
//     justifyContent:'space-around',
//     flexDirection:'row',
//     margin:20,
//     backgroundColor: 'lightblue',    
//     borderRadius:30,        
//     padding:20, 
//   },
//   container: {
//     flex: 1,
//   },
//   navbar: {
//     flexDirection: 'row',             
//     backgroundColor: '#f8f8f8',    
//     borderBottomWidth: 1,          
//     borderBottomColor: '#ddd',    
//     paddingTop: 20 ,
//   },
//   profileContainer: {
//     padding: 5,   
//   },
//   profileImage: {
//     width: 70,    
//     height: 70,  
//     borderRadius: 20, 
//   },
//   content: {
//     flex: 1,                       
//     justifyContent: 'center',      
//     alignItems: 'center',          
//   },
//   welcomeText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default DashboardScreen;


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { useIsFocused } from '@react-navigation/native'; 
// import ProfileImage from '../assets/Profile.png';  
// import HomePage from './pages/HomePage';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const DashboardScreen = ({ route, navigation }) => {
//   const [profileImage, setProfileImage] = useState(ProfileImage);  
//   const isFocused = useIsFocused();  

//   useEffect(() => {
//     if (route.params?.updatedProfileImage) {
//       setProfileImage({ uri: route.params.updatedProfileImage });
//     }
//   }, [isFocused, route.params?.updatedProfileImage]);

//   const handleProfilePress = () => {
//     navigation.navigate('Profile', {
//       currentImage: profileImage.uri, 
//     });
//   };

//   const handleTaskManagementPress = () => {
//     navigation.navigate('TaskManagement');
//   };

//   const handleReportsPress = () => {
//     navigation.navigate('Reports');
//   };
//   const handleBookPress = () => {
//     navigation.navigate('Book');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.navbar}>
//         <Image source={require('../assets/clg.png')} style={styles.logo} />
//         <View style={styles.textContainer}>
//         <Text style={styles.title}>Sri Krishna College Of Technology</Text>
//         <Text style={styles.subtitle}>An Autonomous Institution | Accredited by NAAC with 'A' Grade</Text>
//         </View>
//       </View>

//       <View style={styles.content}>
//         {/* <Text style={styles.welcomeText}>Welcome to the Dashboard </Text>
//         <Text>AI & DS Deparement</Text> */}
//         <HomePage/>
//       </View>

//       <View style={styles.navbar2}>
//         <TouchableOpacity onPress={handleTaskManagementPress} style={styles.touchable}>
//           <Icon name="tasks" size={30} color="white" style={styles.touchableButton} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleBookPress} style={styles.touchable}>
//           <Icon name="book" size={30} color="white" style={styles.touchableButton} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleReportsPress} style={styles.touchable}>
//           <Icon name="bell" size={30} color="white" style={styles.touchableButton}/>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleProfilePress} style={styles.profileContainer}>
//           <Image source={profileImage} style={styles.profileImage} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   textContainer: {
//     flex: 1, 
//     alignItems: 'center',
//   },
//   container: {
//     flex: 1,
//   },
//   navbar: {
//     flexDirection: 'row',
//     alignItems: 'center', 
//     backgroundColor: '#f8f8f8',    
//     borderBottomWidth: 1,          
//     borderBottomColor: '#ddd',    
//     paddingTop: 30,
    
   
//   },
//   logo: {
//     width: 70,
//     height: 70,
//     marginTop:10,
//     marginLeft:5,
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 10, 
//     textAlign: 'center', 
//     color: '#666',
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',      
//     alignItems: 'center',          
//   },
//   welcomeText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   navbar2: {
//     justifyContent: 'space-around',
//     flexDirection: 'row',
//     margin: 10,
//     backgroundColor: '#003366',    
//     borderRadius: 30,
//   },
//   touchable: {
//     alignItems: 'center', 
//   },
//   touchableButton: {
//     margin:10,
//   },
//   profileContainer: {
//     padding: 5,   
//   },
//   profileImage: {
//     width: 40,    
//     height: 40,  
//     borderRadius: 20, 
//   },
// });

// export default DashboardScreen;



// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
// import { useIsFocused } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import HomePage from './pages/HomePage';
// import ProfileImage from '../assets/Profile.png';

// const DashboardScreen = ({ route, navigation }) => {
//   const [profileImage, setProfileImage] = useState(ProfileImage);
//   const isFocused = useIsFocused();

//   // Animated scale values for each icon
//   const taskScale = useRef(new Animated.Value(1)).current;
//   const bookScale = useRef(new Animated.Value(1)).current;
//   const reportsScale = useRef(new Animated.Value(1)).current;
//   const profileScale = useRef(new Animated.Value(1)).current;

//   useEffect(() => {
//     if (route.params?.updatedProfileImage) {
//       setProfileImage({ uri: route.params.updatedProfileImage });
//     }
//   }, [isFocused, route.params?.updatedProfileImage]);

//   const handlePressIn = (scaleValue) => {
//     Animated.timing(scaleValue, {
//       toValue: 1.2, // Scale up
//       duration: 100,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handlePressOut = (scaleValue, onPress) => {
//     Animated.timing(scaleValue, {
//       toValue: 1,
//       duration: 100,
//       useNativeDriver: true,
//     }).start(() => {
//       if (onPress) onPress();
//     });
//   };

//   const renderButton = (iconName, isSelected, onPress, scaleValue) => (
//     <TouchableOpacity onPressIn={() => handlePressIn(scaleValue)} onPressOut={() => handlePressOut(scaleValue, onPress)} style={styles.touchable}>
//       <Animated.View style={[isSelected ? styles.touchableButton : styles.unselectedButton, { transform: [{ scale: scaleValue }] }]}>
//         <Icon
//           name={iconName}
//           style={isSelected ? styles.icon : styles.unselectedIcon}
//         />
//       </Animated.View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Top Navbar */}
//       <View style={styles.navbar}>
//         <Image source={require('../assets/clg.png')} style={styles.logo} />
//         <View style={styles.textContainer}>
//           <Text style={styles.title}>Sri Krishna College Of Technology</Text>
//           <Text style={styles.subtitle}>
//             An Autonomous Institution | Accredited by NAAC with 'A' Grade
//           </Text>
//         </View>
//       </View>

//       {/* Main Content */}
//       <View style={styles.content}>
//         <HomePage />
//       </View>

//       {/* Bottom Navbar with Animation */}
//       <View style={styles.navbar2}>
//         {/* Task Management */}
//         <Animated.View style={{ transform: [{ scale: taskScale }] }}>
//           <TouchableOpacity
//             onPressIn={() => handlePressIn(taskScale)}
//             onPressOut={() => handlePressOut(taskScale, () => navigation.navigate('TaskManagement'))}
//             style={styles.touchable}
//           >
//             <Icon name="tasks" size={30} color="white" style={styles.icon} />
//           </TouchableOpacity>
//         </Animated.View>

//         {/* Book */}
//         <Animated.View style={{ transform: [{ scale: bookScale }] }}>
//           <TouchableOpacity
//             onPressIn={() => handlePressIn(bookScale)}
//             onPressOut={() => handlePressOut(bookScale, () => navigation.navigate('Book'))}
//             style={styles.touchable}
//           >
//             <Icon name="book" size={30} color="white" style={styles.icon} />
//           </TouchableOpacity>
//         </Animated.View>

//         {/* Reports */}
//         <Animated.View style={{ transform: [{ scale: reportsScale }] }}>
//           <TouchableOpacity
//             onPressIn={() => handlePressIn(reportsScale)}
//             onPressOut={() => handlePressOut(reportsScale, () => navigation.navigate('Reports'))}
//             style={styles.touchable}
//           >
//             <Icon name="bell" size={30} color="white" style={styles.icon} />
//           </TouchableOpacity>
//         </Animated.View>

//         {/* Profile */}
//         <Animated.View style={{ transform: [{ scale: profileScale }] }}>
//           <TouchableOpacity
//             onPressIn={() => handlePressIn(profileScale)}
//             onPressOut={() =>
//               handlePressOut(profileScale, () =>
//                 navigation.navigate('Profile', { currentImage: profileImage.uri })
//               )
//             }
//             style={styles.profileContainer}
//           >
//             <Image source={profileImage} style={styles.profileImage} />
//           </TouchableOpacity>
//         </Animated.View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   navbar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#003366',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     paddingTop: 30,
//   },
//   logo: {
//     width: 70,
//     height: 70,
//     marginTop: 10,
//     marginLeft: 5,
//     marginBottom: 10,
//   },
//   textContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#ffffff',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 10,
//     color: '#ffffff',
//     textAlign: 'center',
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   navbar2: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#003366', 
//     borderRadius: 25,
//     margin: 10,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//   },
//   touchable: {
//     alignItems: 'center',
//   },
//   icon: {
//     margin: 10,
//   },
//    touchableButton: {
//     backgroundColor: '#32cd32', // Green background for the selected icon
//     borderRadius: 25,
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   profileContainer: {
//     alignItems: 'center',
//   },
//   profileImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   unselectedButton: {
//     backgroundColor: 'transparent', // Transparent for unselected
//     borderRadius: 25,
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   unselectedIcon: {
//     color: '#aaa', // Grey color for unselected icons
//     fontSize: 24,
//   },

// });

// export default DashboardScreen;


import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomePage from './pages/HomePage';
import ProfileImage from '../assets/Profile.png';

const DashboardScreen = ({ route, navigation }) => {
  const [profileImage, setProfileImage] = useState(ProfileImage);
  const [selectedIcon, setSelectedIcon] = useState(null); // Track selected icon
  const isFocused = useIsFocused();

  const handlePress = (iconName, navigateTo) => {
    setSelectedIcon(iconName); // Update selected icon
    if (navigateTo) navigation.navigate(navigateTo);
  };

  return (
    <View style={styles.container}>
      {/* Top Navbar */}
      <View style={styles.navbar}>
        <Image source={require('../assets/clg.png')} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Sri Krishna College Of Technology</Text>
          <Text style={styles.subtitle}>
            An Autonomous Institution | Accredited by NAAC with 'A' Grade
          </Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <HomePage />
      </View>

      {/* Bottom Navbar */}
      <View style={styles.navbar2}>
        {/* Task Management */}
        <TouchableOpacity
          onPress={() => handlePress('tasks', 'TaskManagement')}
          style={[
            styles.touchable,
            selectedIcon === 'tasks' ? styles.selectedButton : styles.unselectedButton,
          ]}
        >
          <Icon name="tasks" size={30} style={styles.icon} />
        </TouchableOpacity>

        {/* Book */}
        <TouchableOpacity
          onPress={() => handlePress('book', 'Book')}
          style={[
            styles.touchable,
            selectedIcon === 'book' ? styles.selectedButton : styles.unselectedButton,
          ]}
        >
          <Icon name="book" size={30} style={styles.icon} />
        </TouchableOpacity>

        {/* Reports */}
        <TouchableOpacity
          onPress={() => handlePress('reports', 'Reports')}
          style={[
            styles.touchable,
            selectedIcon === 'reports' ? styles.selectedButton : styles.unselectedButton,
          ]}
        >
          <Icon name="bell" size={30} style={styles.icon} />
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity
          onPress={() => handlePress('profile', 'Profile')}
          style={[
            styles.touchable,
            selectedIcon === 'profile' ? styles.selectedButton : styles.unselectedButton,
          ]}
        >
          <Image source={profileImage} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#003366',
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
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 10,
    color: '#ffffff',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbar2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#003366',
    // borderRadius: 25,
    // margin: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  navbarCurve: { position: 'absolute', top: -30, left: 50, transform: [{ translateX: -50 }], width: 100, height: 100, backgroundColor: '#003366', borderRadius: 50, zIndex: -1,},
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  selectedButton: {
    backgroundColor: '#ffffff', // White circle for selected
    borderRadius: 25,
  },
  unselectedButton: {
    backgroundColor: 'transparent', // Transparent for unselected
  },
  icon: {
    color: '#121212', // Icon color
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default DashboardScreen;