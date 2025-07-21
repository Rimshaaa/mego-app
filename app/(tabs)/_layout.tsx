import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens from tabs
import ChatScreen from './Chats';
import HomeScreen from './Home';
import MyAdsScreen from './my-ads';
import ProfileScreen from './my-profile';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 65,
          paddingBottom: 4,
          paddingTop: 4,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
          marginTop: -4,
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

          return (
            <Ionicons
              name={iconName}
              size={22}
              color={color}
              style={{ marginBottom: -2 }}
            />
          );
        },
        tabBarActiveTintColor: '#007aff',
        tabBarInactiveTintColor: '#999',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />

      {/* Center Add (+) Button */}
      <Tab.Screen
        name="Post"
        component={View} // dummy
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={styles.fabButton}
              onPress={() => router.push('/PostAd')}
            >
              <Ionicons name="add" size={30} color="#fff" />
            </TouchableOpacity>
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); // disable default tab change
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
    top: -25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007aff',
    width: 60,
    height: 60,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  },
});
