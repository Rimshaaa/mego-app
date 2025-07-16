import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function OrderDetails() {
  const { id, reason } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Expired Order #{id}</Text>
      <Text style={styles.label}>Reason for expired:</Text>
      <Text style={styles.reason}>{reason}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff', flex: 1 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 16, fontWeight: '600' },
  reason: { fontSize: 16, color: 'red', marginTop: 8 },
});
