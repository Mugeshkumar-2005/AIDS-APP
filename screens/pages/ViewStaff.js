// import React, { useState } from 'react';
// import { StyleSheet, View, Button, ActivityIndicator } from 'react-native';
// import * as DocumentPicker from 'expo-document-picker';
// import * as WebBrowser from 'expo-web-browser';

// const ViewStaff = () => {
//   const [loading, setLoading] = useState(false);

//   const pickDocument = async () => {
//     setLoading(true);
//     // Pick a PDF document
//     const result = await DocumentPicker.getDocumentAsync({ type: 'application/pdf' });

//     if (result.type === 'success') {
//       // Open the PDF in the default viewer or web browser
//       WebBrowser.openBrowserAsync(result.uri);
//     }

//     setLoading(false);
//   };

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <Button title="Pick and View PDF" onPress={pickDocument} />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default ViewStaff;


// import React, { useState } from 'react';
// import { StyleSheet, View, Button, ActivityIndicator } from 'react-native';
// import * as WebBrowser from 'expo-web-browser';

// const ViewStaff = () => {
//   const [loading, setLoading] = useState(false);
//   const pdfUrl = 'https://skct.edu.in/wp-content/uploads/2024/04/12.-B.Tech-AIDS.pdf'; // Replace with your PDF URL

//   const viewPdf = async () => {
//     setLoading(true);
//     // Open the PDF in the default viewer or web browser
//     await WebBrowser.openBrowserAsync(pdfUrl);
//     setLoading(false);
//   };

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <Button title="View PDF" onPress={viewPdf} />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default ViewStaff;


// import React from 'react';
// import { StyleSheet, View, Button, Linking } from 'react-native';

// const ViewStaff = () => {
//   const pdfUrl = 'https://skct.edu.in/wp-content/uploads/2024/04/12.-B.Tech-AIDS.pdf'; // Your PDF URL

//   const openPDFInGoogleViewer = async () => {
//     const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
//     const supported = await Linking.canOpenURL(googleViewerUrl);
//     if (supported) {
//       await Linking.openURL(googleViewerUrl);
//     } else {
//       console.log("Don't know how to open URI: " + googleViewerUrl);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="View PDF" onPress={openPDFInGoogleViewer} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default ViewStaff;


// import React, { useState } from 'react';
// import { StyleSheet, View, ActivityIndicator } from 'react-native';
// import { WebView } from 'react-native-webview';

// const ViewStaff = () => {
//   const [loading, setLoading] = useState(true);
//   const pdfUrl = `https://docs.google.com/gview?url=${encodeURIComponent('https://skct.edu.in/wp-content/uploads/2024/04/12.-B.Tech-AIDS.pdf')}&embedded=true`; // Google Docs viewer for PDF

//   return (
//     <View style={styles.container}>
//       {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />}
//       <WebView
//         source={{ uri: pdfUrl }}
//         style={styles.pdf}
//         onLoadEnd={() => setLoading(false)} 
//         startInLoadingState={true} 
//         scalesPageToFit={true} 
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20, 
//   },
//   pdf: {
//     flex: 1,
//     marginTop: 10,
//   },
//   loadingIndicator: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     marginLeft: -20,
//     marginTop: -20,
//   },
// });

// export default ViewStaff;




import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const ViewStaff = () => {
  const [loading, setLoading] = useState(true);
  const pdfUrl = `https://docs.google.com/gview?url=${encodeURIComponent('https://skct.edu.in/wp-content/uploads/2024/04/12.-B.Tech-AIDS.pdf')}&embedded=true`; // Google Docs viewer for PDF

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />}
      <WebView
        source={{ uri: pdfUrl }}
        style={styles.pdf}
        onLoadEnd={() => setLoading(false)}
        startInLoadingState={true} 
        scalesPageToFit={true} 
        javaScriptEnabled={true} 
        domStorageEnabled={true} 
        mixedContentMode="always" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, 
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%', 
    marginBottom:300,
  },
  loadingIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -20,
    marginTop: -20,
  },
});

export default ViewStaff;
