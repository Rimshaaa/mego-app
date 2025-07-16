import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

// Screens from tabs
import MyAdsScreen from './my-ads';
import HomeScreen from './Home';
import ChatScreen from './Chats';
import ProfileScreen from './my-profile';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const navigation = useNavigation();
 const router = useRouter();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'MyAds') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return iconName ? <Ionicons name={iconName} size={size} color={color} /> : null;
        },
        tabBarActiveTintColor: '#007aff',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />

      {/* Center Add (+) Button */}
      <Tab.Screen
      
        name="Post"
        component={View} // dummy screen
        options={{
         
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={styles.fabButton} onPress={() => router.push('/PostAd')} // This should match the name in your root stack
            >
              <Ionicons name="add" size={30} color="#fff" />
            </TouchableOpacity>
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); // disable default behavior
          },
        }}
      />

      <Tab.Screen name="MyAds" component={MyAdsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  fabButton: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007aff',
    width: 60,
    height: 60,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  },
});
