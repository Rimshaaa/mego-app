import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

const regions = ['Azad Kashmir', 'Balochistan', 'Punjab', 'Sindh'];

const LocationScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Location</Text>
      <TextInput style={styles.input} placeholder="Search area, city or country" />

      <Text style={styles.subHeading}>Choose Region</Text>
      <FlatList
        data={regions}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.regionItem} onPress={() => router.push('/PostAd/review')}>
            <Text style={styles.regionText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  subHeading: { fontSize: 16, fontWeight: '600', marginBottom: 10 },
  regionItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  regionText: { fontSize: 16 },
});
