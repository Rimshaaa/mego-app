import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const messages = [
  { id: '1', name: 'Rafiq Azeem', item: 'MacBook 14 pro', date: '13 Jan', avatar: require('../../../assets/images/person.jpg') },
  { id: '2', name: 'Ahsan Khan', item: 'iPhone 16 pro', date: '13 Jan', avatar: require('../../../assets/images/person1.jpg') },
  { id: '3', name: 'Sara', item: 'Samsung Galaxy\nAdd Sold', date: '13 Jan', avatar: require('../../../assets/images/person4.webp') },
  { id: '4', name: 'Azam', item: 'Persian Kitten', date: '13 Jan', avatar: require('../../../assets/images/person2.jpg') },
  { id: '5', name: 'Alexander', item: 'Washing Machine', date: '13 Jan', avatar: require('../../../assets/images/person3.jpg') },
  { id: '6', name: 'Farhan', item: 'MacBook 14 pro', date: '13 Jan', avatar: require('../../../assets/images/person5.jpg') },
];

export default function index() {
  const router = useRouter();
  const [filter, setFilter] = useState('All');
  const [menuVisibleId, setMenuVisibleId] = useState(null);

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity
        style={styles.chatItem}
       onPress={() =>
  router.push({
    pathname: '/[id]',
    params: {
      name: item.name,
      avatar: Image.resolveAssetSource(item.avatar).uri,
    },
  })
}
      >
        <Image source={item.avatar} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.item}>{item.item}</Text>
        </View>
        <Text style={styles.date}>{item.date}</Text>
        <TouchableOpacity onPress={() => setMenuVisibleId(item.id)}>
          <Entypo name="dots-three-vertical" size={16} color="gray" />
        </TouchableOpacity>
      </TouchableOpacity>

      {/* 3-dot Options */}
      {menuVisibleId === item.id && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => {
            setMenuVisibleId(null);
            // TODO: Delete logic
          }}>
            <Text style={styles.menuOption}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setMenuVisibleId(null);
            // TODO: Archive logic
          }}>
            <Text style={styles.menuOption}>Archive</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chats</Text>
      </View>

      {/* Dropdown Buttons */}
      <View style={styles.dropdownContainer}>
        <TouchableOpacity style={[styles.filterButton, filter === 'All' && styles.activeFilter]} onPress={() => setFilter('All')}>
          <Text style={filter === 'All' ? styles.activeText : styles.inactiveText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterButton, filter === 'Unread' && styles.activeFilter]} onPress={() => setFilter('Unread')}>
          <Text style={filter === 'Unread' ? styles.activeText : styles.inactiveText}>Unread Chats</Text>
        </TouchableOpacity>
      </View>

      {/* Chat List */}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listPadding}
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

  dropdownContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  filterButton: {
    borderWidth: 1,
    borderColor: '#003087',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  activeFilter: {
    backgroundColor: '#003087',
  },
  activeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inactiveText: {
    color: '#003087',
  },

  listPadding: {
    paddingHorizontal: 16,
    paddingBottom: 20,
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
  date: { fontSize: 12, color: 'gray', marginHorizontal: 8 },

  menu: {
    position: 'absolute',
    right: 16,
    top: 55,
    backgroundColor: '#fff',
    elevation: 5,
    padding: 8,
    borderRadius: 6,
    zIndex: 99,
  },
  menuOption: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 14,
  },
});
