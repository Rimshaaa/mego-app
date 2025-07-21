import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Onboarding1() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Illustration */}
       <View style={styles.imageWrapper}>
  <Image
    source={require('@/assets/images/img.png')}
    style={styles.illustration}
    resizeMode="contain"
  />
</View>

        {/* Text */}
        <Text style={styles.title}>
          Welcome to MEGO – Pakistan’s Premier Marketplace!
        </Text>
        <Text style={styles.description}>
          Buy, sell, and explore products with ease. Enjoy exclusive features like AR previews,
          rewards, and a seamless shopping experience.
        </Text>

        {/* Pagination Dots */}
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => router.replace('/login')}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => router.replace('/onboarding2')}
          >
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 150,
    height: 100,
    marginTop: 20,
  },
  imageWrapper: {
  backgroundColor: '#FFEB3B', // Bright yellow
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
  borderBottomLeftRadius: 50,
  borderBottomRightRadius: 50,
  padding: 20,
  marginVertical: 20,
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
},
illustration: {
  width: '100%',
  height: height * 0.25,
},
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#0047BB',
    width: 10,
    height: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  skip: {
    fontSize: 16,
    color: '#0047BB',
  },
  nextButton: {
    backgroundColor: '#0047BB',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  nextText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
