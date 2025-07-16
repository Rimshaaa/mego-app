// app/Profile/public-profile/index.tsx

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons'; // Icons for edit and delete

const PublicProfile = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.profileRow}>
          <Image
            source={require('../../../assets/images/profile.png')}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>Hamza Abbas</Text>
            <Text style={styles.ads}>1 Published Ads</Text>
          </View>
        </View>

        {/* Edit + Delete Icons */}
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => router.push('/Profile/public-profile/edit')} style={styles.iconBtn}>
            <Feather name="edit" size={22} color="#0057FF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/Profile/public-profile/delete')} style={styles.iconBtn}>
            <Feather name="trash-2" size={22} color="#FF3B30" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Share Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Ad */}
      <Image
        source={require('../../../assets/images/iphone.jpg')}
        style={styles.adImage}
      />
      <View style={styles.adDetails}>
        <Text style={styles.product}>iPhone 13</Text>
        <Text style={styles.price}>PKR 360,000</Text>
        <Text style={styles.status}>New • 10 Months</Text>
        <Text style={styles.location}>Cafe Aroma, Gulberg</Text>
        <Text style={styles.date}>31 Aug</Text>
      </View>

     
     
    </View>
  );
};

export default PublicProfile;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },

  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#ddd' },
  name: { fontSize: 16, fontWeight: 'bold' },
  ads: { fontSize: 14, color: '#777' },

  iconRow: {
    flexDirection: 'row',
    gap: 16,
  },
  iconBtn: {
    padding: 4,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 0.48,
    backgroundColor: '#0057FF',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600' },

  adImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  adDetails: {
    marginBottom: 20,
  },
  product: { fontSize: 16, fontWeight: '600' },
  price: { fontSize: 16, fontWeight: 'bold', color: '#0057FF' },
  status: { fontSize: 14, color: '#555' },
  location: { fontSize: 14, color: '#777' },
  date: { fontSize: 12, color: '#aaa' },
});
