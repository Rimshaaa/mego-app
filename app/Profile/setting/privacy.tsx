// app/Profile/setting/privacy.jsx
import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';

const PrivacyScreen = () => {
  return (
    <View style={styles.container}>
      

      <View style={styles.row}>
        <Text style={styles.label}>Show my phone number in ads</Text>
        <Switch />
      </View>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Create Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  item: {
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
});
