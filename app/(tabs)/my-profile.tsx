import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const profileOptions = [
  { icon: 'person-outline', label: 'Public Profile', route: '/Profile/public-profile', desc: 'See how others view your profile' },
  { icon: 'heart-outline', label: 'Favorites', route: '/Profile/FavouritesScreen', desc: 'All your favourites and saved searches' },
  { icon: 'pricetag-outline', label: 'Discounted Packages', route: '/Profile/discounted-packages', desc: 'Sell faster, more at higher margins with packages' },
  { icon: 'wallet-outline', label: 'Order & Billing', route: '/Profile/order-billing', desc: 'Set faster, more, at higher margins' },
  { icon: 'cube-outline', label: 'Delivery Orders', route: '/Profile/DeliveryOrders', desc: 'Track your selling or buying delivery order' },
  { icon: 'settings-outline', label: 'Setting', route: '/Profile/setting', desc: 'Privacy and manage account' },
  { icon: 'help-circle-outline', label: 'Help & Support', route: '/Profile/help-support', desc: 'Help center and legal account' },
  { icon: 'person-add-outline', label: 'Invite a user', route: '/Profile/invite-a-user', desc: 'Invite a user and member to join' },
  { icon: 'ribbon-outline', label: 'Loyalty Program', route: '/Profile/loyalty', desc: 'To achieve more client use this to...' },
  { icon: 'log-out-outline', label: 'Logout', route: '../../logout', desc: '' },
];

const MyProfileScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Centered Blue Card */}
      <View style={styles.cardWrapper}>
        <View style={styles.card}>
          <View style={styles.yellowBlob} />
          <Text style={styles.pointsTitle}>You Got</Text>
          <Text style={styles.pointsSubTitle}>50 plus points on your next goal</Text>
          <Text style={styles.points}>1246 Pts</Text>
          <Text style={styles.name}>Mike Smith</Text>
        </View>
      </View>

      {/* Options List */}
      <ScrollView style={styles.optionsList}>
        {profileOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionRow}
            onPress={() => router.push(item.route)}
          >
            <View style={styles.iconContainer}>
              <Ionicons name={item.icon} size={22} color="#000" />
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>{item.label}</Text>
              {!!item.desc && <Text style={styles.desc}>{item.desc}</Text>}
            </View>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  cardWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#0057FF',
    width: width * 0.9,
    padding: 20,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'flex-start',
  },
  yellowBlob: {
    position: 'absolute',
    right: -30,
    bottom: -20,
    backgroundColor: '#FFEB00',
    width: 120,
    height: 120,
    borderRadius: 60,
    zIndex: 0,
  },
  pointsTitle: { color: '#fff', fontSize: 14, fontWeight: '600', zIndex: 1 },
  pointsSubTitle: { color: '#E0ECFF', fontSize: 12, marginBottom: 10, zIndex: 1 },
  points: { color: '#fff', fontSize: 32, fontWeight: 'bold', zIndex: 1 },
  name: { color: '#fff', fontSize: 18, fontWeight: '500', marginTop: 10, zIndex: 1 },
  optionsList: {
    flex: 1,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 0.6,
    borderColor: '#eee',
  },
  iconContainer: {
    width: 30,
    alignItems: 'center',
    marginTop: 4,
  },
  labelContainer: {
    flex: 1,
    marginLeft: 12,
  },
  label: {
    fontSize: 16,
    color: '#111',
    fontWeight: '600',
  },
  desc: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
});
