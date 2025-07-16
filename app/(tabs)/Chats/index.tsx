import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const messages = [
  { id: '1', name: 'Rafiq Azeem', item: 'MacBook 14 pro', date: '13 Jan', avatar: require('../../../assets/images/profile.png') },
  { id: '2', name: 'Ahsan Khan', item: 'iPhone 14 pro', date: '13 Jan', avatar: require('../../../assets/images/profile.png') },
  { id: '3', name: 'Ali', item: 'iPhone 14 pro', date: '13 Jan', avatar: require('../../../assets/images/profile.png') },
  { id: '4', name: 'Ahmed', item: 'iPhone 14 pro', date: '13 Jan', avatar: require('../../../assets/images/profile.png') },
];

export default function index() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => router.push({ pathname: '/[id]', params: { name: item.name } })}
    >
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.item}>{item.item}</Text>
      </View>
      <Text style={styles.date}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* ✅ Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chats</Text>
      </View>

      {/* Chat List */}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },

  header: {
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textContainer: { flex: 1 },
  name: { fontSize: 16, fontWeight: '600' },
  item: { fontSize: 14, color: 'gray' },
  date: { fontSize: 12, color: 'gray' },
});
