// SignUpScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome6 } from '@expo/vector-icons';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create your account</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="#666"
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Email ID"
          keyboardType="email-address"
          onChangeText={email => setForm({ ...form, email })}
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="numeric"
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          onChangeText={password => setForm({ ...form, password })}
          placeholder="Create a strong Password"
          placeholderTextColor="#666"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          onChangeText={password => setForm({ ...form, password })}
          placeholder="Confirm Password"
          placeholderTextColor="#666"
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.signupWithText}>or Signup with</Text>

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
          <Text style={styles.more}>Do u have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.options}> Login </Text>
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
    marginTop: 8,
    height: 50,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor:'#fff4bc',
  },
  signupButton: {
    backgroundColor: '#E95322',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 20,
    width:200,
    marginLeft:58,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupWithText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginVertical: 20,
    marginTop:0,
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
    marginTop:15,
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

export default SignUpScreen;
