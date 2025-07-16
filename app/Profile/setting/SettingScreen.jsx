import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const SettingScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity style={styles.item} onPress={() => router.push('/setting/privacy')}>
        <Text>Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => router.push('/setting/notifications')}>
        <Text>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => router.push('/setting/delete-account')}>
        <Text>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => router.push('/setting/address')}>
        <Text>Address Information</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { marginVertical: 10, padding: 15, backgroundColor: '#eee', borderRadius: 8 }
});

export default SettingScreen;