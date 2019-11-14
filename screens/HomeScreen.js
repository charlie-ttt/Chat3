import React, { useEffect, useState, useRef } from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import io from 'socket.io-client';

import JoinScreen from './JoinScreen';
import MainGame from './MainGame';

export default function HomeScreen() {
  // const [recvMessages, setRecvMessages] = useState([]);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const [hasJoined, setHasJoined] = useState(false);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io('http://192.168.0.5:3001');
    socket.current.on('messageback', user => {
      if (score2 <= 8) {
        console.log('they scoring');
        setScore2(prev => prev + 1);
      }
    });
  }, []);

  const joinGame = username => {
    socket.current.emit('join', username);
    setHasJoined(true);
  };

  const incPoint = id => {
    if (score1 <= 8) {
      console.log('we scored!');
      setScore1(prev => prev + 1);
    }

    socket.current.emit('message', 'nothing');
  };

  return (
    <View style={{ flex: 1 }}>
      {hasJoined ? (
        <MainGame
          incPoint={incPoint}
          score1={score1}
          score2={score2}
          user={{
            id: 1
          }}
        />
      ) : (
        <JoinScreen joinGame={joinGame} />
      )}

      {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
}
