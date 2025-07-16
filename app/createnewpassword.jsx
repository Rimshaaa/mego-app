// app/create-new-password.js
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function CreateNewPassword() {
  const router = useRouter();

  return (
    <ImageBackground source={require('../assets/images/logo.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Create New Password</Text>
        <Text style={styles.subtitle}>
          Please enter and confirm your new password. You will need to login after you reset.
        </Text>

        <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry placeholderTextColor="#888" />

        <TouchableOpacity style={styles.button} onPress={() => router.push('/resetsuccess')}>
          <Text style={styles.buttonText}>Reset Password</Text>
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
