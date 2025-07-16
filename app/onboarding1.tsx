{/*import { useRouter } from 'expo-router';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Onboarding1() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('@/assets/images/bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardContainer}
        >
          <Image source={require('@/assets/images/image1.jpg')} style={styles.card} />
          <Image source={require('@/assets/images/image2.jpg')} style={styles.card} />
          <Image source={require('@/assets/images/image3.jpg')} style={styles.card} />
        </ScrollView>

        <Text style={styles.title}>
          Welcome to MEGO – Pakistan's Premier Marketplace!
        </Text>

        <Text style={styles.description}>
          Buy, sell, and explore products with ease. Enjoy exclusive features like AR previews, rewards, and a seamless shopping experience.
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => router.push('/onboarding2')} // Next screen
          >
            <Text style={styles.nextText}>Nextttttttttttttttttttttttttttt</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 20,
    paddingTop: 50,
    justifyContent: 'space-between',
  },
  logo: {
    width: 120,
    height: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
  cardContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: 140,
    height: 200,
    borderRadius: 12,
    marginRight: 15,
    backgroundColor: '#fff',
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: '#ccc',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 10,
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  skipButton: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  nextButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  skipText: {
    color: '#fff',
    fontSize: 16,
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
  },
});
*/}

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
        <Image source={require('@/assets/images/logo.png')} style={styles.logo} />

        {/* Illustration */}
        <Image
          source={require('@/assets/images/image1.jpg')}
          style={styles.illustration}
          resizeMode="contain"
        />

        {/* Text Content */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Welcome to MEGO – Pakistan’s Premier Marketplace!
          </Text>
          <Text style={styles.subtitle}>
            Buy, sell, and explore products with ease. Enjoy exclusive features like AR previews,
            rewards, and a seamless shopping experience.
          </Text>
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
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 40,
    marginTop: 10,
  },
  illustration: {
    width: '100%',
    height: height * 0.35,
    marginTop: 20,
  },
  textContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  skip: {
    fontSize: 16,
    color: '#0047BB',
  },
  nextButton: {
    backgroundColor: '#0047BB',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
