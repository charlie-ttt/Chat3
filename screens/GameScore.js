import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function GameScore(props) {
  const renderYourStyle = val => {
    if (val >= props.score1) {
      return styles.noScore;
    } else {
      return styles.yourValidScore;
    }
  };
  const renderOpponentStyle = val => {
    if (val >= props.score2) {
      return styles.noScore;
    } else {
      return styles.opponentValidScore;
    }
  };
  return (
    <View style={styles.outer_container}>
      <View style={styles.eachScore}>
        <View style={renderYourStyle(0)} />
        <View style={renderYourStyle(1)} />
        <View style={renderYourStyle(2)} />
        <View style={renderYourStyle(3)} />
        <View style={renderYourStyle(4)} />
        <View style={renderYourStyle(5)} />
        <View style={renderYourStyle(6)} />
        <View style={renderYourStyle(7)} />
      </View>
      <View style={styles.eachScore}>
        <View style={renderOpponentStyle(0)} />
        <View style={renderOpponentStyle(1)} />
        <View style={renderOpponentStyle(2)} />
        <View style={renderOpponentStyle(3)} />
        <View style={renderOpponentStyle(4)} />
        <View style={renderOpponentStyle(5)} />
        <View style={renderOpponentStyle(6)} />
        <View style={renderOpponentStyle(7)} />
      </View>

      {/* <View style={renderStyle(props.score[1])} />
      <View style={renderStyle(props.score[2])} />
      <View style={renderStyle(props.score[3])} />
      <View style={renderStyle(props.score[4])} />
      <View style={renderStyle(props.score[5])} />
      <View style={renderStyle(props.score[6])} />
      <View style={renderStyle(props.score[7])} />
      <View style={renderStyle(props.score[8])} /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  outer_container: {
    flexDirection: 'column',
    backgroundColor: 'lightgray',
    justifyContent: 'center'
    // flex: 1
  },
  eachScore: {
    flexDirection: 'row',
    justifyContent: 'center'
    // flex: 1
  },
  noScore: {
    backgroundColor: 'gray',
    width: 20,
    height: 20
  },
  yourValidScore: {
    backgroundColor: 'darkgreen',
    width: 20,
    height: 20
  },
  opponentValidScore: {
    backgroundColor: 'darkred',
    width: 20,
    height: 20
  }
});
