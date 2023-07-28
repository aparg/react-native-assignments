import {useState} from 'react';
import {Pressable} from 'react-native';
import {View, Text, TextInput, Alert} from 'react-native';
import MyDrawer from '../Drawer';
import MyStack from '../Stack';

const Login = () => {
  const [email, onEmailChange] = useState('');
  const [password, onPasswordChange] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = () => {
    if (email === 'xyz@gmail.com' && password === 'xyz') {
      setLoggedIn(true);
    } else {
      alertWrongPswd();
    }
  };

  let alertWrongPswd = () => {
    Alert.alert(
      'Could not log in',
      "Username and password didn't match",
      [
        {
          text: 'OK',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  return loggedIn ? (
    <MyStack />
  ) : (
    <View style={styles.main}>
      <Text style={styles.title}>Form</Text>
      <Text style={styles.hint}>(Email:xyz@gmail.com Password:xyz)</Text>
      <TextInput
        style={styles.inputTxt}
        value={email}
        onChangeText={onEmailChange}
        placeholder="Email"></TextInput>
      <TextInput
        style={styles.inputTxt}
        value={password}
        onChangeText={onPasswordChange}
        placeholder="Password"></TextInput>
      <Pressable
        onPress={handleSubmit}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#587EDE' : '#fff',
          },
          styles.btn,
        ]}>
        <Text style={styles.btnTxt}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = {
  main: {
    backgroundColor: '#5D89EE',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'RussoOne-Regular',
    fontSize: 50,
    color: '#fff',
    alignSelf: 'center',
  },
  hint: {
    fontFamily: 'RussoOne-Regular',
    fontSize: 10,
    color: '#fff',
    alignSelf: 'center',
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

export default Login;
