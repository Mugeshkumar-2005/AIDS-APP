import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{uri:'https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-12.jpg'}} 
          style={styles.logo} 
        />
        <Text style={styles.title}>Welcome to AI & DS</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.subTitle}>About the Department</Text>
        <Text style={styles.text}>
          Greetings and welcome to the Department of Artificial Intelligence and Data Science (AI & DS) 
          at the esteemed institution, SKCT, which was established in 2021. At our institution, we are 
          committed to providing a 4-year Bachelor of Technology (B.Tech) degree with a specific focus 
          on Artificial Intelligence and Data Science (AI & DS). The eminent team of faculty is dedicated 
          in delivering a high-quality education to equip students with the necessary skills to navigate 
          the dynamic and ever-changing domains of AI & DS, AI & ML, Cyber Security, and IoT.
        </Text>

      <View style={styles.header}>
        <Image 
          source={require('../../assets/SKCT-College-Campus-11.jpg')} 
          style={styles.logo} 
        />
      </View>
      
        <Text style={styles.text}>
          The program has been strategically developed to cultivate creativity, critical thinking, and 
          problem-solving aptitudes, equipping our graduates with the necessary capabilities to contribute 
          sustainable solutions to industrial and societal problems. Our institution takes pride in its 
          modern facilities, which encompass advanced laboratories that support experiential learning and 
          research endeavors. The institution's dedication to integrating technology into education is 
          further demonstrated by implementing smart classrooms, which foster an immersive and participatory 
          educational setting for our students.
        </Text>
      </View>


      <View style={styles.vision}>
        <Text style={styles.subTitle1}>Vision</Text>
        <Text style={styles.text}>To build up a center of excellence in the extensive field of Artificial Intelligence by addressing the 
        demands of both society and industry through a concentration on education that is centered on the 
        acquisition and application of information, as well as innovation and innovative research.</Text>
      </View>

      <View style={styles.vision}>
        <Text style={styles.subTitle1}>Mission</Text>
        <Text style={styles.text}>•To cultivate technocrats with robust core competencies in Artificial Intelligence through ongoing refinement 
            of teaching and learning methods using state-of-the-art technologies.</Text>
        <Text style={styles.text}>•To evaluate the significance of information and analytics in shaping professional careers, research endeavors,
             and consultancy services.</Text>
        <Text style={styles.text}>•To encourage student’s professional development activities by imparting ethical values and leadership skills,
             assisted by industry support.</Text>
      </View>
      <View style={styles.buttons}>
        <Button 
          title="View Staff"
          onPress={() => navigation.navigate('ViewStaff')}
        />
        <Button 
          title="Contact Us"
          onPress={() => navigation.navigate('Contact')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    vision:{
        borderColor:'blue',
        borderWidth:2,
        padding:10,
        marginBottom: 20, 
    },
    subTitle1:{
        fontSize:19,
        fontWeight:'bold',
    },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    borderBottomWidth:1,
  },
  infoSection: {
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    textAlign:'center',
    
  },
  text: {
    fontSize: 12,
    lineHeight: 19,
    marginTop: 10,
    textAlign: 'justify',
  },
  buttons: {
    marginTop: 20,
  }
});

export default HomePage;
