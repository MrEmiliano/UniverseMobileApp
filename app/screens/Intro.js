import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

const screenwidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const bg = require('../assets/BackGround.jpg');

function Intro({ navigation }) {
 
  const [loaded] = useFonts({
    'Salmond-Semibold': require('../assets/fonts/Salmond-Semibold.ttf'),
    'EthosNova-Heavy': require('../assets/fonts/EthosNova-Heavy.ttf'),
  });

  if (!loaded) {
    return null;
  }
  

  return (
    <View style={styles.root}>
      <ImageBackground
        style={styles.container}
        source={bg}
        resizeMode="cover"
        blurRadius={4}
        
      >
        <View style={styles.inputContainer}>
        <Image
          source={require('../assets/Logo.png')}
          style={{
            width: 120,
            height: 120,
            top: screenHeight * 0.225,
            right: screenwidth * 0.330,
            position: 'absolute',
          }}
        />
          <Text style={styles.title}>IMMERSED IN THE</Text>
          <Text style={styles.title}>MUSIC MANIA</Text>
          <Text style={styles.subtitle}>Unlock millions of songs. Free</Text>
          <Text style={styles.subtitle}>on Universe.</Text>
          <Text style={styles.subtitle2}>Powered by StudioU.</Text>
        </View>
        <TouchableOpacity style={styles.SButton}>
          <Text style={styles.SButtonText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.lButtonText}>Log in</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: 'center',
    
    
  },
  inputContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    color: '#FFFFFF',
    fontSize: screenHeight * 0.050,
    fontFamily: 'Salmond-Semibold',
  },
  subtitle: {
    color: '#FFFFFF',
    top: screenHeight * 0.010,
    fontSize: screenHeight * 0.025,
    fontFamily: 'EthosNova-Heavy',
  },
  subtitle2: {
    color: '#FFFFFF',
    fontSize: screenHeight * 0.017,
    fontFamily: 'EthosNova-Heavy',
    top: screenHeight * 0.345,
  },
  SButton: {
    position: 'absolute',
    left: screenwidth * 0.080,
    bottom: screenHeight * 0.245,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingVertical: 13,
    paddingHorizontal: 115,
  },
  SButtonText: {
    color: '#000000',
    fontSize: screenHeight * 0.025,
    fontFamily: 'Salmond-Semibold',
  },
  lButton: {
    position: 'absolute',
    left: screenwidth * 0.080,
    bottom: screenHeight * 0.165,
    backgroundColor: '#5677E6',
    borderRadius: 20,
    paddingVertical: 13,
    paddingHorizontal: 121,
  },
  lButtonText: {
    color: '#ffffff',
    fontSize: screenHeight * 0.025,
    fontFamily: 'Salmond-Semibold',
  },
});

export default Intro;