import React, { useState } from 'react';
import { View, TextInput,  Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const userEmailRegex = /^72782\d{1}tuad\d{3}@skct\.edu\.in$/;

  const adminEmailRegex = /^[a-zA-Z]+(\.[a-zA-Z]+)?@skct\.edu\.in$/;

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
    } else {
      if (isAdmin && !adminEmailRegex.test(email)) {
        Alert.alert('Error', 'Invalid admin email format');
      } else if (!isAdmin && !userEmailRegex.test(email)) {
        Alert.alert('Error', 'Invalid user email format');
      } else {
        Alert.alert('Success', 'Registration complete');
        navigation.navigate('Login');  
      }
    }
  };

  const toggleRegisterMode = () => {
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
      {/* Toggle between User and Admin Registration */}
      <TouchableOpacity onPress={toggleRegisterMode}>
        <Text style={styles.adminLink}>
          {isAdmin ? 'Student Registration?' : 'Admin Registration?'}
        </Text>
      </TouchableOpacity>

      <Text>{isAdmin ? 'Admin Register' : 'Register'}</Text>

      
      <View style={styles.inputContainer}>
      <Icon name="user" size={20} color="black" style={styles.icon1} /> 
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      </View>

      <View style={styles.inputContainer}>
      <Icon name="envelope" size={20} color="black" style={styles.icon1} /> 
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder={isAdmin ? 'Enter admin email' : 'Enter user email'}
        keyboardType="email-address"
      />
      </View>

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

      <View style={styles.inputContainer}>
      <Icon name="lock" size={20} color="black" style={styles.icon1} />
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm your password"
        secureTextEntry
      />
      </View>
      <TouchableOpacity style={styles.RegisterButton} onPress={handleRegister}>
          <Text style={styles.RegisterButtonText}>Register</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30,
  },
  input: {
    flex: 1,
    height: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
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
  googleButton: {
    marginTop: 15,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 5,
    marginBottom:10,
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
    textAlign: 'center',
  },
  RegisterButton: {
    width: '100%',
    padding: 10,
    backgroundColor: '#0066cc',
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  RegisterButtonText: {
    color: '#fff',
    fontSize: 18,
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

export default RegisterScreen;