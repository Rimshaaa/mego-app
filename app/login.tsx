// app/(auth)/login.js
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('@/assets/images/bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Welcome Back!</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#ccc"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          style={styles.input}
        />

         <TouchableOpacity onPress={() => router.push('/forgotpassword')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}
        onPress={() => router.push('/Home')}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerRow}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* Google Login Button */}
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require('@/assets/images/google.png')} // Add your google icon in assets
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signUpLink}
          onPress={() => router.push('/register')}
        >
          <Text style={styles.signUpText}>
            Don't have an account? <Text style={{ fontWeight: 'bold', color: '#fff' }}>Sign up</Text>
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
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: '#fff',
  },
  forgotPasswordText: {
    color: '#FFFFFF', // pure white
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '500',
    fontSize: 14,
    opacity: 0.8, // slightly transparent white for smooth look
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#007bff',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    width: '100%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#888',
  },
  orText: {
    color: '#aaa',
    marginHorizontal: 10,
    fontSize: 14,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 30,
  },
  googleIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  googleText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  signUpLink: {
    marginTop: 10,
  },
  signUpText: {
    color: '#ccc',
    fontSize: 14,
  },
});
