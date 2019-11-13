import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import GameScore from './GameScore';
import GameProblems from './GameProblems';

export default function MainGame(props) {
  return (
    <View style={styles.outer_container}>
      <View style={styles.inner_container}>
        <Text>Here is ChatGame</Text>
        {/* {console.log("GAME SCORE", props.score)} */}
        <Text>Your Score: {props.score1}</Text>
        <Text>Opponent Score: {props.score2}</Text>
        <Text>id {props.user.id}</Text>
        <Button title="+ point" onPress={() => props.incPoint(1)} />
      </View>
      <View style={styles.inner_container}>
        <GameScore score={props.score} />
      </View>
      <View style={styles.inner_container}>
        <GameProblems score={props.score} incPoint={props.incPoint} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  outer_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50
  },
  inner_container: {}
});

{
  /* <Game score={score} /> */
}
//WHEN ADD GAME COMPONENT TO HOMESCREEN IT DOESNT LOAD!!!
