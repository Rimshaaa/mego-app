// app/(auth)/onboarding3.js
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Onboarding3() {
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

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardContainer}
        >
           <Image source={require('@/assets/images/image1.jpg')} style={styles.card} />
           <Image source={require('@/assets/images/image2.jpg')} style={styles.card} />
           <Image source={require('@/assets/images/image3.jpg')} style={styles.card} />
        </ScrollView>

        <Text style={styles.title}>Sell Smarter, Not Harder</Text>

        <Text style={styles.description}>
          List items in seconds, reach more buyers, and turn your unused goods into cash – all with MEGO!
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => router.back()}
          >
            <Text style={styles.skipText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => router.push('/login')} // Next screen is login/signup
          >
            <Text style={styles.nextText}>Get Started</Text>
          </TouchableOpacity>
        </View>
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
    paddingTop: 50,
    justifyContent: 'space-between',
  },
  logo: {
    width: 120,
    height: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
  cardContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: 140,
    height: 200,
    borderRadius: 12,
    marginRight: 15,
    backgroundColor: '#fff',
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: '#ccc',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 10,
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  skipButton: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  nextButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  skipText: {
    color: '#fff',
    fontSize: 16,
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
  },
});
