import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProductCard from './ProductCard';

// 🔧 Image mapping for imageKey values
const imageMap = {
  iphone14: require('@/assets/images/iphone1.jpg'),
  samsung: require('@/assets/images/iphone1.jpg'),
  macbook: require('@/assets/images/iphone1.jpg'),
  sonycamera: require('@/assets/images/iphone1.jpg'),
};

export default function ProductSection({ title, count, products, onSeeMore }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header Row */}
      <View style={styles.header}>
        <Text style={styles.title}>
          {title}{' '}
          <Text style={styles.countText}>
            {count > 9 ? '10+' : count}
          </Text>
        </Text>

        <TouchableOpacity onPress={onSeeMore}>
          <Text style={styles.seeMore}>See more</Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((item, index) => {
          const resolvedImage = imageMap[item.imageKey] || require('@/assets/images/react-logo.png');

          return (
            <ProductCard
              key={index}
              item={{
                ...item,
                image: resolvedImage,
                count: count > 9 ? '10+' : count,
              }}
              onPress={() =>
                router.push({
                  pathname: '/product-details',
                  params: {
                    ...item,
                    image: resolvedImage,
                  },
                })
              }
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  countText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#999',
  },
  seeMore: {
    fontSize: 13,
    color: '#007AFF',
  },
});
