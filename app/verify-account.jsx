// app/verify-account.js
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function VerifyAccount(){
  const router = useRouter();

  return (
    <ImageBackground source={require('../assets/images/logo.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Verify Account</Text>
        <Text style={styles.subtitle}>
          Code has been sent to johndoe@gmail.com. Enter the code to verify your account.
        </Text>

        <TextInput style={styles.input} placeholder="Enter 6 digit code" placeholderTextColor="#888" />

        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkText}>Didn't Receive Code? Resend Code</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/createnewpassword')}>
          <Text style={styles.buttonText}>Verify account</Text>
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
    marginBottom: 10,
  },
  linkButton: { marginBottom: 20 },
  linkText: { color: '#0057FF', textAlign: 'right' },
  button: { backgroundColor: '#0057FF', padding: 15, borderRadius: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});
