import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { label: 'Mobiles', icon: require('../../assets/images/iphone12.png') },
  { label: 'Property for Sale', icon: require('../../assets/images/property.jpg') },
  { label: 'Vehicles', icon: require('../../assets/images/vehicle.jpg') },
  { label: 'Business Industrial', icon: require('../../assets/images/business.jpg') },
  { label: 'Fashions', icon: require('../../assets/images/fashion.png') },
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
    image: require('../../assets/images/iphone14.webp'),
  },
  {
    title: 'Samsung Galaxy S22',
    price: '350000',
    location: 'Model Town, Lahore',
    condition: 'New',
    rating: '9/10',
    points: '14',
    date: '20 Sep',
    image: require('../../assets/images/samsung.webp'),
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
    image: require('../../assets/images/macbook.jpg'),
  },
  {
    title: 'Sony Camera',
    price: '200000',
    location: 'Johar Town, Lahore',
    condition: 'Used',
    rating: '9/10',
    points: '12',
    date: '18 Sep',
    image: require('../../assets/images/sonycamera.jpg'),
  },
];

const ProductSection = ({ title, products }) => {
  const router = useRouter();
  return (
    <View style={styles.productSection}>
      <View style={styles.sectionRow}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity><Text style={styles.seeMore}>See more</Text></TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.productCard}
            onPress={() =>
              router.push({
                pathname: '/product-details',
                params: {
                  ...item,
                  image: Image.resolveAssetSource(item.image).uri,
                },
              })
            }
          >
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.title}</Text>
            <Text style={styles.productPrice}>Rs {item.price}</Text>
            <View style={styles.metaRow}>
              <Text style={styles.metaText}>{item.condition}</Text>
              <Text style={styles.metaText}>{item.rating}</Text>
              <Text style={styles.metaText}>{item.points} points</Text>
            </View>
            <Text style={styles.metaSub}>{item.location}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 14 }}>
            <Ionicons name="search" size={22} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={styles.locationBar}>
          <Ionicons name="location-outline" size={18} color="#555" />
          <TextInput
            placeholder="Gulberg Phase 4, Lahore"
            style={styles.locationInput}
          />
        </View>

        {/* Categories */}
        <View style={styles.categorySection}>
          <View style={styles.sectionRow}>
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

        <ProductSection title="Featured" products={featuredProducts} />

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
            <Image source={require('../../assets/images/nike.png')} style={styles.adImage} />
          </View>
        </View>

        <ProductSection title="Most Viewed" products={mostViewedProducts} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: 50, paddingBottom: 10 },
  logo: { width: 100, height: 40, resizeMode: 'contain' },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  locationBar: { flexDirection: 'row', alignItems: 'center', margin: 16, backgroundColor: '#f1f1f1', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 8 },
  locationInput: { marginLeft: 10, flex: 1 },
  categorySection: { marginTop: 10, paddingHorizontal: 16 },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  sectionTitle: { fontSize: 16, fontWeight: '700' },
  seeMore: { color: '#007AFF', fontSize: 13 },
  categoryItem: { alignItems: 'center', marginRight: 20 },
  categoryCircle: { width: 60, height: 60, backgroundColor: '#ddd', borderRadius: 30, marginBottom: 5, justifyContent: 'center', alignItems: 'center' },
  categoryIcon: { width: 36, height: 36, resizeMode: 'contain' },
  categoryText: { fontSize: 12, textAlign: 'center' },
  productSection: { marginTop: 10, paddingHorizontal: 16 },
  productCard: { width: 160, marginRight: 12, backgroundColor: '#F9F9F9', padding: 10, borderRadius: 10 },
  productImage: { width: '100%', height: 90, borderRadius: 8, resizeMode: 'contain', backgroundColor: '#ddd' },
  productName: { fontWeight: '600', marginTop: 6, fontSize: 13 },
  productPrice: { color: '#0057FF', fontWeight: 'bold', marginTop: 2 },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
  metaText: { fontSize: 10, color: '#666' },
  metaSub: { fontSize: 10, color: '#999', marginTop: 2 },
  adContainer: { marginHorizontal: 16, marginVertical: 10, backgroundColor: '#D9E8FB', borderRadius: 20, overflow: 'hidden' },
  adContent: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  adText: { flex: 1 },
  adLabel: { backgroundColor: '#FFD700', alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6, marginBottom: 6 },
  adLabelText: { fontWeight: 'bold', fontSize: 12, color: '#000' },
  adTitle: { fontSize: 22, fontWeight: 'bold', color: '#000' },
  adSubtitle: { fontSize: 18, fontWeight: '600', color: '#666' },
  adPrice: { fontSize: 18, fontWeight: 'bold', color: '#000', marginTop: 6 },
  adImage: { width: 120, height: 120, resizeMode: 'contain', marginLeft: 10 },
});
