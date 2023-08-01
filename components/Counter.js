import {View, Text, Button, StyleSheet, Alert, Pressable} from 'react-native';
import {useState} from 'react';
import InnerCounter from './InnerCounter';
import TopicDisplayer from './TopicDisplayer';

function Counter() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(oldCounter => oldCounter + 1);
  }

  function decrementCounter() {
    if (counter > 0) setCounter(counter - 1);
    else decrementWarning();
  }

  function decrementWarning() {
    Alert.alert(
      "Can't Decrement",
      'Decrement Limit Reached',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Clicked'),
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {
          console.log('Dismissed');
        },
      },
    );
  }

  return (
    <View style={styles.main}>
      <TopicDisplayer value="COUNTER" />
      <Text style={styles.number}>{counter}</Text>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#587EDE' : '#fff',
          },
          styles.btn,
        ]}
        onPress={incrementCounter}
        title="Click to increment count">
        <Text style={styles.btnTxt}>Increment Counter</Text>
      </Pressable>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#587EDE' : '#fff',
          },
          styles.btn,
        ]}
        onPress={decrementCounter}
        title="Click to decrement count">
        <Text style={styles.btnTxt}>Decrement Counter</Text>
      </Pressable>
      <InnerCounter counter={counter} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#5D89EE',
    height: '100%',
    justifyContent: 'center',
  },
  number: {
    fontSize: 100,
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'RussoOne-Regular',
  },
  btn: {
    width: 150,
    padding: 5,
    margin: 10,
    borderRadius: 10,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  btnTxt: {
    color: '#000',
    fontFamily: 'RussoOne-Regular',
  },
});

export default Counter;
