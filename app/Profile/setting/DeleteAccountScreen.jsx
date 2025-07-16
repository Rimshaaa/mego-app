import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DeleteAccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text>After Deleting Your Account:</Text>
      <Text>• Provide an Undo option</Text>
      <Text>• Inform about data retention</Text>
      <Text>• What will happen to orders</Text>
      <Button title="Delete Account" color="#0057FF" onPress={() => {}} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 }
});

export default DeleteAccountScreen;