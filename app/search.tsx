import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function SearchScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [lastSearches, setLastSearches] = useState([
    'iPhone 12 Pro Max',
    'Samsung Galaxy S22',
  ]);
  const popularCategories = [
    'Mobiles',
    'Vehicles',
    'Property for sale',
    'Fashions and Beauty',
  ];

  const removeSearch = (index) => {
    const updated = [...lastSearches];
    updated.splice(index, 1);
    setLastSearches(updated);
  };

  const clearAll = () => {
    setLastSearches([]);
  };

  return (
    <View style={styles.container}>
      {/* Search Header */}
      <View style={styles.searchRow}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
          <Ionicons name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>

        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={18} color="#555" style={{ marginLeft: 8 }} />
          <TextInput
            placeholder="Find Cars, Mobiles and more"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
        </View>
      </View>

      <ScrollView style={styles.body}>
        {/* Last Search */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Last search</Text>
          {lastSearches.length > 0 && (
            <TouchableOpacity onPress={clearAll}>
              <Text style={styles.clearAll}>Clear all</Text>
            </TouchableOpacity>
          )}
        </View>

        {lastSearches.map((item, index) => (
          <View style={styles.listRow} key={index}>
            <Ionicons name="time-outline" size={18} color="#888" />
            <Text style={styles.listText}>{item}</Text>
            <TouchableOpacity onPress={() => removeSearch(index)}>
              <Feather name="x" size={18} color="#888" />
            </TouchableOpacity>
          </View>
        ))}

        {/* Popular Categories */}
        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Popular Categories</Text>

        {popularCategories.map((cat, index) => (
          <View style={styles.listRow} key={index}>
            <Text style={styles.listText}>{cat}</Text>
            <Ionicons name="chevron-forward" size={18} color="#888" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backIcon: { marginRight: 12 },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    flex: 1,
    height: 44,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#000',
  },
  body: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  clearAll: {
    fontSize: 13,
    color: '#FF4D4D',
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 14,
    gap: 10,
  },
  listText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
});
