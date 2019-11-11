import React, { useEffect, useState, useRef } from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import io from 'socket.io-client';

import JoinScreen from './JoinScreen';
import ChatScreen from './ChatScreen';

export default function HomeScreen() {
  // const [recvMessages, setRecvMessages] = useState([]);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const [hasJoined, setHasJoined] = useState(false);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io('http://192.168.0.5:3001');
    socket.current.on('messageback', user => {
      console.log('user', user);
      console.log('user', +user.userId);

      console.log('they scoring');
      setScore2(prev => prev + 1);
      // }
      // setRecvMessages(prevState => GiftedChat.append(prevState, message));
    });
  }, []);

  // const onSend = messages => {
  //   socket.current.emit('message', messages[0].text);
  //   setRecvMessages(prevState => GiftedChat.append(prevState, messages));
  // };

  const joinChat = username => {
    socket.current.emit('join', username);
    setHasJoined(true);
  };

  const incPoint = id => {
    console.log('TCL: HomeScreen -> id', id);
    //increase point

    console.log('we scored!');
    setScore1(prev => prev + 1);
    socket.current.emit('message', 'hello');
  };

  return (
    <View style={{ flex: 1 }}>
      {hasJoined ? (
        // <GiftedChat
        //   renderUsernameOnMessage
        //   messages={recvMessages}
        //   onSend={messages => onSend(messages)}
        // user={{
        //   _id: 1
        // }}
        // />
        <ChatScreen
          incPoint={incPoint}
          score1={score1}
          score2={score2}
          user={{
            id: 1
          }}
        />
      ) : (
        <JoinScreen joinChat={joinChat} />
      )}

      {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
}
