import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const CreatePasswordScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry />
      <Button title="Create new Password" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 20 }
});

export default CreatePasswordScreen;