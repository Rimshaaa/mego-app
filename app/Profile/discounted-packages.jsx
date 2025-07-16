import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const categories = [
  { id: '1', name: 'Mobiles', image: 'https://via.placeholder.com/70' },
  { id: '2', name: 'Vehicles', image: 'https://via.placeholder.com/70' },
  { id: '3', name: 'Fashions', image: 'https://via.placeholder.com/70' },
  { id: '4', name: 'Furniture', image: 'https://via.placeholder.com/70' },
  { id: '5', name: 'Electronics', image: 'https://via.placeholder.com/70' },
];

export default function DiscountedPackages() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Discounted Packages</Text>
      <Text style={styles.subHeading}>Sell faster, mark & get higher margins with packages</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryCard}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  heading: { fontSize: 22, fontWeight: 'bold' },
  subHeading: { fontSize: 13, color: '#555', marginBottom: 20 },
  categoryCard: {
    alignItems: 'center',
    marginBottom: 16,
    width: '30%',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 6,
    backgroundColor: '#eee',
  },
  name: { fontSize: 14, fontWeight: '500', textAlign: 'center' },
});
