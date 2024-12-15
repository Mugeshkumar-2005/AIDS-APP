import React, { useState } from 'react';
import { View, TextInput, Text, Alert, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);


  const userEmailRegex = /^72782\d{1}tuad\d{3}@skct\.edu\.in$/;

  const adminEmailRegex = /^[a-zA-Z]+(\.[a-zA-Z]+)?@skct\.edu\.in$/;

  const handleLogin = async() => {
    // try {
    //   if (isAdmin) {
    //     // Admin login logic
    //     if (adminEmailRegex.test(email)) {
    //       const userCredential = await signInWithEmailAndPassword(auth, email, password);
    //       const user = userCredential.user;

    //       // Check if the user has an admin role in Firestore
    //       const userRef = doc(db, 'users', user.uid);  // Access user data from Firestore
    //       const userDoc = await getDoc(userRef);
          
    //       if (userDoc.exists() && userDoc.data().role === 'admin') {
    //         Alert.alert('Login successful', 'Welcome Admin');
    //         navigation.navigate('AdminDashboard');
    //       } else {
    //         Alert.alert('Login failed', 'You are not authorized as an admin');
    //       }
    //     } else {
    //       Alert.alert('Login failed', 'Invalid Admin email format');
    //     }
    //   } else {
    //     // User login logic using Firebase Authentication
    //     if (userEmailRegex.test(email)) {
    //       const userCredential = await signInWithEmailAndPassword(auth, email, password);
    //       const user = userCredential.user;

    //       Alert.alert('Login successful', 'Welcome User');
    //       navigation.navigate('Dashboard');
    //     } else {
    //       Alert.alert('Login failed', 'Invalid user email format');
    //     }
    //   }
    // } catch (error) {
    //   console.error('Login error: ', error);
    //   Alert.alert('Login failed', 'Invalid email or password');
    // }
    try {
      if (isAdmin) {
        // Admin login logic
        if (adminEmailRegex.test(email)) {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;

          // Check Firestore for admin role
          const userRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userRef);
          
          if (userDoc.exists() && userDoc.data().role === 'admin') {
            Alert.alert('Login successful', 'Welcome Admin');
            navigation.navigate('AdminDashboard');
          } else {
            Alert.alert('Login failed', 'You are not authorized as an admin');
          }
        } else {
          Alert.alert('Login failed', 'Invalid Admin email format');
        }
      } else {
        // User login logic
        if (userEmailRegex.test(email)) {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          Alert.alert('Login successful', 'Welcome User');
          navigation.navigate('Dashboard');
        } else {
          Alert.alert('Login failed', 'Invalid user email format');
        }
      }
    } catch (error) {
      Alert.alert('Login failed', 'Invalid email or password');
    }
  };

  const toggleLoginMode = () => {
    setIsAdmin(!isAdmin); 
  };

  const handleGoogleSignIn = () => {
    Alert.alert('Google Sign In', 'Google Sign In feature to be implemented');
  };

  const handleFacebookSignIn = () => {
    Alert.alert('Facebook Sign In', 'Facebook Sign In feature to be implemented');
  };

  const handleGitHubSignIn = () => {
    Alert.alert('GitHub Sign In', 'GitHub Sign In feature to be implemented');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sri Krishna College Of Technology</Text>
      <Image source={require('../assets/clg.png')} style={styles.logo} />
      <Text style={styles.subtitle}>Department of AI & DS</Text>
      
      <View style={styles.cardContainer}>
      {/* Toggle Login Mode */}
      <TouchableOpacity onPress={toggleLoginMode}>
        <Text style={styles.adminLink}>
          {isAdmin ? 'Login as User?' : 'Admin Login?'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.label}>{isAdmin ? 'Admin Email' : 'Email'}:</Text>
      <View style={styles.inputContainer}>
      <Icon name="envelope" size={20} color="black" style={styles.icon1} />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder={`Enter your ${isAdmin ? 'admin' : 'user'} email`}
        keyboardType="email-address"
      />
      </View>

      <Text style={styles.label}>{isAdmin ? 'Admin Password' : 'Password'}:</Text>
      <View style={styles.inputContainer}>
      <Icon name="lock" size={20} color="black" style={styles.icon1} />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      </View>

      {/* <Button title="Login" onPress={handleLogin} /> */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.socialButtonsContainer}>
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
        <Image source={require('../assets/google.png')} style={styles.icon} />
      </TouchableOpacity>

      {/* Facebook Sign In Button with Logo */}
      <TouchableOpacity style={styles.googleButton} onPress={handleFacebookSignIn}>
        <Image source={require('../assets/fb.png')} style={styles.icon} />
      </TouchableOpacity>

      {/* GitHub Sign In Button with Logo */}
      <TouchableOpacity style={styles.googleButton} onPress={handleGitHubSignIn}>
        <Image source={require('../assets/github_PNG40.png')} style={styles.icon} />
      </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerButtonText}>New? Register Here</Text>
      </TouchableOpacity>
    </View>
  );
};

// Add styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  adminLink: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'left',
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
  },
  icon: {
    width: 44,
    height: 44,
  },
  icon1: {
      padding:5,
      marginLeft:10,
      marginRight: 2,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 10,
    marginBottom:10,
  },
  googleButton: {
    marginTop: 15,
  },
  registerButtonText: {
    color: '#0066cc',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardContainer: {
    width: '100%',  
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, 
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    padding: 10,
    backgroundColor: '#0066cc',
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 2,
    padding: 5,
    marginVertical: 10,
    borderRadius: 20,
    borderColor: '#0066cc',
  },
});

export default LoginScreen;