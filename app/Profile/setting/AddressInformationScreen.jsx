import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddressInformationScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Address Name" style={styles.input} />
      <TextInput placeholder="City & Area" style={styles.input} />
      <TextInput placeholder="Address Line 1" style={styles.input} />
      <TextInput placeholder="Address Line 2" style={styles.input} />
      <TextInput placeholder="Notes" style={styles.input} />
      <Button title="Save changes" color="#0057FF" onPress={() => {}} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 20 }
});

export default AddressInformationScreen;