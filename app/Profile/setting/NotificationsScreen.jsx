import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const NotificationsScreen = () => {
  const [recommendations, setRecommendations] = useState(true);
  const [specialOffers, setSpecialOffers] = useState(true);

  return (
    <View style={styles.container}>
      <Text>Activate Notifications</Text>
      <Text>Recommendations</Text>
      <Switch value={recommendations} onValueChange={setRecommendations} />
      <Text>Special communications & offers</Text>
      <Switch value={specialOffers} onValueChange={setSpecialOffers} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 }
});

export default NotificationsScreen;