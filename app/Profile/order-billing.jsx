import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function OrderBillingScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
         {/* Back Button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.heading}> Packages & Billing</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('/Profile/orders')}
      >
        <Text style={styles.cardTitle}>My Orders</Text>
        <Text style={styles.cardSub}>Active, scheduled and expired orders</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('/Profile/billing-info')}
      >
        <Text style={styles.cardTitle}>Billing Information</Text>
        <Text style={styles.cardSub}>Edit your billing name, address, etc.</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  cardTitle: { fontSize: 16, fontWeight: '600' },
  cardSub: { fontSize: 12, color: '#555', marginTop: 4 },
});
