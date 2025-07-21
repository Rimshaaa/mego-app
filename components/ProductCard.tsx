import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProductCard({ item, onPress }) {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Image with heart icon */}
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.image} />
        <TouchableOpacity onPress={toggleLike} style={styles.heartIcon}>
          <Ionicons
            name={liked ? 'heart' : 'heart-outline'}
            size={18}
            color={liked ? '#e63946' : '#333'}
          />
        </TouchableOpacity>
      </View>

      {/* Title & Price */}
      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.price}>Rs {item.price}</Text>

      {/* Meta Info */}
      <View style={styles.metaRow}>
        <Text style={styles.metaPill}>{item.condition}</Text>
        <Text style={styles.metaPill}>{item.rating}</Text>
        <Text style={styles.metaPill}>{item.points} points</Text>
      </View>

      <View style={styles.metaBottom}>
        <Text style={styles.metaRightText}>{item.date}</Text>
        <Text style={styles.metaRightText}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 190,
    marginRight: 14,
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heartIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
    color: '#000',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 2,
    color: '#000',
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
    gap: 6,
  },
  metaPill: {
    backgroundColor: '#f2f2f2',
    fontSize: 11,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    color: '#444',
  },
  metaBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  metaRightText: {
    fontSize: 11,
    color: '#777',
  },
});
