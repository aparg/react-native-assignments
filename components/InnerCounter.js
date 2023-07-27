import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const InnerCounter = ({counter}) => {
  return (
    <View>
      <Text style={styles.content}>Inner Counter: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'LilitaOne-Regular',
    alignSelf: 'center',
  },
});

export default InnerCounter;
