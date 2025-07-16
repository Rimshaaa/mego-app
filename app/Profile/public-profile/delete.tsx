import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const DeleteAccount = () => {
  const router = useRouter();
  const [name] = useState('Anas Khan');
  const [email] = useState('anas35464@gmail.com');
  const [address] = useState('Pakistan');
  const [phone] = useState('+923456789123');

  const handleDelete = () => {
    Alert.alert('Account Deleted', 'Your account has been deleted successfully.');
    router.replace('/'); // Or navigate to logout screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('../../../assets/images/profile.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      <TextInput style={styles.input} value={name} editable={false} />
      <TextInput style={styles.input} value={email} editable={false} />
      <TextInput style={styles.input} value={address} editable={false} />
      <TextInput style={styles.input} value={phone} editable={false} />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => router.back()}>
          <Text style={styles.cancelText}>Discard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeleteAccount;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  profileHeader: { alignItems: 'center', marginBottom: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#ddd' },
  name: { fontSize: 18, fontWeight: 'bold', marginTop: 6 },
  email: { fontSize: 14, color: '#666', marginBottom: 10 },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: '#f2f2f2',
  },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  deleteBtn: {
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    borderRadius: 10,
    flex: 0.48,
    alignItems: 'center',
  },
  cancelBtn: {
    backgroundColor: '#ccc',
    paddingVertical: 12,
    borderRadius: 10,
    flex: 0.48,
    alignItems: 'center',
  },
  deleteText: { color: '#fff', fontWeight: '600' },
  cancelText: { color: '#000', fontWeight: '500' },
});
