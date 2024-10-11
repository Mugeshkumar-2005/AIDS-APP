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


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native'; 
import ProfileImage from '../assets/Profile.png';  
import HomePage from './pages/HomePage';
import Icon from 'react-native-vector-icons/FontAwesome';

const DashboardScreen = ({ route, navigation }) => {
  const [profileImage, setProfileImage] = useState(ProfileImage);  
  const isFocused = useIsFocused();  

  useEffect(() => {
    if (route.params?.updatedProfileImage) {
      setProfileImage({ uri: route.params.updatedProfileImage });
    }
  }, [isFocused, route.params?.updatedProfileImage]);

  const handleProfilePress = () => {
    navigation.navigate('Profile', {
      currentImage: profileImage.uri, 
    });
  };

  const handleTaskManagementPress = () => {
    navigation.navigate('TaskManagement');
  };

  const handleReportsPress = () => {
    navigation.navigate('Reports');
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require('../assets/clg.png')} style={styles.logo} />
        <View style={styles.textContainer}>
        <Text style={styles.title}>Sri Krishna College Of Technology</Text>
        <Text style={styles.subtitle}>An Autonomous Institution | Accredited by NAAC with 'A' Grade</Text>
        </View>
      </View>

      <View style={styles.content}>
        {/* <Text style={styles.welcomeText}>Welcome to the Dashboard </Text>
        <Text>AI & DS Deparement</Text> */}
        <HomePage/>
      </View>

      <View style={styles.navbar2}>
        <TouchableOpacity onPress={handleTaskManagementPress} style={styles.touchable}>
          <Icon name="tasks" size={30} color="white" style={styles.touchableButton} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleReportsPress} style={styles.touchable}>
          <Icon name="bell" size={30} color="white" style={styles.touchableButton}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProfilePress} style={styles.profileContainer}>
          <Image source={profileImage} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1, 
    alignItems: 'center',
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
    paddingTop: 20,
   
  },
  logo: {
    width: 70,
    height: 70,
    marginTop:10,
    marginLeft:5,
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
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  navbar2: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 10,
    backgroundColor: 'darkblue',    
    borderRadius: 30,        
  },
  touchable: {
    alignItems: 'center', 
  },
  touchableButton: {
    margin:10,
  },
  profileContainer: {
    padding: 5,   
  },
  profileImage: {
    width: 40,    
    height: 40,  
    borderRadius: 20, 
  },
});

export default DashboardScreen;
