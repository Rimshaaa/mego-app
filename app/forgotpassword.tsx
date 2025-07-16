// app/forgot-password.js
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <ImageBackground source={require('../assets/images/logo.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          No worries! Enter your email address below and we will send you a code to reset password.
        </Text>

        <TextInput style={styles.input} placeholder="Enter Email" placeholderTextColor="#888" />

        <TouchableOpacity style={styles.button} onPress={() => router.push('/verify-account')}>
          <Text style={styles.buttonText}>Send resend Instruction</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: {
    marginTop: 'auto',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#555', marginBottom: 20 },
  input: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: { backgroundColor: '#0057FF', padding: 15, borderRadius: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});