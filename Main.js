/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
  FlatList,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TopicDisplayer from './components/TopicDisplayer';

function Main({navigation}) {
  return (
    <ScrollView style={styles.wrapView}>
      <Text style={styles.hello}>Hello World!</Text>
      <Pressable
        style={styles.box}
        onPress={() => navigation.navigate('Dimension')}>
        <TopicDisplayer value="DIMENSIONS" />
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('ActivityIndicator')}
        style={styles.box}>
        <TopicDisplayer value="ACTIVITY INDICATOR" />
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Counter')}
        style={styles.box}>
        <TopicDisplayer value="COUNTER" />
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Timer')}
        style={styles.box}>
        <TopicDisplayer value="TIMER" />
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('ItemList')}
        style={styles.box}>
        <TopicDisplayer value="SCROLLVIEW" />
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('FlatItemsList')}
        style={styles.box}>
        <TopicDisplayer value="FLATLIST" />
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('FetchData')}
        style={styles.box}>
        <TopicDisplayer value="FETCHDATA" />
      </Pressable>

      <Pressable
        style={styles.box}
        onPress={() => navigation.navigate('AsyncStorageKeyValue')}>
        <TopicDisplayer value="ASYNC/STORAGE" />
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapView: {
    backgroundColor: '#fff',
    color: '#5D89EE',
    height: '100%',
  },
  hello: {
    color: '#5D89EE',
    fontSize: 50,
    alignSelf: 'center',
    fontFamily: 'RussoOne-Regular',
  },
  topic: {
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: 'LilitaOne-Regular',
    color: '#fff',
  },
  content: {
    fontSize: 20,
    color: '#fff',
  },
  box: {
    backgroundColor: '#5D89EE',
    padding: 8,
    margin: 5,
    borderRadius: 20,
  },
});

export default Main;
