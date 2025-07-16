// app/Profile/loyalty/benefits.tsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const MoreBenefits = () => {
  const benefits = [
    { title: 'Faster Ad Approvals', desc: 'Priority moderation for all listings.' },
    { title: 'Top Search Placement', desc: 'Appear higher in search results.' },
    { title: 'Free Boosts', desc: 'Get free boosts for selected ads.' },
    { title: 'Early Access Deals', desc: 'Unlock deals before others.' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>More Benefits</Text>
      <Text style={styles.subtitle}>Level up and unlock premium benefits:</Text>

      {benefits.map((item, index) => (
        <View key={index} style={styles.benefitCard}>
          <Text style={styles.benefitTitle}>{item.title}</Text>
          <Text style={styles.benefitDesc}>{item.desc}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.upgradeBtn}>
        <Text style={styles.upgradeText}>Upgrade Level</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MoreBenefits;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#555', marginBottom: 20 },
  benefitCard: {
    backgroundColor: '#F6F8FE',
    padding: 16,
    borderRadius: 12,
    marginBottom: 14,
  },
  benefitTitle: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  benefitDesc: { fontSize: 13, color: '#555' },
  upgradeBtn: {
    backgroundColor: '#0057FF',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  upgradeText: { color: '#fff', fontWeight: '600' },
});
