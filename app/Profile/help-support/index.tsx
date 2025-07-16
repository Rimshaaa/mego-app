import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const HelpSupportIndex = () => {
  const router = useRouter();

  const options = [
    { title: 'Help Center', subtitle: 'See FAQ and contact support', path: 'help-support/help-center' },
    { title: 'Feedback', subtitle: 'Take a movement to let us know how we’re doing', path: 'help-support/feedback' },
    { title: 'Invite a new user', subtitle: 'Invite your friend as a referral code', path: 'help-support/invite' },
    { title: 'Submit Request', subtitle: 'Edit your address information', path: 'help-support/request' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Help and Support</Text>

      {options.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => router.push(item.path)} style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.versionText}>Version{'\n'}4653.4576</Text>
    </ScrollView>
  );
};

export default HelpSupportIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  itemContainer: {
    paddingVertical: 18,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  itemSubtitle: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },
  versionText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#aaa',
    fontSize: 13,
  },
});
