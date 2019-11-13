import React, { useEffect, useState, useRef } from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import io from 'socket.io-client';

import JoinScreen from './JoinScreen';
import MainGame from './MainGame';

export default function HomeScreen() {
  // const [recvMessages, setRecvMessages] = useState([]);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score, setScore] = useState([0, 0, 0, 0, 1, 0, 0, 0, 0]);

  const [hasJoined, setHasJoined] = useState(false);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io('http://172.17.23.185:3001');
    socket.current.on('messageback', user => {
      console.log('in socket emitback, her is score', score);
      console.log('in socket emitback, her is score2', score2);

      console.log('they scoring');
      setScore2(prev => prev + 1);
      setScore(arrLeft(score));
    });
  }, []);

  const joinChat = username => {
    socket.current.emit('join', username);
    setHasJoined(true);
  };

  const arrRight = arr => {
    const newState = arr;
    newState.unshift(0);
    newState.pop();
    return newState;
  };
  const arrLeft = arr => {
    const newState = arr;
    newState.push(0);
    newState.shift();
    return newState;
  };

  const incPoint = id => {
    console.log('TCL: HomeScreen -> id', id);
    //increase point

    console.log('we scored!');
    setScore1(prev => prev + 1);
    setScore(prev => prev + 1);
    setScore(arrRight(score));
    socket.current.emit('message', 'nothing');
  };

  return (
    <View style={{ flex: 1 }}>
      {hasJoined ? (
        <MainGame
          incPoint={incPoint}
          score={score}
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
