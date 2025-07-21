import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PublicProfile = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Feather name="arrow-left" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.profileTopRow}>
          <Image
            source={require('../../../assets/images/profile.png')}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>Muhammad Hamza Abbas</Text>
            <Text style={styles.ads}>1 Published Ads</Text>
          </View>
        </View>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => router.push('/Profile/public-profile/edit')} style={styles.iconBtn}>
            <Feather name="edit" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/Profile/public-profile/delete')} style={styles.iconBtn}>
            <Feather name="trash-2" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Location & Share Profile Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.outlinedButton}>
          <Text style={styles.outlinedText}>📍 Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.outlinedButton}>
          <Text style={styles.outlinedText}>🔗 Share Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Ad Section */}
      <View style={styles.adContainer}>
        <View style={styles.featuredBadge}>
          <Text style={styles.featuredText}>Featured</Text>
        </View>
        <TouchableOpacity style={styles.heartIcon}>
          <Feather name="heart" size={20} color="#fff" />
        </TouchableOpacity>
        <Image
          source={require('../../../assets/images/iphone.jpg')}
          style={styles.adImage}
        />
        <Text style={styles.productTitle}>iPhone 13</Text>
        <Text style={styles.price}>360,000</Text>
        <View style={styles.metaRow}>
          <Text style={styles.metaPill}>New</Text>
          <Text style={styles.metaPill}>10/10</Text>
          <Text style={styles.metaPill}>16 points</Text>
        </View>
        <Text style={styles.location}>Cafe Aroma, Gulberg</Text>
        <Text style={styles.date}>31 Aug</Text>
      </View>
    </View>
  );
};

export default PublicProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backBtn: {
    paddingRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  // Profile Card
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  ads: {
    color: '#777',
    fontSize: 13,
  },
  iconRow: {
    flexDirection: 'row',
    gap: 12,
  },
  iconBtn: {
    padding: 4,
  },

  // Buttons
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  outlinedButton: {
    flex: 0.48,
    borderWidth: 1.5,
    borderColor: '#0057FF',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  outlinedText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0057FF',
  },

  // Ad Section
  adContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  featuredBadge: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: '#FF3B30',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    top: 8,
    left: 8,
  },
  featuredText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  heartIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 2,
    backgroundColor: '#00000055',
    padding: 6,
    borderRadius: 20,
  },
  adImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 6,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 6,
  },
  metaPill: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    color: '#555',
  },
  location: {
    fontSize: 13,
    color: '#555',
  },
  date: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 4,
  },
});
