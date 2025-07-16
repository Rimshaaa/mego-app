// app/Profile/loyalty/redeem.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';

const RedeemRewards = () => {
  const [showPopup, setShowPopup] = useState(false);

  const rewards = [
    { action: 'Post on Ads', points: 100 },
    { action: 'Refer to Friend', points: 200 },
    { action: 'Complete Profile', points: 100 },
    { action: 'Join Friends in Mego', points: 540 },
  ];

  const totalPoints = rewards.reduce((sum, item) => sum + item.points, 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Redeem Your Rewards</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Discover ways to earn Points</Text>
        <Text style={styles.sub}>Start Points</Text>
        <Text style={styles.sub2}>After login you got 500 Points</Text>
      </View>

      <Text style={styles.section}>Activities</Text>

      {rewards.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.action}>{item.action}</Text>
          <Text style={styles.rewards}>{item.points} Points</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={() => setShowPopup(true)}>
        <Text style={styles.buttonText}>Got Rewards</Text>
      </TouchableOpacity>

      {/* Popup Modal */}
      <Modal visible={showPopup} transparent animationType="fade">
        <TouchableOpacity style={styles.popupOverlay} onPress={() => setShowPopup(false)}>
          <View style={styles.popupBox}>
            <Text style={styles.popupTitle}>Total Points Earned</Text>
            <Text style={styles.popupPoints}>{totalPoints} Points</Text>
            <Text style={styles.popupHint}>(Tap anywhere to close)</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};

export default RedeemRewards;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 10 },
  card: {
    backgroundColor: '#0057FF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
  },
  cardTitle: { color: '#fff', fontSize: 14 },
  sub: { color: '#fff', fontSize: 18, fontWeight: '600' },
  sub2: { color: '#fff', fontSize: 14, marginTop: 4 },
  section: { fontSize: 16, fontWeight: '600', marginVertical: 14 },
  item: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#F6F8FE',
    marginBottom: 10,
  },
  action: { fontSize: 14, color: '#333' },
  rewards: { fontSize: 14, fontWeight: 'bold', color: '#0057FF' },
  button: {
    backgroundColor: '#0057FF',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontWeight: '600' },

  // Popup Styles
  popupOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupBox: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 16,
    alignItems: 'center',
    width: '80%',
  },
  popupTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#0057FF',
  },
  popupPoints: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0057FF',
  },
  popupHint: {
    marginTop: 8,
    fontSize: 12,
    color: '#888',
  },
});
