import React from 'react';
import {ScrollView, Text, StyleSheet, View, SafeAreaView} from 'react-native';
import TopicDisplayer from './TopicDisplayer';

const ItemList = () => {
  const itemArray = [
    'Naruto Shippuden',
    'Bleach',
    'Hunter X Hunter',
    'Spy X Family',
    "Hell's Paradise",
    'Death Note',
    'Akame Ga Kill',
    'One Piece',
    'Naruto Shippuden',
    'Bleach',
    'Hunter X Hunter',
    'Spy X Family',
    "Hell's Paradise",
    'Death Note',
    'Akame Ga Kill',
    'One Piece',
    'Naruto Shippuden',
    'Bleach',
    'Hunter X Hunter',
    'Spy X Family',
    "Hell's Paradise",
    'Death Note',
    'Akame Ga Kill',
    'One Piece',
    'Naruto Shippuden',
    'Bleach',
    'Hunter X Hunter',
    'Spy X Family',
    "Hell's Paradise",
    'Death Note',
    'Akame Ga Kill',
    'One Piece',
    'Naruto Shippuden',
    'Bleach',
    'Hunter X Hunter',
    'Spy X Family',
    "Hell's Paradise",
    'Death Note',
    'Akame Ga Kill',
    'One Piece',
    'Naruto Shippuden',
    'Bleach',
    'Hunter X Hunter',
    'Spy X Family',
    "Hell's Paradise",
    'Death Note',
    'Akame Ga Kill',
    'One Piece',
  ];
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <TopicDisplayer value="ScrollView" />
        <ScrollView>
          {itemArray.map((item, idx) => {
            return (
              <View key={idx}>
                <Text style={styles.content}>{item}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#5D89EE',
  },
  content: {
    fontFamily: 'RussoOne-Regular',
    color: '#fff',
    alignSelf: 'center',
  },
});

export default ItemList;
