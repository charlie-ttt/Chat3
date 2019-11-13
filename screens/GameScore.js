import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function GameScore(props) {
  const renderStyle = val => {
    if (val === 0) {
      return { backgroundColor: 'gray', width: 20, height: 20 };
    } else if (val === 1) {
      return { backgroundColor: 'darkblue', width: 20, height: 20 };
    }
  };
  return (
    <View style={styles.outer_container}>
      <View style={renderStyle(props.score[0])} />
      <View style={renderStyle(props.score[1])} />
      <View style={renderStyle(props.score[2])} />
      <View style={renderStyle(props.score[3])} />
      <View style={renderStyle(props.score[4])} />
      <View style={renderStyle(props.score[5])} />
      <View style={renderStyle(props.score[6])} />
      <View style={renderStyle(props.score[7])} />
      <View style={renderStyle(props.score[8])} />
    </View>
  );
}
const styles = StyleSheet.create({
  outer_container: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    justifyContent: 'center'
    // flex: 1
  }
});

{
  /* <Game score={score} /> */
}
//WHEN ADD GAME COMPONENT TO HOMESCREEN IT DOESNT LOAD!!!
