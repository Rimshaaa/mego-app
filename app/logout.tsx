import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const Logout = () => {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            // ✅ CLEAR AUTH STATE HERE (replace this with your own logic)
            // Example: AsyncStorage.removeItem('authToken');

            router.replace('/login'); // or your splash screen
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logout</Text>
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 30 },
  logoutBtn: {
    backgroundColor: '#FF3B30',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  logoutText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
