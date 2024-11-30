import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sri Krishna College Of Technology</Text>
      <Image source={require('../assets/clg.png')} style={styles.logo} />
      <Text style={styles.subtitle}>Department of AI & DS</Text>

      {/* Toggle between User and Admin Registration */}
      <TouchableOpacity onPress={toggleRegisterMode}>
        <Text style={styles.adminLink}>
          {isAdmin ? 'Student Registration?' : 'Admin Registration?'}
        </Text>
      </TouchableOpacity>

      <Text>{isAdmin ? 'Admin Register' : 'Register'}</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder={isAdmin ? 'Enter admin email' : 'Enter user email'}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm your password"
        secureTextEntry
      />

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 30,
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
    marginBottom: 30,
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
    color: '#0066cc',
  },
});

export default RegisterScreen;