import { useRouter } from 'expo-router';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Register() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Title */}
        <Text style={styles.title}>Register</Text>

        {/* Google Login */}
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('@/assets/icons/google.png')}
            style={styles.icon}
          />
          <Text style={styles.socialText}>Login with Google</Text>
        </TouchableOpacity>

        {/* Facebook Login */}
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('@/assets/icons/facebook.png')}
            style={styles.icon}
          />
          <Text style={styles.socialText}>Login with Facebook</Text>
        </TouchableOpacity>

        {/* OR Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* Signup with Mail */}
        <TouchableOpacity style={styles.altButton} onPress={() => router.push('/SignupEmail')}>
          <Image source={require('@/assets/icons/mail.png')} style={styles.altIcon} />
          <Text style={styles.altText}>Signup with mail</Text>
        </TouchableOpacity>

        {/* Signup with Phone */}
        <TouchableOpacity style={styles.altButton} onPress={() => router.push('/SignupPhone')}>
          <Image source={require('@/assets/icons/phone.png')} style={styles.altIcon} />
          <Text style={styles.altText}>Signup with phone</Text>
        </TouchableOpacity>

        {/* Already have account */}
        <TouchableOpacity style={styles.loginLink} onPress={() => router.push('/login')}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginBold}>Login</Text>
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
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 150,
  },
  
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 15,
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
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#999',
    fontWeight: 'bold',
  },
  altButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 15,
    justifyContent: 'center',
  },
  altIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  altText: {
    fontSize: 16,
    color: '#000',
  },
  loginLink: {
    marginTop: 20,
  },
  loginText: {
    fontSize: 14,
    color: '#555',
  },
  loginBold: {
    fontWeight: 'bold',
    color: '#0047BB',
  },
});
