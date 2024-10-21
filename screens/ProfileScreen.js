import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker for image selection

const ProfileScreen = ({ navigation, route }) => {
  const [name, setName] = useState(route.params?.name ||'John Doe');
  const [email, setEmail] = useState(route.params?.email ||'johndoe@example.com');
  const [profileImage, setProfileImage] = useState(route.params?.currentImage || null); // Use passed image if available

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert('Permission to access gallery is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri); // Set the selected image URI
      console.log("Selected image URI:", result.assets[0].uri); // Log the selected image URI for debugging
    }
  };

  const handleSave = () => {
    navigation.navigate('Dashboard', { updatedProfileImage: profileImage });
    alert('Profile updated!');
  };

  const handleLogout = () => {
    navigation.navigate('Login'); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.imageContainer}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Image source={require('../assets/Profile.png')} style={styles.profileImage} />  
          )}
          <Text style={styles.changePhotoText}>Tap to change photo</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.form}>
        <Text style={styles.label}>Name:</Text>
        <TextInput 
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput 
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
       
        <Button title="Save Profile" onPress={handleSave} />
      </View>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  imageContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, 
  },
  changePhotoText: {
    marginTop: 10,
    fontSize: 14,
    color: '#007bff',  
  },
  form: {
    width: '100%',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 30,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    width: '100%',
  },
  logoutButton: {
    marginTop: 10,
    backgroundColor: '#ff4d4d',   
    padding: 10,
    borderRadius: 30,
    width: 100,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileScreen;
