// app/Profile/loyalty/invite.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Share, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import QRCode from 'react-native-qrcode-svg';

const InviteFriendLoyalty = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const referralCode = '45463';
  const inviteLink = 'https://megoapp.com/invite/3K9CKSePi...Df5NfQh7IK';

  const handleCopy = async () => {
    await Clipboard.setStringAsync(inviteLink);
    Alert.alert('Copied', 'Invite link copied to clipboard!');
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Join Mego and earn loyalty rewards! Use my code: ${referralCode} or click here: ${inviteLink}`,
      });
    } catch (error) {
      Alert.alert('Error', 'Could not share link.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Invite a Friend & Earn Points</Text>
      <Text style={styles.code}>{referralCode}</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />

      <View style={styles.qrBox}>
        <QRCode value={inviteLink} size={150} />
      </View>

      <Text style={styles.linkLabel}>Copy Link</Text>
      <Text selectable style={styles.linkText}>{inviteLink}</Text>

      <TouchableOpacity style={styles.copyBtn} onPress={handleCopy}>
        <Text style={styles.copyText}>Copy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.shareBtn} onPress={handleShare}>
        <Text style={styles.shareText}>Share Invitation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InviteFriendLoyalty;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 8 },
  code: { fontSize: 22, color: '#0057FF', fontWeight: '700', marginBottom: 16 },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  qrBox: {
    alignItems: 'center',
    marginVertical: 16,
  },
  linkLabel: { fontWeight: '600' },
  linkText: { color: '#0057FF', marginBottom: 10 },
  copyBtn: {
    backgroundColor: '#0057FF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  copyText: { color: '#fff', fontWeight: '600' },
  shareBtn: {
    borderColor: '#0057FF',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  shareText: { color: '#0057FF', fontWeight: '600' },
});
