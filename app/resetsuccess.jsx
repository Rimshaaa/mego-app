// app/reset-success.js
import { View, Text, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function ResetSuccess() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/login');
    }, 3000); // 3 seconds and navigate to login
  }, []);

  return (
    <ImageBackground source={require('../assets/images/logo.png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.circle}>
          <Text style={styles.lock}>🔒</Text>
        </View>
        <Text style={styles.successText}>Reset Password Successful!</Text>
        <Text style={styles.subtitle}>Please wait... You will be directed to the homepage soon.</Text>
        <ActivityIndicator size="large" color="#0057FF" style={{ marginTop: 20 }} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { alignItems: 'center', backgroundColor: '#fff', padding: 30, borderRadius: 30 },
  circle: { backgroundColor: '#e6f0ff', padding: 30, borderRadius: 999, marginBottom: 20 },
  lock: { fontSize: 40 },
  successText: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#777', textAlign: 'center' },
});
