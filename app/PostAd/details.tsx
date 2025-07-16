import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const DetailsScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Details</Text>

      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageText}>[ Image Picker Here ]</Text>
      </View>

      <TextInput style={styles.input} placeholder="Brand" />
      <TextInput style={styles.input} placeholder="Condition (New/Used/Good)" />
      <TextInput style={styles.input} placeholder="Ad Title" />
      <TextInput style={styles.input} placeholder="Ad Description" multiline />
      <TextInput style={styles.input} placeholder="Location" />
      <TextInput style={styles.input} placeholder="Price" />
      <TextInput style={styles.input} placeholder="WhatsApp Number (optional)" />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/PostAd/location')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  imagePlaceholder: {
    height: 150,
    backgroundColor: '#F0F0F0',
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  imageText: { color: '#999' },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#0057FF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: { color: '#fff', fontWeight: '600' },
});
