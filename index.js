/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import MyStack from './Stack';
import Login from './components/Login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
