import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const activeOrders = [
  { id: '456', item: 'Green Sofa', price: '$5635' },
  { id: '867', item: 'Luxury Sofa', price: '$6855' },
];

export default function ActiveOrders() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Active Orders</Text>
      <FlatList
        data={activeOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>Order #{item.id}</Text>
            <Text>{item.item}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff', flex: 1 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
  },
  title: { fontWeight: 'bold' },
});
