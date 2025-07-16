import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const mockAds = [
  {
    id: '1',
    title: 'iPhone 7 Plus PTA Approved',
    price: '₨25,000',
    category: 'Mobile Phones',
    createdOn: '05 January',
    image: require('../../assets/images/iphone1.jpg'),
  },
  // You can add more ads here...
];

export default function MyAdsScreen() {
  const [ads, setAds] = useState(mockAds); // Use [] to test empty state
  const [selectedAd, setSelectedAd] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Image source={require('../../assets/images/react-logo.png')} style={styles.emptyImage} />
      <Text style={styles.emptyTitle}>No Ads Yet?</Text>
      <Text style={styles.emptyText}>Find something you like to sell and start conversation!</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.adCard}>
      <Image source={item.image} style={styles.adImage} />
      <View style={styles.adContent}>
        <Text style={styles.adTitle}>{item.title}</Text>
        <Text style={styles.adPrice}>{item.price}</Text>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{item.category}</Text>
        </View>
        <Text style={styles.createdOn}>Created on {item.createdOn}</Text>
      </View>
      <TouchableOpacity onPress={() => {
        setSelectedAd(item);
        setModalVisible(true);
      }}>
        <Ionicons name="ellipsis-vertical" size={20} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* ✅ Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Ads</Text>
      </View>

      {/* Filter Tabs */}
      <View style={styles.tabBar}>
        <Text style={styles.tabActive}>All Ads</Text>
        <TouchableOpacity style={styles.filterBtn} onPress={() => alert('Filter clicked')}>
          <Ionicons name="filter" size={16} color="#007aff" />
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
      </View>

      {/* Ads List or Empty State */}
      {ads.length === 0 ? renderEmptyState() : (
        <FlatList
          data={ads}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16 }}
        />
      )}

      {/* Edit/Delete Modal */}
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <Pressable onPress={() => alert('Edit pressed')} style={styles.modalBtn}>
              <Text>Edit</Text>
            </Pressable>
            <Pressable onPress={() => alert('Delete pressed')} style={[styles.modalBtn, { backgroundColor: '#ffdddd' }]}>
              <Text style={{ color: 'red' }}>Delete</Text>
            </Pressable>
            <Pressable onPress={() => setModalVisible(false)} style={styles.modalBtn}>
              <Text style={{ color: 'gray' }}>Cancel</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  // ✅ Header Styles
  header: {
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
  },

  // Tabs & Filters
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  tabActive: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 20,
    fontWeight: '600',
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    backgroundColor: '#f0f8ff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  filterText: {
    color: '#007aff',
    marginLeft: 4,
    fontWeight: '500',
  },

  // Ads
  adCard: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
    gap: 10,
  },
  adImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  adContent: {
    flex: 1,
  },
  adTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  adPrice: {
    fontWeight: '500',
    marginTop: 2,
  },
  tag: {
    backgroundColor: '#e0e0ff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  tagText: {
    fontSize: 12,
    color: '#333',
  },
  createdOn: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },

  // Empty State
  emptyContainer: {
    alignItems: 'center',
    marginTop: 80,
    paddingHorizontal: 30,
  },
  emptyImage: {
    width: 180,
    height: 180,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  emptyText: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 8,
  },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000055',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  modalBtn: {
    paddingVertical: 14,
    alignItems: 'center',
  },
});
