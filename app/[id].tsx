import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text, TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const offers = ['92,000', '87,400', '82,800', '78,200', '75,500'];


const ChatScreen = () => {
  const router = useRouter();
  const { name = 'User', avatar , price = '0' } = useLocalSearchParams();
  const [message, setMessage] = useState('');
  const [selectedOffer, setSelectedOffer] = useState('92,000');
  const [activeTab, setActiveTab] = useState<'question' | 'offer'>('question');
  

  const messages = [
    { text: 'Hi, is this available?', type: 'received' },
    { text: 'Yes, it is!', type: 'sent' },
    { text: 'Can you lower the price?', type: 'received' },
  ];

  const renderMessage = ({ item }: any) => (
    <View
      style={[styles.messageBubble, item.type === 'sent' ? styles.sentBubble : styles.receivedBubble]}
    >
      <Text style={item.type === 'sent' ? styles.sentText : styles.receivedText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <TouchableOpacity style={styles.backProfile} onPress={() => router.back()}>
  <Feather name="arrow-left" size={22} />
  <Image source={{ uri: avatar }} style={styles.profileImage} />
</TouchableOpacity>
        <Text style={styles.userName}>{name}</Text>
        <TouchableOpacity>
          <Feather name="phone" size={24} style={{ fontWeight: 'bold' }} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 12 }}
      />

      {/* Tabs moved below chat */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('question')} style={styles.tabButton}>
          <View style={styles.tabRow}>
            <FontAwesome5 name="user-friends" size={14} />
            <Text style={[styles.tabText, activeTab === 'question' && styles.activeTabText]}> Question </Text>
          </View>
          {activeTab === 'question' && <View style={styles.activeUnderline} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('offer')} style={styles.tabButton}>
          <View style={styles.tabRow}>
            <FontAwesome5 name="handshake" size={14} />
            <Text style={[styles.tabText, activeTab === 'offer' && styles.activeTabText]}> Make an offer </Text>
          </View>
          {activeTab === 'offer' && <View style={styles.activeUnderline} />}
        </TouchableOpacity>
      </View>

      {activeTab === 'question' && (
        <View style={styles.quickReplies}>
          {['How are you ?', "What's the final price ?", 'Is it available ?'].map((q, index) => (
            <TouchableOpacity key={index} style={styles.questionButton}>
              <Text style={styles.questionText}>{q}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {activeTab === 'offer' && (
        <>
          <View style={styles.suggestions}>
            {offers.map((offer, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedOffer(offer)}
                style={[styles.offerPill, selectedOffer === offer && styles.activeOfferPill]}
              >
                <Text style={selectedOffer === offer ? styles.activeOfferText : styles.offerText}>
                  {offer}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.priceText}>RS {selectedOffer}</Text>

          <View style={styles.recommendationRow}>
            <View style={styles.recommendationBox}>
              <Feather name="thumbs-up" size={16} color="#003087" />
              <View style={{ marginLeft: 6 }}>
                <Text style={styles.recLabel}>Very good offer !</Text>
                <Text style={styles.recSub}>High chances of seller reply</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.sendOfferButton}>
              <Text style={styles.sendOfferText}>Send Offer</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      <View style={styles.inputRow}>
        <TouchableOpacity>
          <Feather name="paperclip" size={22} />
        </TouchableOpacity>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Final Price"
          style={styles.input}
        />
        <TouchableOpacity>
          <MaterialIcons name="keyboard-voice" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton}>
          <Feather name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40 },
  header: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', paddingHorizontal: 16, marginBottom: 10,
  },
  backProfile: {
    flexDirection: 'row', alignItems: 'center', gap: 8,
  },
  profileImage: {
    width: 30, height: 30, borderRadius: 15,
  },
  userName: {
    fontSize: 16, fontWeight: 'bold', flex: 1, marginLeft: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingTop: 8
  },
  tabButton: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 6,
  },
  tabRow: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
  },
  tabText: {
    fontSize: 14,
    color: '#000',
  },
  activeTabText: {
    fontWeight: 'bold',
  },
  activeUnderline: {
    marginTop: 4,
    height: 2,
    backgroundColor: '#003087',
    width: '100%',
  },
  quickReplies: {
    flexDirection: 'row', justifyContent: 'space-around',
    marginBottom: 10, paddingHorizontal: 10,
  },
  questionButton: {
    borderWidth: 1, borderColor: '#003087',
    borderRadius: 6, paddingHorizontal: 8, paddingVertical: 4,
  },
  questionText: {
    color: '#000',
  },
  messageBubble: {
    padding: 10,
    marginVertical: 4,
    maxWidth: '70%',
    borderRadius: 12,
  },
  sentBubble: {
    backgroundColor: '#003087',
    alignSelf: 'flex-end',
  },
  receivedBubble: {
    backgroundColor: '#eee',
    alignSelf: 'flex-start',
  },
  sentText: {
    color: '#fff',
  },
  receivedText: {
    color: '#000',
  },
  suggestions: {
    flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',
    marginBottom: 10, paddingHorizontal: 10,
  },
  offerPill: {
    borderWidth: 1, borderColor: '#003087', borderRadius: 8,
    paddingVertical: 6, paddingHorizontal: 12, margin: 4,
  },
  activeOfferPill: {
    backgroundColor: '#003087',
  },
  offerText: {
    color: '#003087',
  },
  activeOfferText: {
    color: '#fff', fontWeight: 'bold',
  },
  priceText: {
    fontSize: 18, textAlign: 'left', marginBottom: 6,marginLeft:20
  },
  recommendationRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 16, marginBottom: 10,
  },
  recommendationBox: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#e2eaff',
    padding: 10, borderRadius: 10, flex: 1,
  },
  recLabel: {
    color: '#003087', fontWeight: 'bold',
  },
  recSub: {
    color: '#003087', fontSize: 12,
  },
  sendOfferButton: {
    backgroundColor: '#003087', paddingVertical: 12, paddingHorizontal: 16,
    borderRadius: 10, marginLeft: 10,
  },
  sendOfferText: {
    color: '#fff', fontWeight: 'bold',
  },
  inputRow: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 12, gap: 10, paddingBottom: 12,
  },
  input: {
    flex: 1, borderRadius: 20, backgroundColor: '#f2f2f2',
    paddingHorizontal: 12, paddingVertical: 8,
  },
  sendButton: {
    backgroundColor: '#003087', padding: 10, borderRadius: 100,
  },
});
