// app/Profile/loyalty/index.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const LoyaltyProgram = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Big Loyalty Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Discover ways to earn Points</Text>
        <Text style={styles.rank}>Bronze</Text>
        <Text style={styles.points}>1267Pts</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
      </View>

      <Text style={styles.section}>More Features</Text>

      {/* Big Buttons */}
      <TouchableOpacity style={styles.listItem} onPress={() => router.push('/Profile/loyalty/redeem')}>
        <Feather name="refresh-ccw" size={24} color="#0057FF" />
        <Text style={styles.listText}>Redeem Points</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.listItem} onPress={() => router.push('/Profile/loyalty/benefits')}>
        <Feather name="gift" size={24} color="#0057FF" />
        <Text style={styles.listText}>More Benefits</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.listItem} onPress={() => router.push('/Profile/loyalty/invite')}>
        <Feather name="user-plus" size={24} color="#0057FF" />
        <Text style={styles.listText}>Invite Friend</Text>
      </TouchableOpacity>

      {/* CTA Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Rewards</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoyaltyProgram;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  card: {
    backgroundColor: '#0057FF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 30,
  },
  cardTitle: { color: '#fff', fontSize: 16, marginBottom: 8 },
  rank: { color: '#fff', fontSize: 20, fontWeight: '600' },
  points: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  progressBar: {
    height: 8,
    backgroundColor: '#fff',
    opacity: 0.3,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: 8,
    width: '60%',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  section: { fontSize: 18, fontWeight: '600', marginBottom: 20 },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F8FE',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 14,
  },
  listText: { marginLeft: 16, fontSize: 16, color: '#333', fontWeight: '500' },
  button: {
    backgroundColor: '#0057FF',
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
