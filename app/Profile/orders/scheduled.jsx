import { View, Text, StyleSheet } from 'react-native';

export default function ScheduledOrders() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Scheduled Orders Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  text: { fontSize: 18, fontWeight: '600' },
});