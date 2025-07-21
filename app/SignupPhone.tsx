import { useRouter } from 'expo-router';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function SignupPhone() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Title */}
        <Text style={styles.title}>Ready to Join MEGO?</Text>
        <Text style={styles.subtitle}>
          Create an account and start exploring thousands of products today!
        </Text>

        {/* Fields */}
        <View style={styles.inputWrapper}>
          <Image source={require('@/assets/icons/user.png')} style={styles.icon} />
          <TextInput
            placeholder="User Name"
            style={styles.input}
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Image source={require('@/assets/icons/phone.png')} style={styles.icon} />
          <TextInput
            placeholder="Phone Number"
            keyboardType="phone-pad"
            style={styles.input}
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Image source={require('@/assets/icons/lock.png')} style={styles.icon} />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Image source={require('@/assets/icons/lock.png')} style={styles.icon} />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#666"
          />
        </View>

      

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/verify')}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <TouchableOpacity style={styles.loginLink} onPress={() => router.push('/login')}>
          <Text style={styles.loginText}>
            Do you have an account?{' '}
            <Text style={styles.loginHighlight}>Login</Text>
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
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  logo: {
    width: 140,
    height: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
    marginBottom: 25,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 50,
    marginBottom: 15,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 10,
    tintColor: '#999',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#0047BB',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 25,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#777',
  },
  loginHighlight: {
    color: '#0047BB',
    fontWeight: 'bold',
  },
});
