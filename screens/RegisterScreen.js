import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet,Alert,Image } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
    } else {
      Alert.alert('Success', 'Registration complete');
      navigation.navigate('Login');  
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sri Krishna College Of Technology</Text>
      <Image source={require('../assets/clg.png')} style={styles.logo} />
      <Text style={styles.subtitle}>Department of AI & DS</Text>
      <Text>Register</Text>
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
        placeholder="Enter your email"
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
  rigester:{
    padding:50,
    borderRadius:30,
  }
});

export default RegisterScreen; 
