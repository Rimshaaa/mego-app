// app/(auth)/verify.js
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Verify() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('@/assets/images/logo.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Verify your account</Text>
        <Text style={styles.subtitle}>Enter the 6-digit code sent to your email</Text>

        <TextInput
          placeholder="Enter Verification Code"
          placeholderTextColor="#ccc"
          keyboardType="number-pad"
          style={styles.input}
        />

        <TouchableOpacity style={styles.verifyButton}>
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resendLink}>
          <Text style={styles.resendText}>
            Didn't receive the code? <Text style={{ fontWeight: 'bold', color: '#fff' }}>Resend</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 20,
    paddingTop: 80,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 70,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 5,
  },
  verifyButton: {
    backgroundColor: '#28a745',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendLink: {
    marginTop: 10,
  },
  resendText: {
    color: '#ccc',
    fontSize: 14,
  },
});
