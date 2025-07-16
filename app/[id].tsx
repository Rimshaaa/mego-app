import { useLocalSearchParams } from 'expo-router';
import { View, Text, TextInput, Button, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';

export default function ChatScreen() {
  const { name } = useLocalSearchParams();
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello!', fromMe: false },
    { id: '2', text: 'Hi there!', fromMe: true },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages((prev) => [...prev, { id: Date.now().toString(), text: input, fromMe: true }]);
    setInput('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90}
    >
      {/* ✅ Header with Contact Name */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{name}</Text>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.bubble, item.fromMe ? styles.fromMe : styles.fromOther]}>
            <Text>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.chatContainer}
      />

      <View style={styles.inputRow}>
        <TextInput
          value={input}
          onChangeText={setInput}
          style={styles.input}
          placeholder="Type a message"
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  chatContainer: {
    padding: 16,
    flexGrow: 1,
  },
  bubble: {
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    maxWidth: '80%',
  },
  fromMe: {
    backgroundColor: '#d1e7dd',
    alignSelf: 'flex-end',
  },
  fromOther: {
    backgroundColor: '#f8d7da',
    alignSelf: 'flex-start',
  },
  inputRow: {
    flexDirection: 'row',
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    height: 40,
  },
});
