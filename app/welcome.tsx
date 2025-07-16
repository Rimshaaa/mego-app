import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/icon.png')} style={styles.image} />
      <Text style={styles.title}>Buy & Sell Near You</Text>
      <Text style={styles.subtitle}>Find great deals around you instantly</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
        <Text style={styles.buttonText}>Continueeeeeeeeeeeeeeeeeeee</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#fff'
  },
  image: {
    width: 250, height: 250, resizeMode: 'contain', marginBottom: 30,
  },
  title: {
    fontSize: 28, fontWeight: 'bold', marginBottom: 10, textAlign: 'center',
  },
  subtitle: {
    fontSize: 16, color: '#888', marginBottom: 40, textAlign: 'center',
  },
  button: {
    backgroundColor: '#3a77ff', paddingVertical: 12, paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff', fontSize: 16, fontWeight: 'bold',
  },
});
