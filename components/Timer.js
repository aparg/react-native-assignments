import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TopicDisplayer from './TopicDisplayer';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Interval Set');
    setInterval(() => {
      setCount(oldCount => oldCount + 1);
    }, 1000);
  }, []);

  return (
    <View style={styles.main}>
      <TopicDisplayer value="TIMER" />
      <Text style={styles.content}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#5D89EE',
    height: '100%',
    justifyContent: 'center',
  },
  content: {
    alignSelf: 'center',
    fontSize: 100,
    color: '#fff',
    fontFamily: 'RussoOne-Regular',
  },
});

export default Timer;
