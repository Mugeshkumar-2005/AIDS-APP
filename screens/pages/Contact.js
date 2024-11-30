// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// const Contact = () => {
//   const location = {
//     latitude: 37.7749, // replace with your latitude
//     longitude: -122.4194, // replace with your longitude
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   };

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={location}
//         provider={MapView.PROVIDER_GOOGLE} // Use Google Maps
//       >
//         <Marker
//           coordinate={{
//             latitude: location.latitude,
//             longitude: location.longitude,
//           }}
//           title="Our Location"
//           description="Your contact description here"
//         />
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop:-85,
//     marginBottom:50
//   },
//   map: {
//     width: '100%',
//     height: '80%',
//   },
// });

// export default Contact;

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Contact = () => {
  const [location, setLocation] = useState(null);
  const address = "WWHG+28R, Golf Rd, Arivoli Nagar, Vivekanandapuram, Kovaipudur, Tamil Nadu 641042"; // Your address
  const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your API Key

  useEffect(() => {
    // Function to fetch latitude and longitude
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`
        );
        const data = await response.json();

        if (data.status === "OK") {
          const { lat, lng } = data.results[0].geometry.location;
          setLocation({ latitude: lat, longitude: lng, latitudeDelta: 0.005, longitudeDelta: 0.005 });
        } else {
          console.error("Error fetching location:", data.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCoordinates();
  }, []);

  if (!location) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Loading indicator while fetching location
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={location} // Center map on fetched location
        provider={MapView.PROVIDER_GOOGLE} // Use Google Maps
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="Sri Krishna College of Technology" // Title for marker
          description={address} // Description for marker
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%', // Use full height for the map
  },
});

export default Contact;
