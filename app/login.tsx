import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(true); // Simulate password error

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Login</Text>

        {/* Email Field */}
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#888"
          style={styles.input}
          defaultValue="johndoe@mail.com"
        />

        {/* Password Field */}
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry={!showPassword}
            style={[styles.input, error && styles.inputError]}
            defaultValue="8349328492"
          />
          <TouchableOpacity
            style={styles.eyeIconWrapper}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={
                showPassword
                  ? require('@/assets/icons/eye-off.png')
                  : require('@/assets/icons/eye.png')
              }
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Error Message */}
        {error && (
          <Text style={styles.errorText}>
            Incorrect password. Please check your password.
          </Text>
        )}

        {/* Forgot Password */}
        <TouchableOpacity
          style={styles.forgotWrapper}
          onPress={() => router.push('/forgotpassword')}
        >
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push('/Home')}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* OR Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or login with</Text>
          <View style={styles.line} />
        </View>

        {/* Google Login */}
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('@/assets/icons/google.png')}
            style={styles.icon}
          />
          <Text style={styles.socialText}>Login with Google</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <TouchableOpacity
          style={styles.signUpLink}
          onPress={() => router.push('/register')}
        >
          <Text style={styles.signUpText}>
            Don’t have an account? <Text style={styles.signUpBold}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
    textAlign: 'center'
  },
  input: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 15,
    color: '#000',
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: '#dc3545',
  },
  errorText: {
    color: '#dc3545',
    marginBottom: 5,
    fontSize: 13,
    marginLeft: 5,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIconWrapper: {
    position: 'absolute',
    right: 16,
    top: 14,
  },
  eyeIcon: {
    width: 22,
    height: 22,
    tintColor: '#888',
  },
  forgotWrapper: {
    alignItems: 'flex-end',
    marginBottom: 25,
  },
  forgot: {
    fontSize: 14,
    color: '#007BFF',
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#0047BB',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 25,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#888',
    fontSize: 14,
    fontWeight: '600',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  socialText: {
    fontSize: 16,
    color: '#000',
  },
  signUpLink: {
    marginTop: 30,
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 14,
    color: '#555',
  },
  signUpBold: {
    fontWeight: 'bold',
    color: '#0047BB',
  },
});
