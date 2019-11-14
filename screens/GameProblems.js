import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import mathProblems from './mathProblems.json';

export default function GameProblems(props) {
  const [allProblems, setAllProblems] = useState([]);
  const [currentProblem, setCurrentProblem] = useState(0);
  const [currentUserAnswer, setCurrentUserAnswer] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setAllProblems(mathProblems.problems);
    setMessage('Submit your answer when you are ready');
  }, []);

  const checkAnswer = answer => {
    if (+answer === allProblems[currentProblem].answer) {
      console.log('YOU ARE CORRECT', answer);
      props.incPoint(1);
      setMessage('Correct answer!!! ✔ ');
      setCurrentProblem(prevState => prevState + 1);
      setCurrentUserAnswer('');
    } else {
      console.log('You are wrong', answer);
      setMessage('Wrong answer, try again ❌');
    }

    console.log(allProblems[currentProblem].problem);
  };

  return (
    <View style={styles.outer_container}>
      <View style={styles.inner_container}>
        <Text>Problem:</Text>
      </View>
      <View style={styles.inner_container}>
        <Text>
          {allProblems[currentProblem] && allProblems[currentProblem].problem}
        </Text>
      </View>
      <View style={styles.inner_container}>
        <TextInput
          value={currentUserAnswer}
          onChangeText={text => setCurrentUserAnswer(text)}
          placeholder="Answer here "
          keyboardType="numbers-and-punctuation"
          returnKeyType="send"
          onSubmitEditing={() => checkAnswer(currentUserAnswer)}
        />
      </View>
      <View style={styles.inner_container}>
        <Button title="Submit" onPress={() => checkAnswer(currentUserAnswer)} />
        <Text>{message}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  outer_container: {
    // flexDirection: 'row',
    // flex: 1,
    // backgroundColor: 'lightgray',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // margin: 20
  },
  inner_container: {
    // flex: 1
  }
});
