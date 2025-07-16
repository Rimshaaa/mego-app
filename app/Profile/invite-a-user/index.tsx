import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Share,
  Alert,
  Modal,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import QRCode from 'react-native-qrcode-svg';

const InviteUser = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const referralCode = '45463';
  const inviteLink = 'https://megoapp.com/invite/3K9CKSePi...Df5NfQh7IK';

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Hey! I'm using the Mego App. Join using this link: ${inviteLink}`,
      });
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while sharing.');
    }
  };

  const handleCopyLink = async () => {
    await Clipboard.setStringAsync(inviteLink);
    Alert.alert('Copied', 'Invite link copied to clipboard!');
  };

  const handleSend = () => {
    setTimeout(() => {
      setShowSuccess(true);
    }, 1000);
  };

  const closeSuccess = () => {
    setShowSuccess(false);
    setEmail('');
    setPhone('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Invite a Friend & Earn Points</Text>
      <Text style={styles.referral}>{referralCode}</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        onChangeText={setPhone}
        value={phone}
      />

      <View style={styles.qrContainer}>
        <QRCode value={inviteLink} size={150} />
      </View>

      <Text style={styles.copyLink}>Invite Link</Text>
      <Text selectable style={styles.linkText}>{inviteLink}</Text>

      <TouchableOpacity style={styles.copyBtn} onPress={handleCopyLink}>
        <Text style={styles.copyText}>Copy Link</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send Invitation</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <Text style={styles.shareText}>Share via...</Text>
      </TouchableOpacity>

      {/* ✅ Success Modal */}
      <Modal
        visible={showSuccess}
        transparent
        animationType="fade"
        onRequestClose={closeSuccess}
      >
        <View style={styles.overlay}>
          <View style={styles.successBox}>
            <Text style={styles.successTitle}>Invitation Sent</Text>
            <Text style={styles.successText}>Successful!</Text>
            <Text style={styles.successNote}>
              You have successfully sent an invite.
            </Text>
            <TouchableOpacity onPress={closeSuccess} style={styles.closeBtn}>
              <Text style={styles.closeText}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InviteUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  referral: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0057FF',
    marginBottom: 16,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 12,
  },
  qrContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  copyLink: {
    fontWeight: '600',
    marginBottom: 4,
  },
  linkText: {
    color: '#0057FF',
    marginBottom: 8,
  },
  copyBtn: {
    backgroundColor: '#0057FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  copyText: {
    color: '#fff',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#0057FF',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  shareButton: {
    padding: 8,
    alignItems: 'center',
  },
  shareText: {
    color: '#0057FF',
    fontWeight: '500',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successBox: {
    backgroundColor: '#F6F8FE',
    padding: 25,
    borderRadius: 25,
    alignItems: 'center',
    width: '80%',
  },
  successTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#0057FF',
  },
  successText: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 8,
  },
  successNote: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 16,
  },
  closeBtn: {
    backgroundColor: '#0057FF',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  closeText: {
    color: '#fff',
    fontWeight: '600',
  },
});
