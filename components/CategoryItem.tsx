// components/CategoryItem.js
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function CategoryItem({ icon, label }) {
  if (!icon || !label) return null;

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image source={icon} style={styles.image} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 18,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  label: {
    fontSize: 13,
    marginTop: 8,
    textAlign: 'center',
    color: '#111',
    fontWeight: '600',
  },
});
