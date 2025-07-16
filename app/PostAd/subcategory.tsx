import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const subcategories = [
  'Mobile Phones', 'Tablets', 'Accessories', 'Smart Watches', 'Chargers',
];

const SubCategory = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Subcategory</Text>
      {subcategories.map((item, i) => (
        <TouchableOpacity
          key={i}
          style={styles.option}
          onPress={() => router.push('/PostAd/brand')}
        >
          <Text style={styles.optionText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SubCategory;

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
