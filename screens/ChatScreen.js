import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function ChatScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Here is ChatGame</Text>
      <Text>Your Score: {props.score1}</Text>
      <Text>Opponent Score: {props.score2}</Text>
      <Text>id {props.user.id}</Text>

      <Button title="+ point" onPress={() => props.incPoint(1)} />
    </View>
  );
}
