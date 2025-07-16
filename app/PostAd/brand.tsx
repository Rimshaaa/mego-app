import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const brands = ['iPhone', 'Samsung', 'Xiaomi', 'Huawei', 'OnePlus'];

const BrandScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Brand</Text>
      {brands.map((brand, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => router.push('/PostAd/details')}
        >
          <Text style={styles.optionText}>{brand}       </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BrandScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 20 },
  option: {
    paddingVertical: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  optionText: { fontSize: 16 },
});
