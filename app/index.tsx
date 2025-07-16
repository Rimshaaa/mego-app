{/*import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

export default function Splash() {

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding1'); // navigate after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, []);


  return (
    <ImageBackground
      source={require('@/assets/images/bg.jpg')} // <-- background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Image
          source={require('@/assets/images/logo.png')} // <-- MEGO logo
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // 70% transparent black
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});*/}

import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding1'); // Navigate after 2 seconds
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Top right blue semi-circle */}
      <View style={styles.blueCircle} />
      {/* Bottom left yellow semi-circle */}
      <View style={styles.yellowCircle} />

      {/* Center MEGO logo */}
      <Image
        source={require('@/assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 200,
    zIndex: 1,
  },
  blueCircle: {
  position: 'absolute',
  top: -height * 0.3,
  right: -width * 0.2,
  width: width * 0.9,
  height: width * 0.9,
  backgroundColor: '#0047BB',
  borderRadius: width * 0.45,
  zIndex: 0,
},
yellowCircle: {
  position: 'absolute',
  bottom: -height * 0.2,
  left: -width * 0.2,
  width: width * 0.9,
  height: width * 0.9,
  backgroundColor: '#FFEB00',
  borderRadius: width * 0.45,
  zIndex: 0,
},
});
