import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const AdSuccess = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/'); // Redirect to home after 2 seconds
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.icon}>🔒</Text>
        <Text style={styles.title}>Ad Posted Successfully!</Text>
        <Text style={styles.sub}>Please wait… You will be redirected to the homepage soon.</Text>
      </View>
    </View>
  );
};

export default AdSuccess;

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
  sub: { fontSize: 14, color: '#555', textAlign: 'center' },
});
