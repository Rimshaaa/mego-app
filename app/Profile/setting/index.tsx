import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const SettingScreen = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={() => router.push('/Profile/setting/privacy')}>
        <Text style={styles.title}>Privacy</Text>
        <Text style={styles.subtitle}>Phone Number Visibility</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.push('/Profile/setting/NotificationsScreen')}>
        <Text style={styles.title}>Notifications</Text>
        <Text style={styles.subtitle}>Recommendation and communication</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.push('/Profile/setting/DeleteAccountScreen')}>
        <Text style={styles.title}>Delete account</Text>
        <Text style={styles.subtitle}>Take action on account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.push('/Profile/setting/AddressInformationScreen')}>
        <Text style={styles.title}>Address Information</Text>
        <Text style={styles.subtitle}>Edit your address info</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.push('/Profile/setting/SettingScreen')}>
        <Text style={styles.title}>User Preferences</Text>
        <Text style={styles.subtitle}>Customize appearance</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  option: {
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  subtitle: {
    fontSize: 13,
    color: '#777',
  },
});
