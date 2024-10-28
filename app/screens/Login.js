import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const screenwidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function Login() {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    'Salmond-Semibold': require('../assets/fonts/Salmond-Semibold.ttf'),
    'EthosNova-Regular': require('../assets/fonts/EthosNova-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Email or username</Text>
        <TextInput
          style={styles.textBox}
          placeholder="Email or username"
          fontSize={16}
          font color="#ffffff"
          placeholderTextColor="#888888"
        />
        <Text style={styles.title2}>Password</Text>
        <TextInput
          style={styles.textBox}
          placeholder="Password"
          fontSize={16}
         font color="#ffffff"
          placeholderTextColor="#888888"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Intro')}>
        <Image
          source={require('../assets/BackArrow.png')}
          style={styles.backArrow}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  inputContainer: {
    position: 'absolute',
    left: 25,
    top: screenHeight * 0.200,
  },
  title: {
    color: '#FFFFFF',
    fontSize: screenHeight * 0.040,
    fontFamily: 'Salmond-Semibold',
  },
  title2: {
    color: '#FFFFFF',
    fontSize: screenHeight * 0.040,
    fontFamily: 'Salmond-Semibold',
    marginTop: 20,
  },

  textBox: {
    height: 59,
    backgroundColor: '#B3B3B3',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: screenwidth * 0.85,
    marginBottom: 20,
  },
  backArrow: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: screenHeight * 0.360,
    right: screenwidth * 0.300,
  },
  loginButton: {
    position: 'absolute',
    left: screenwidth * 0.300,
    top: screenHeight * 0.600,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 45,
  },
  loginButtonText: {
    color: '#000000',
    fontSize: screenHeight * 0.025,
    fontFamily: 'Salmond-Semibold',
  },
});

export default Login;