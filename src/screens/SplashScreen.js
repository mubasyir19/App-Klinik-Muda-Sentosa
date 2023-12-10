import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
        <View style={styles.logo}>
          <Image source={require('../assets/Logo-Klinik.png')} style={styles.image} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
  },
});
