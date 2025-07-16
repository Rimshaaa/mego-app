import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const EditProfile = () => {
  const router = useRouter();
  const [name, setName] = useState('Anas Khan');
  const [email, setEmail] = useState('anas35464@gmail.com');
  const [address, setAddress] = useState('Pakistan');
  const [phone, setPhone] = useState('+923456789123');

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('../../../assets/images/profile.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>{email}</Text>
      </View>

      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" />
      <TextInput style={styles.input} value={address} onChangeText={setAddress} placeholder="Address" />
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Phone number" />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.saveBtn} onPress={() => router.back()}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.discardBtn} onPress={() => router.back()}>
          <Text style={styles.discardText}>Discard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  profileHeader: { alignItems: 'center', marginBottom: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#ddd' },
  name: { marginTop: 8, fontSize: 14, color: '#444' },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  saveBtn: {
    backgroundColor: '#0057FF',
    paddingVertical: 12,
    borderRadius: 10,
    flex: 0.48,
    alignItems: 'center',
  },
  discardBtn: {
    backgroundColor: '#ccc',
    paddingVertical: 12,
    borderRadius: 10,
    flex: 0.48,
    alignItems: 'center',
  },
  saveText: { color: '#fff', fontWeight: '600' },
  discardText: { color: '#000', fontWeight: '500' },
});
