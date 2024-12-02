import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const AdminDepartment = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Section: Department Highlights */}
      <View style={styles.highlightBox}>
        <Text style={styles.heading}>Department Highlights</Text>
        <Text style={styles.content}>
          In 2021, the Department of Artificial Intelligence and Data Science was established with an initial intake of 60 students. Subsequently, in 2023, the intake capacity was increased to 120 students. The curriculum was designed to be industry-centered.
        </Text>
        <Text style={styles.content}>
          From its inception, the department crafted a curriculum centered around industry needs. 
        </Text>
        <Text style={styles.bullet}>➢ In 2022, a promising partnership bloomed with ALTAIR, paving the way for vibrant collaboration and transformative progress with valued stakeholders.</Text>
      </View>

      {/* Section: Adaptive Teaching and Learning */}
      <View style={styles.highlightBox}>
        <Text style={styles.heading}>Adaptive Teaching and Learning Process</Text>
        <Text style={styles.subHeading}>Personalized Mentorship</Text>
        <Text style={styles.content}>
          Our faculty members engage in personalized mentorship, guiding students through academic challenges, career decisions, and personal development, fostering a supportive mentor-mentee relationship.
        </Text>
        <Text style={styles.subHeading}>Feedback-driven Improvement</Text>
        <Text style={styles.content}>
          Continuous feedback mechanisms are in place to facilitate constructive communication. This loop helps both faculty and students in refining the teaching and learning process, creating a collaborative environment.
        </Text>
        <Text style={styles.subHeading}>Holistic Development</Text>
        <Text style={styles.content}>
          Beyond academics, faculty members actively participate in the holistic development of students, addressing their overall well-being, professional growth, and character-building.
        </Text>
      </View>

      {/* Section: State-of-the-Art Labs */}
      <View style={styles.highlightBox}>
        <Text style={styles.heading}>State-of-the-Art Labs</Text>
        <Text style={styles.content}>
          Our department features advanced laboratories equipped with IoT devices and technologies where students gain hands-on experience and practical skills.
        </Text>
      </View>

      {/* Section: Industry-Relevant Projects */}
      <View style={styles.highlightBox}>
        <Text style={styles.heading}>Industry-Relevant Projects</Text>
        <Text style={styles.content}>
          Students showcase real-world projects and collaborate with industry partners, applying IoT concepts to solve practical problems.
        </Text>
      </View>

      {/* Section: Research Initiatives */}
      <View style={styles.highlightBox}>
        <Text style={styles.heading}>Research Initiatives</Text>
        <Text style={styles.content}>
          The department emphasizes research, highlighting ongoing initiatives and breakthroughs contributing to advancements in IoT technology.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f4f4f4",
    padding: 10,
  },
  highlightBox: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0066cc",
    marginTop: 10,
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    color: "#333333",
    lineHeight: 20,
    marginBottom: 5,
  },
  bullet: {
    fontSize: 14,
    color: "#333333",
    lineHeight: 20,
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default AdminDepartment;
