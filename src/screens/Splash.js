// SplashScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../screens/Images/logo.png')} style={styles.logo} />

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          <Text style={styles.headingYUM}>YUM</Text>
          <Text style={styles.headingQUICK}>QUICK</Text>
        </Text>
      </View>
      
      <Text style={styles.subheading}>Enjoy flavors crafted with passion and fresh, locally-sourced ingredients
      </Text>
      <TouchableOpacity
        style={styles.logbutton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signbutton}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E95322',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 50,
  },
  logo: {
   width:300,
   height:300,
   marginBottom:-60,

  },
  logbutton: {
    backgroundColor: '#f4c239',
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 25,
    marginVertical: 10,
  },
  signbutton: {
    backgroundColor: '#f1dd78',
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    color: '#E95322',
    fontSize: 16,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  headingYUM: {
    color: '#FFFFFF', // Change this to your desired color for "YUM"
  },
  headingQUICK: {
    color: '#FFD700', // Change this to your desired color for "QUICK"
  },
  subheading: {
    fontSize: 15,
    fontWeight: 'condensed',
    textAlign:'center',
    color:'#FFFFFF',
    marginTop:30,
    marginBottom:40,
  },
});

export default SplashScreen;
