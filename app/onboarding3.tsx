import { useRouter } from 'expo-router';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Onboarding3() {
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

        {/* Yellow Wave Background with Illustration */}
        <View style={styles.yellowBackground}>
          <Image
            source={require('@/assets/images/img2.png')} // Replace with actual image for screen 3
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>

        {/* Text */}
        <Text style={styles.title}>Sell Smarter, Not Harder</Text>
        <Text style={styles.description}>
          List items in seconds, reach more buyers, and turn your unused goods into cash – all with MEGO!
        </Text>

        {/* Dots */}
        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.skip}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => router.replace('/login')} // Go to login/signup
          >
            <Text style={styles.nextText}>Get Started</Text>
          </TouchableOpacity>
        </View>

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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 150,
    height: 100,
    marginTop: 20,
  },
  yellowBackground: {
    backgroundColor: '#FFEB3B', // Bright yellow
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
  borderBottomLeftRadius: 50,
  borderBottomRightRadius: 50,
  padding: 20,
  marginVertical: 20,
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  },
  illustration: {
     width: '100%',
  height: height * 0.25,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#0047BB',
    width: 10,
    height: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  skip: {
    fontSize: 16,
    color: '#0047BB',
  },
  nextButton: {
    backgroundColor: '#0047BB',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  nextText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
