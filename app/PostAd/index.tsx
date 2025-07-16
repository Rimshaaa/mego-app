import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const categories = [
  { label: 'Mobiles', image: require('../../assets/images/iphone12.png') },
  { label: 'Property for Sale', image: require('../../assets/images/property.jpg') },
  { label: 'Vehicles', image: require('../../assets/images/vehicle.jpg') },
  { label: 'Business Industrial', image: require('../../assets/images/business.jpg') },
  { label: 'Fashions', image: require('../../assets/images/fashion.png') },
  { label: 'Bikes', image: require('../../assets/images/bike2.png') },
  { label: 'Agriculture', image: require('../../assets/images/agriculture.jpeg') },
  { label: 'Services', image: require('../../assets/images/services.jpg') },
  { label: 'Jobs', image: require('../../assets/images/jobs.jpg') },
  { label: 'Animals', image: require('../../assets/images/animals.jpg') },
  { label: 'Electronics', image: require('../../assets/images/electronics.webp') },
  { label: 'Home Appliances', image: require('../../assets/images/appliances.jpg') },
  { label: 'Furniture', image: require('../../assets/images/furniture.jpg') },
  { label: 'Home Decor', image: require('../../assets/images/home-decor.webp') },
  { label: 'Books', image: require('../../assets/images/books.jpg') },
  { label: 'Sports', image: require('../../assets/images/sports.webp') },
  { label: 'Kids', image: require('../../assets/images/kids.jpg') },
];

const PostAdHome = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>What are you want to sell?</Text>

      <View style={styles.grid}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryCard}
            onPress={() => router.push('/PostAd/subcategory')}
          >
            <View style={styles.circle}>
              <Image source={item.image} style={styles.image} />
            </View>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default PostAdHome;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  heading: { fontSize: 20, fontWeight: '700', marginBottom: 16 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '24%',
    alignItems: 'center',
    marginBottom: 20,
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F6F8FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 11,
    textAlign: 'center',
  },
});
