import { View, Text, StyleSheet } from 'react-native';

export default function ActiveOrders() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Active Orders Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  text: { fontSize: 18, fontWeight: '600' },
});
