import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { Asset } from 'expo-asset';

const ViewStaff = () => {
  const [pdfUri, setPdfUri] = useState(null);

  useEffect(() => {
    const loadPdf = async () => {
      // Load the PDF asset
      const asset = Asset.fromModule(require('../../assets/B.Tech-AIDS.pdf'));
      await asset.downloadAsync();
      setPdfUri(asset.localUri || asset.uri); // Use localUri or uri for the PDF
    };

    loadPdf();
  }, []);

  return (
    <View style={styles.container}>
      {pdfUri ? (
        <WebView
          source={{ uri: pdfUri }} // Use WebView to load the PDF
          style={styles.pdf}
          startInLoadingState={true}
          scalesPageToFit={true}
          javaScriptEnabled={true}
          onError={(error) => {
            console.error('WebView error:', error);
          }}
        />
      ) : (
        <Text>Loading PDF...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default ViewStaff;
