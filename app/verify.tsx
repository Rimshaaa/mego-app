import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Verify() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const handleVerify = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      console.log('Navigating to Login...');
      router.push('/login'); // ✅ Change this path if needed
    }, 3000);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.heading}>Verify Account</Text>
      <Text style={styles.subheading}>
        Code has been sent to johndoe@gmail.com. Enter the code to verify your account.
      </Text>

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder="4 Digit Code"
        placeholderTextColor="#999"
        keyboardType="number-pad"
        maxLength={4}
      />

      {/* Resend */}
      <View style={styles.resendRow}>
        <Text style={styles.resendText}>Didn't Receive Code?</Text>
        <TouchableOpacity>
          <Text style={styles.resendLink}> Resend Code</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.timer}>Resend code in 00:59</Text>

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyBtn} onPress={handleVerify}>
        <Text style={styles.verifyText}>Verify Account</Text>
      </TouchableOpacity>

      {/* Success Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Image
              source={require('@/assets/icons/user-circle.png')}
              style={styles.successIcon}
              resizeMode="contain"
            />
            <Text style={styles.successTitle}>Sign In Successful</Text>
            <Text style={styles.successSubtitle}>
              You will be directed to the homepage soon.
            </Text>
            <ActivityIndicator size="large" color="#0047BB" style={{ marginTop: 20 }} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 16,
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
    color: '#000',
  },
  resendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 4,
  },
  resendText: {
    color: '#555',
    fontSize: 14,
  },
  resendLink: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0047BB',
  },
  timer: {
    textAlign: 'center',
    fontSize: 13,
    color: '#777',
    marginBottom: 30,
  },
  verifyBtn: {
    backgroundColor: '#0047BB',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  verifyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 280,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 10,
  },
  successIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0047BB',
    marginBottom: 10,
  },
  successSubtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
