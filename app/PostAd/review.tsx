import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const ReviewAd = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review Your Details</Text>

      <Image
        source={require('../../assets/images/react-logo.png')} // Replace with real image later
        style={styles.image}
      />

      <Text style={styles.label}>Ad Title:</Text>
      <Text style={styles.value}>iPhone 14 Pro Max</Text>

      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>Selling 1-month used iPhone with box & charger</Text>

      <Text style={styles.label}>Location:</Text>
      <Text style={styles.value}>Gulberg Phase 4</Text>

      <Text style={styles.label}>Price:</Text>
      <Text style={styles.value}>Rs 140,000</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/PostAd/phone')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewAd;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 20 },
  label: { fontWeight: '600', marginTop: 10 },
  value: { fontSize: 14, color: '#333' },
  button: {
    backgroundColor: '#0057FF',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: { color: '#fff', fontWeight: '600' },
});
