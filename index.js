/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Drawer from './Drawer';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Drawer);
