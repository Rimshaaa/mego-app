import { Slot, Stack } from 'expo-router';
import { useSegments } from 'expo-router';
import { useEffect, useState } from 'react';

export default function RootLayout() {
  const segments = useSegments();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate login for now
  useEffect(() => {
    // You can add logic to check async storage or API
    const timer = setTimeout(() => {
      setIsLoggedIn(true); // change this to false to show login screen
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <Slot />
      ) : (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      )}
    </>
  );
}
