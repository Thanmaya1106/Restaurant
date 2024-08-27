// LoginScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { AntDesign, FontAwesome6 } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login to ur account</Text>
      </View>

      <View style={styles.formContainer}>

        <TextInput
          style={styles.input}
          placeholder="Username or Email"
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input1}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={() => {/* Forgot password logic */}}>
          <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.loginWithText}>or Login with</Text>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => {/* Google login logic */}}>
          <AntDesign name="google" size={28} color="#E95322" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {/* Fingerprint login logic */}}>
          <FontAwesome6 name="fingerprint" size={28} color="#E95322" style={styles.icon} />
          </TouchableOpacity>
          </View>

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>
          <Text style={styles.more}>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.options}> Signup </Text>
          </TouchableOpacity>
          </Text>
          </View>

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 150,
    backgroundColor: '#E95322',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -30,
  },

  input: {
    marginTop:80,
    height: 50,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor:'#fff4bc',
  },
  input1: {
    marginTop:10,
    height: 50,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor:'#fff4bc',
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: '#E95322',
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: '#E95322',
    paddingVertical: 15,
    width:200,
    marginLeft:57,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 20,

  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginWithText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginVertical: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    marginHorizontal: 8,
  },
  heading: {
    fontSize:12,
    marginTop:30,
    textAlign:'center',
    fontWeight:'bold',
  },
  more: {
    color: '#000000',
  },
  options: {
    color: '#E95322',
  },
});

export default LoginScreen;
