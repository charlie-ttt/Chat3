import React, { useState } from 'react';
import {
  View,
  Button,
  TextInput,
  Image,
  Platform,
  KeyboardAvoidingView
} from 'react-native';

export default function JoinScreen({ joinChat }) {
  const [username, setUsername] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        resizeMode="contain"
        style={{ flex: 1 }}
        source={require('../assets/chat-icon.png')}
      />
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <TextInput
          value={username}
          onChangeText={text => setUsername(text)}
          style={{ fontSize: 25, textAlign: 'center' }}
          placeholder="Enter username: "
        />
        <Button title="Join Chat" onPress={() => joinChat(username)} />
      </View>
      {Platform.OS === 'ios' && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
}
