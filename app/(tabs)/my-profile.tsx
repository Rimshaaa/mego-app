import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const profileOptions = [
  { icon: 'person-outline', label: 'Public Profile', route: '/Profile/public-profile' },
  { icon: 'heart-outline', label: 'Favorites', route: '/Profile/FavouritesScreen' },
  { icon: 'pricetag-outline', label: 'Discounted Packages', route: '/Profile/discounted-packages' },
  { icon: 'wallet-outline', label: 'Order & Billing', route: '/Profile/order-billing' },
  { icon: 'cube-outline', label: 'Delivery Orders', route: '/Profile/DeliveryOrders' },
  { icon: 'settings-outline', label: 'Setting', route: '/Profile/setting' },
  { icon: 'help-circle-outline', label: 'Help & Support', route: '/Profile/help-support' },
  { icon: 'person-add-outline', label: 'Invite a user', route: '/Profile/invite-a-user' },
  { icon: 'ribbon-outline', label: 'Loyalty Program', route: '/Profile/loyalty' },
  { icon: 'log-out-outline', label: 'Logout', route: '../../logout' }, // or handle logout logic separately
];

const MyProfileScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Points Card */}
      <View style={styles.card}>
        <View style={styles.yellowBlob} />
        <Text style={styles.pointsTitle}>You Got</Text>
        <Text style={styles.pointsSubTitle}>50 plus points on your next goal</Text>
        <Text style={styles.points}>1246 Pts</Text>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.username}>Mike Smith</Text>
      </View>

      {/* Profile Options */}
      <ScrollView style={styles.optionsList}>
        {profileOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionRow}
            onPress={() => router.push(item.route)}
          >
            <Ionicons name={item.icon} size={20} color="#555" style={styles.icon} />
            <Text style={styles.label}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" style={styles.arrow} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};


export default MyProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 card: {
  backgroundColor: '#0057FF',
  padding: 20,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  marginBottom: 20,
  overflow: 'hidden',
  position: 'relative',
},
pointsTitle: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
  zIndex: 2,
},
pointsSubTitle: {
  color: '#E0ECFF',
  fontSize: 12,
  marginBottom: 10,
  zIndex: 2,
},
points: {
  color: '#fff',
  fontSize: 36,
  fontWeight: 'bold',
  zIndex: 2,
},
name: {
  color: '#fff',
  fontSize: 14,
  marginTop: 20,
  zIndex: 2,
},
username: {
  color: '#fff',
  fontSize: 18,
  fontWeight: '500',
  zIndex: 2,
},
yellowBlob: {
  position: 'absolute',
  right: -40,
  bottom: -30,
  backgroundColor: '#FFEB00',
  width: 160,
  height: 130,
  borderTopLeftRadius: 100,
  borderTopRightRadius: 100,
  borderBottomLeftRadius: 60,
  borderBottomRightRadius: 60,
  zIndex: 0,
},
  optionsList: {
    marginTop: 20,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 0.6,
    borderColor: '#eee',
  },
  icon: {
    marginRight: 15,
    color: '#444',
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#111',
  },
  arrow: {
    color: '#aaa',
  },
});
