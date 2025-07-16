import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const PromotePopup = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.icon}>📈</Text>
        <Text style={styles.title}>Do You Want To Sell Your Item Fast?</Text>
        <Text style={styles.sub}>Choose our featured function to sell your item in just hours</Text>

        <TouchableOpacity style={styles.primary} onPress={() => router.push('/PostAd/success')}>
          <Text style={styles.primaryText}>Yes I Want</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondary} onPress={() => router.push('/PostAd/success')}>
          <Text style={styles.secondaryText}>No I Don’t Want</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PromotePopup;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F6F8FE' },
  box: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
  },
  icon: { fontSize: 40 },
  title: { fontSize: 18, fontWeight: '700', marginVertical: 12, textAlign: 'center' },
  sub: { fontSize: 14, color: '#555', textAlign: 'center', marginBottom: 20 },
  primary: {
    backgroundColor: '#0057FF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    width: '100%',
    alignItems: 'center',
  },
  primaryText: { color: '#fff', fontWeight: '600' },
  secondary: {
    borderWidth: 1,
    borderColor: '#0057FF',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  secondaryText: { color: '#0057FF', fontWeight: '600' },
});
