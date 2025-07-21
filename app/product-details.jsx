import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  ScrollView, StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const sampleImages = [
  require('../assets/images/iphone.jpg'),
  require('../assets/images/iphone1.jpg'),
  require('../assets/images/iphone11.jpeg'),
];

const RelatedAds = [
  {
    title: 'Iphone 14 Pro Max',
    price: 'Rs 400,000',
    condition: 'New',
    rating: '10/10',
    points: '10 points',
    date: '22 Sep',
    location: 'Gulberg Phase 4, Lahore',
    image: require('../assets/images/iphone.jpg'),
  },
  {
    title: 'Iphone 12 Pro Max',
    price: 'Rs 200,000',
    condition: 'Used',
    rating: '08/10',
    points: '10 points',
    date: '22 Sep',
    location: 'Gulberg Phase 4, Lahore',
    image: require('../assets/images/iphone1.jpg'),
  },
  {
    title: 'Iphone 14 Pro',
    price: 'Rs 400,000',
    condition: 'Used',
    rating: '08/10',
    points: '10 points',
    date: '22 Sep',
    location: 'Gulberg Phase 4, Lahore',
    image: require('../assets/images/iphone12.png'),
  }
];

export default function ProductDetailScreen() {
  const params = useLocalSearchParams();
  const [imageIndex, setImageIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const nextImage = () => setImageIndex((prev) => (prev + 1) % sampleImages.length);
  const prevImage = () => setImageIndex((prev) => (prev - 1 + sampleImages.length) % sampleImages.length);

  return (
    <ScrollView style={styles.container}>
      {/* Main Image Slider */}
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.navBtn} onPress={prevImage}>
          <Text style={styles.navBtnText}>{'<'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={sampleImages[imageIndex]} style={styles.mainImage} resizeMode="cover" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navBtnRight} onPress={nextImage}>
          <Text style={styles.navBtnText}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      {/* Gallery Thumbnails */}
      <View style={styles.galleryRow}>
        {sampleImages.map((img, idx) => (
          <TouchableOpacity key={idx} onPress={() => setImageIndex(idx)}>
            <Image source={img} style={[
              styles.thumbnail, imageIndex === idx && styles.activeThumb
            ]} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal Pop-up Image */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <TouchableOpacity style={styles.modalBackdrop} onPress={() => setModalVisible(false)}>
          <Image source={sampleImages[imageIndex]} style={styles.fullscreenImage} resizeMode="contain" />
        </TouchableOpacity>
      </Modal>

      {/* Title and Meta */}
      <View style={styles.metaRow}>
        <View>
          <Text style={styles.price}>RS 450,000</Text>
          <Text style={styles.title}>Macbook Air</Text>
          <Text style={styles.location}>Namak Mandi, Peshawar</Text>
        </View>
        <View style={styles.rightMeta}>
          <Text style={styles.points}>48 Points</Text>
          <Text style={styles.date}>21/02/2025</Text>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.sectionHeading}>Description</Text>
      <Text style={styles.description}>
        Selling my macbook which is 512GB in storage with charger and box{'\n'}
        one hand use no scratches and dents condition 10/10{'\n'}
        battery backup is 4 hour plus
      </Text>

      {/* Details Section */}
      <Text style={styles.sectionHeading}>Details</Text>
      <View style={styles.detailRow}><Text style={styles.detailKey}>Brand</Text><Text style={styles.detailVal}>Macbook Air</Text></View>
      <View style={styles.detailRow}><Text style={styles.detailKey}>Model</Text><Text style={styles.detailVal}>2005</Text></View>
      <View style={styles.detailRow}><Text style={styles.detailKey}>Condition</Text><Text style={styles.detailVal}>Two Scratch on back 10/8</Text></View>
      <View style={styles.detailRow}><Text style={styles.detailKey}>Is Deliverable ?</Text><Text style={styles.detailVal}>Yes, All over the Pakistan</Text></View>
      <View style={styles.detailRow}><Text style={styles.detailKey}>Operating System</Text><Text style={styles.detailVal}>Macintosh</Text></View>

      {/* Seller Info */}
      <Text style={styles.sectionHeading}>Listed By</Text>
      <View style={styles.sellerRow}>
        <Image source={require('../assets/images/person.jpg')} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.sellerName}>siddiq akbar shah</Text>
          <Text style={styles.sellerSince}>Member since Aug 2020</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity><Text style={styles.profileLink}>See Profile</Text></TouchableOpacity>
          <Image source={require('../assets/icons/whatsapp.png')} style={styles.whatsappIcon} />
        </View>
      </View>

      {/* Related Ads */}
      <Text style={styles.sectionHeading}>Related Ads</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={RelatedAds}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.relatedCard}>
            <Image source={item.image} style={styles.relatedImage} />
            <Text style={styles.relatedTitle}>{item.title}</Text>
            <Text style={styles.relatedPrice}>{item.price}</Text>
            <View style={styles.metaPillRow}>
              <Text style={styles.metaPill}>{item.condition}</Text>
              <Text style={styles.metaPill}>{item.rating}</Text>
              <Text style={styles.metaPill}>{item.points}</Text>
            </View>
            <Text style={styles.relatedLocation}>{item.location}</Text>
            <Text style={styles.relatedDate}>{item.date}</Text>
          </View>
        )}
      />

      {/* Action Buttons */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.actionBtn}><Feather name="phone" size={18} color="#007AFF" /><Text style={styles.actionText}>Call</Text></TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}><Feather name="message-square" size={18} color="#007AFF" /><Text style={styles.actionText}>SMS</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, styles.chatBtn]}><Feather name="message-circle" size={18} color="#fff" /><Text style={[styles.actionText, { color: '#fff' }]}>Chat</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  imageContainer: { height: 250, position: 'relative' },
  mainImage: { width: '100%', height: '100%' },
  navBtn: { position: 'absolute', top: '45%', left: 10, zIndex: 1, backgroundColor: '#fff', padding: 5, borderRadius: 20 },
  navBtnRight: { position: 'absolute', top: '45%', right: 10, zIndex: 1, backgroundColor: '#fff', padding: 5, borderRadius: 20 },
  navBtnText: { fontSize: 18, fontWeight: 'bold' },
  galleryRow: { flexDirection: 'row', padding: 10, gap: 8 },
  thumbnail: { width: 50, height: 50, borderRadius: 4, borderWidth: 1, borderColor: '#ddd' },
  activeThumb: { borderColor: '#007AFF' },
  modalBackdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.9)', justifyContent: 'center', alignItems: 'center' },
  fullscreenImage: { width: '90%', height: '70%' },
  price: { fontSize: 20, fontWeight: 'bold', color: '#000' },
  title: { fontSize: 16, fontWeight: '500', color: '#333' },
  location: { color: '#777', marginTop: 2 },
  points: { backgroundColor: '#FFE500', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6, fontWeight: 'bold' },
  date: { fontSize: 12, color: '#999', marginTop: 2 },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, alignItems: 'center' },
  rightMeta: { alignItems: 'flex-end' },
  sectionHeading: { fontSize: 16, fontWeight: 'bold', color: '#000', paddingHorizontal: 16, marginTop: 20 },
  description: { paddingHorizontal: 16, color: '#333', lineHeight: 22, marginTop: 8 },
  detailRow: { backgroundColor: '#f2f2f2', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 26, paddingVertical: 10, borderBottomWidth: 1, marginLeft:6, marginRight:6, marginBottom:6, borderColor: '#eee' },
  detailKey: { color: '#444', fontWeight: '500' },
  detailVal: { color: '#000', fontWeight: 'bold' },
  sellerRow: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  sellerName: { fontWeight: 'bold', color: '#000' },
  sellerSince: { fontSize: 12, color: '#888' },
  profileLink: { color: '#007AFF', fontWeight: '500', fontSize: 13 },
  whatsappIcon: { width: 28, height: 28, marginTop: 4 },
  relatedCard: { width: 150, marginLeft: 16, backgroundColor: '#fff' },
  relatedImage: { width: 150, height: 150, borderRadius: 8 },
  relatedTitle: { fontWeight: 'bold', marginTop: 4 },
  relatedPrice: { color: '#000' },
  metaPillRow: { flexDirection: 'row', gap: 6, marginVertical: 4 },
  metaPill: { backgroundColor: '#eee', paddingHorizontal: 6, paddingVertical: 2, fontSize: 11, borderRadius: 4 },
  relatedLocation: { fontSize: 12, color: '#666' },
  relatedDate: { fontSize: 11, color: '#aaa' },
  actionRow: { flexDirection: 'row', justifyContent: 'space-around', padding: 16 },
  actionBtn: { flexDirection: 'row', borderColor: '#007AFF', borderWidth: 1, borderRadius: 8, padding: 10, alignItems: 'center', gap: 6 },
  actionText: { color: '#007AFF', fontWeight: '500' },
  chatBtn: { backgroundColor: '#007AFF', borderColor: '#007AFF' },
});
