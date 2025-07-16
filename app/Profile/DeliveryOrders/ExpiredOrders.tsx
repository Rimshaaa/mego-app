import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const expiredOrders = [
  { id: '456', item: 'Green Sofa', price: '$5635', reason: 'Order Cancelled by Seller' },
];

export default function ExpiredOrders() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Expired Orders</Text>
      <FlatList
        data={expiredOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push({
              pathname: '/Profile/DeliveryOrders/OrderDetails',
              params: { id: item.id, reason: item.reason },
            })}
          >
            <Text style={styles.title}>Order #{item.id}</Text>
            <Text>{item.item}</Text>
            <Text>{item.price}</Text>
          </TouchableOpacity>
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
