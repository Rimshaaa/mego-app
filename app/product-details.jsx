import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ProductDetails() {
  const { title, price, location, image } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      {/* Product Image */}
      <Image
        source={image ? { uri: image } : require('../assets/images/react-logo.png')}
        style={styles.productImage}
      />

      {/* Price & Title */}
      <View style={styles.infoSection}>
        <Text style={styles.price}>Rs {price || '450,000'}</Text>
        <Text style={styles.title}>{title || 'Macbook Air'}</Text>
        <Text style={styles.location}>{location || 'Namak Mandi, Peshawar'}</Text>
        <Text style={styles.date}>21/02/2025</Text>

        {/* Description */}
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Selling my macbook which is 512GB in storage with charger and box. One hand use, no scratches and dents. Condition 10/10. Battery backup is 4 hours plus.
        </Text>

        {/* Details */}
        <Text style={styles.sectionTitle}>Details</Text>
        {[
          ['Brand', 'Macbook Air'],
          ['Model', '2005'],
          ['Condition', 'Two Scratch on back 10/8'],
          ['Is Deliverable?', 'Yes, All over the Pakistan'],
          ['Operating System', 'Macintosh'],
        ].map(([label, value], idx) => (
          <View key={idx} style={styles.detailRow}>
            <Text style={styles.detailLabel}>{label}</Text>
            <Text style={styles.detailValue}>{value}</Text>
          </View>
        ))}

        {/* Seller Info */}
        <Text style={styles.sectionTitle}>Listed By</Text>
        <View style={styles.sellerRow}>
          <View style={styles.sellerAvatar} />
          <View>
            <Text style={styles.sellerName}>Siddiq Akbar Shah</Text>
            <Text style={styles.sellerMeta}>Member since Aug 2020</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.seeProfile}>See Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Location Map */}
        <Text style={styles.sectionTitle}>Location</Text>
        <Image
          source={require('../assets/images/location.png')}
          style={styles.mapImage}
        />

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.outlineBtn}>
            <Text style={styles.outlineText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.outlineBtn}>
            <Text style={styles.outlineText}>SMS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fillBtn}>
            <Text style={styles.fillText}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff' },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    backgroundColor: '#ccc',
  },
  infoSection: { padding: 16 },
  price: { fontSize: 22, fontWeight: 'bold' },
  title: { fontSize: 18, fontWeight: '600', marginTop: 4 },
  location: { color: '#555', marginTop: 4 },
  date: { fontSize: 12, color: '#999', marginTop: 2 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 20, marginBottom: 6 },
  description: { fontSize: 14, color: '#444', lineHeight: 20 },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  detailLabel: { fontWeight: '600', color: '#444' },
  detailValue: { color: '#333' },
  sellerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  sellerAvatar: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 25,
  },
  sellerName: { fontWeight: 'bold', fontSize: 14 },
  sellerMeta: { fontSize: 12, color: '#777' },
  seeProfile: { color: '#007AFF', fontSize: 12, marginLeft: 'auto' },
  mapImage: {
    height: 120,
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 24,
  },
  outlineBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#0057FF',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 6,
  },
  outlineText: { color: '#0057FF', fontWeight: 'bold' },
  fillBtn: {
    flex: 1,
    backgroundColor: '#0057FF',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 6,
  },
  fillText: { color: '#fff', fontWeight: 'bold' },
});
