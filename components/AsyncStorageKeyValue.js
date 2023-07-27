import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput, View, Text, Pressable} from 'react-native';
import TopicDisplayer from './TopicDisplayer';

const AsyncStorageKeyValue = () => {
  const [value, setValue] = useState('');
  const [text, onChangeText] = useState('');
  const store = async text => {
    try {
      await AsyncStorage.setItem('KeyValue', text);
    } catch (err) {
      console.log(err);
    }
  };

  const retrieve = async () => {
    try {
      const value = await AsyncStorage.getItem('KeyValue');
      setValue(value);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.main}>
      <TopicDisplayer value="ASYNC/STORAGE" />
      <TextInput
        value={text}
        onChangeText={onChangeText}
        style={styles.inputTxt}
        placeholder="Type data to be stored"
      />
      <Pressable
        onPress={() => store(text)}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#587EDE' : '#fff',
          },
          styles.btn,
        ]}>
        <Text style={styles.btnTxt}>Store Value</Text>
      </Pressable>

      <Pressable
        onPress={retrieve}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#587EDE' : '#fff',
          },
          styles.btn,
        ]}>
        <Text style={styles.btnTxt}>Retrieve value</Text>
      </Pressable>
      <View style={styles.displayerWrapper}>
        <Text style={styles.displayer}>{value}</Text>
      </View>
    </View>
  );
};

const styles = {
  main: {
    backgroundColor: '#5D89EE',
    height: '100%',
    justifyContent: 'center',
  },
  btn: {
    width: 200,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  btnTxt: {
    color: '#587EDE',
    fontFamily: 'RussoOne-Regular',
  },
  inputTxt: {
    backgroundColor: '#fff',
    width: 300,
    alignSelf: 'center',
    margin: 10,
  },
  displayer: {
    color: '#fff',
    alignSelf: 'center',
  },
  displayerWrapper: {
    padding: 5,
    backgroundColor: '#587EDE',
    borderRadius: 10,
  },
};

export default AsyncStorageKeyValue;
