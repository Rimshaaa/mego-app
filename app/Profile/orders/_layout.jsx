import { Stack } from 'expo-router';

export default function OrdersLayout() {
  return (
    <Stack>
      <Stack.Screen name="tabs" options={{ title: 'My Orders' }} />
    </Stack>
  );
}