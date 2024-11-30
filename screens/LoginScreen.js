import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, Image, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const validUserPassword = 'password123';
  const validAdminPassword = 'admin123';

  const userEmailRegex = /^72782\d{1}tuad\d{3}@skct\.edu\.in$/;

  const adminEmailRegex = /^[a-zA-Z]+(\.[a-zA-Z]+)?@skct\.edu\.in$/;

  const handleLogin = () => {
    if (isAdmin) {
      if (adminEmailRegex.test(email) && password === validAdminPassword) {
        navigation.navigate('AdminDashboard');
      } else {
        Alert.alert('Login failed', 'Invalid Admin email or password');
      }
    } else {
      if (userEmailRegex.test(email) && password === validUserPassword) {
        Alert.alert('Login successful', 'Welcome User');
        navigation.navigate('Dashboard'); 
      } else {
        Alert.alert('Login failed', 'Invalid email or password');
      }
    }
  };

  const toggleLoginMode = () => {
    setIsAdmin(!isAdmin); 
  };

  const handleGoogleSignIn = () => {
    Alert.alert('Google Sign In', 'Google Sign In feature to be implemented');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sri Krishna College Of Technology</Text>
      <Image source={require('../assets/clg.png')} style={styles.logo} />
      <Text style={styles.subtitle}>Department of AI & DS</Text>

      {/* Toggle Login Mode */}
      <TouchableOpacity onPress={toggleLoginMode}>
        <Text style={styles.adminLink}>
          {isAdmin ? 'Login as User?' : 'Admin Login?'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.label}>{isAdmin ? 'Admin Email' : 'Email'}:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder={`Enter your ${isAdmin ? 'admin' : 'user'} email`}
        keyboardType="email-address"
      />

      <Text style={styles.label}>{isAdmin ? 'Admin Password' : 'Password'}:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
        <Text style={styles.googleButtonText}>Sign In with Google</Text>
      </TouchableOpacity>

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
    fontSize: 24,
    fontWeight: 'bold',
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
    width: '100%',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  googleButton: {
    backgroundColor: '#DB4437',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButtonText: {
    color: '#0066cc',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
