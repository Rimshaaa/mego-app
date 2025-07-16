import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Button } from 'react-native';

const dummyFavourites = [
  {
    id: '1',
    title: 'iPhone 14 Pro Max',
    price: 'Rs 400,000',
    image: '../../assets/images/iphone14.webp',
    condition: 'New',
    points: '10 points',
    location: 'Gulberg Phase 4, Lahore',
    date: '22 Sep',
  },
  {
    id: '2',
    title: 'Wooden Bed',
    price: 'Rs 800,000',
    image: '../../assets/images/react-logo.png',
    condition: 'New',
    points: '10 points',
    location: 'Gulberg Phase 4, Lahore',
    date: '22 Sep',
  },
  // Add more dummy data here
];

const FavouritesScreen = () => {
  const [favourites, setFavourites] = useState(dummyFavourites); // replace with [] to test empty state
//const [favourites, setFavourites] = useState([]);
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.details}>
          {item.condition} · {item.points}
        </Text>
        <Text style={styles.details}>
          {item.location} · {item.date}
        </Text>
      </View>
      <Text style={styles.heart}>❤️</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favourites</Text>

      {favourites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.bigIcon}>👍</Text>
          <Text style={styles.emptyText}>No favourites saved</Text>
          <Text style={styles.emptySub}>
            The iPhone is a sleek, high-performance smartphone by Apple...
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Let’s find some favourites</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={favourites}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
};

export default FavouritesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    position: 'relative',
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    color: '#0057FF',
    fontWeight: 'bold',
  },
  details: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  heart: {
    position: 'absolute',
    top: 8,
    right: 8,
    fontSize: 18,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  bigIcon: {
    fontSize: 60,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  emptySub: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0057FF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
