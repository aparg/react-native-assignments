import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TopicDisplayer = ({value}) => {
  return <Text style={styles.topic}>{value}</Text>;
};

const styles = StyleSheet.create({
  topic: {
    alignSelf: 'center',
    fontSize: 35,
    fontFamily: 'LilitaOne-Regular',
    color: '#fff',
  },
});
export default TopicDisplayer;
