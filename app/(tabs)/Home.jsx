import ProductSection from '@/components/ProductSection';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// Image map for resolving imageKey to actual image source
const imageMap = {
  iphone14: require('@/assets/images/iphone14.webp'),
  samsung: require('@/assets/images/samsung.webp'),
  macbook: require('@/assets/images/macbook.jpg'),
  sonycamera: require('@/assets/images/sonycamera.jpg'),
};

const categories = [
  { label: 'Mobiles', icon: require('@/assets/images/iphone12.png') },
  { label: 'Property', icon: require('@/assets/images/property.jpg') },
  { label: 'Vehicles', icon: require('@/assets/images/vehicle.jpg') },
  { label: 'Business', icon: require('@/assets/images/business.jpg') },
  { label: 'Fashion', icon: require('@/assets/images/fashion.png') },
  { label: 'Books', icon: require('@/assets/images/books.jpg') },
];

const featuredProducts = [
  {
    title: 'iPhone 14 Pro Max',
    price: '400000',
    location: 'Gulberg Phase 4, Lahore',
    condition: 'New',
    rating: '10/10',
    points: '16',
    date: '22 Sep',
    imageKey: 'iphone14',
  },
  {
    title: 'Samsung Galaxy S22',
    price: '350000',
    location: 'Model Town, Lahore',
    condition: 'New',
    rating: '9/10',
    points: '14',
    date: '20 Sep',
    imageKey: 'samsung',
  },
];

const mostViewedProducts = [
  {
    title: 'Macbook Pro',
    price: '450000',
    location: 'Model Town, Lahore',
    condition: 'Used',
    rating: '9/10',
    points: '15',
    date: '21 Sep',
    imageKey: 'macbook',
  },
  {
    title: 'Sony Camera',
    price: '200000',
    location: 'Johar Town, Lahore',
    condition: 'Used',
    rating: '9/10',
    points: '12',
    date: '18 Sep',
    imageKey: 'sonycamera',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
        <View style={styles.iconBoxContainer}>
          <TouchableOpacity style={styles.iconBox}>
            <Ionicons name="notifications-outline" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox} onPress={() => router.push('/search')}>
            <Ionicons name="search" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {/* Location Bar */}
        <TouchableOpacity style={styles.locationBar} onPress={() => router.push('/search')}>
          <Ionicons name="location-outline" size={18} color="#555" />
          <TextInput
            placeholder="Gulberg Phase 4, Lahore"
            placeholderTextColor="#000"
            style={styles.locationInput}
            editable={false}
          />
        </TouchableOpacity>

        {/* Categories */}
        <View style={styles.categorySection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Browse Categories</Text>
            <TouchableOpacity onPress={() => router.push('/categories')}>
              <Text style={styles.seeMore}>See more</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((cat, index) => (
              <TouchableOpacity key={index} style={styles.categoryItem}>
                <View style={styles.categoryCircle}>
                  <Image source={cat.icon} style={styles.categoryIcon} />
                </View>
                <Text style={styles.categoryText}>{cat.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Products */}
        <ProductSection
          title="Featured"
          count={featuredProducts.length}
          products={featuredProducts.map((product) => ({
            ...product,
            image: imageMap[product.imageKey],
          }))}
        />

        {/* Ad Banner */}
        <View style={styles.adContainer}>
          <View style={styles.adContent}>
            <View style={styles.adText}>
              <View style={styles.adLabel}>
                <Text style={styles.adLabelText}>Ad</Text>
              </View>
              <Text style={styles.adTitle}>Nike</Text>
              <Text style={styles.adSubtitle}>Free Metcon</Text>
              <Text style={styles.adPrice}>$ 120.99</Text>
            </View>
            <Image source={require('@/assets/images/nike.png')} style={styles.adImage} />
          </View>
        </View>

        {/* Most Viewed */}
        <ProductSection
          title="Most Viewed"
          count={mostViewedProducts.length}
          products={mostViewedProducts.map((product) => ({
            ...product,
            image: imageMap[product.imageKey],
          }))}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 100,
    resizeMode: 'contain',
  },
  iconBoxContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 16,
  },
  locationInput: {
    marginLeft: 10,
    flex: 1,
    color: '#000',
  },
  categorySection: {
    marginTop: 10,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeMore: {
    fontSize: 13,
    color: '#007AFF',
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryCircle: {
    width: 60,
    height: 60,
    backgroundColor: '#eee',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  categoryIcon: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
  categoryText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  adContainer: {
    margin: 16,
    backgroundColor: '#D9E8FB',
    borderRadius: 20,
    overflow: 'hidden',
  },
  adContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  adText: {
    flex: 1,
  },
  adLabel: {
    backgroundColor: '#FFD700',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 6,
  },
  adLabelText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#000',
  },
  adTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  adSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
  },
  adPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 6,
  },
  adImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginLeft: 10,
  },
});
