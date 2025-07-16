import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function BillingInfo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Billing Information</Text>

      <Text style={styles.label}>Customer Type</Text>
      <TextInput style={styles.input} placeholder="Individual or Business" />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Enter your email" />

      <Text style={styles.label}>Customer Name</Text>
      <TextInput style={styles.input} placeholder="Enter name" />

      <Text style={styles.label}>Phone Number</Text>
      <TextInput style={styles.input} placeholder="Enter phone" keyboardType="phone-pad" />

      <Text style={styles.label}>Address</Text>
      <TextInput style={styles.input} placeholder="Enter address" />
      <TextInput style={styles.input} placeholder="Enter city" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  label: { marginTop: 12, marginBottom: 4, fontSize: 14, fontWeight: '500' },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0057FF',
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
  },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
});
