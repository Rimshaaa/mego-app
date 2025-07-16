import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const PhoneScreen = () => {
  const router = useRouter();
  const [showPhone, setShowPhone] = React.useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review your details</Text>

      <Text style={styles.name}>Haseeb Ahmed</Text>
      <Text style={styles.phone}>+92 568 9771844</Text>

      <View style={styles.switchRow}>
        <Text>Show my phone number in ads</Text>
        <Switch value={showPhone} onValueChange={setShowPhone} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/PostAd/promote')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhoneScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 20 },
  name: { fontSize: 18, fontWeight: '600' },
  phone: { fontSize: 16, color: '#333', marginBottom: 20 },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#0057FF',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600' },
});
