import * as React from 'react';
import Main from './Main';
import Timer from './components/Timer';
import Counter from './components/Counter';
import ItemList from './components/ItemList';
import FlatItemsList from './components/FlatItemsList';
import FetchData from './components/FetchData';
import AsyncStorageKeyValue from './components/AsyncStorageKeyValue';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dimension from './components/Dimension';
import ActivityIndication from './components/ActivityIndication';
import TabNavigator from './TabNavigator';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home"
      useLegacyImplementation={false}>
      <Drawer.Screen
        options={{headerShown: true}}
        name="Home"
        component={TabNavigator}
        // options={{title: 'Dimension'}}
      />
      {/* <Drawer.Screen
        options={{title: 'HomeScreen', headerShown: true}}
        name="HomeScreen"
        component={Main}
      /> */}

      <Drawer.Screen
        options={{swipeEnabled: false}}
        name="Dimension"
        component={Dimension}
        // options={{title: 'Dimension'}}
      />

      <Drawer.Screen
        options={{swipeEnabled: false}}
        name="FetchData"
        component={FetchData}
        // options={{title: 'FetchData'}}
      />

      <Drawer.Screen
        options={{swipeEnabled: false}}
        name="Counter"
        component={Counter}
        // options={{title: 'Counter'}}
      />

      <Drawer.Screen
        options={{swipeEnabled: false}}
        name="Timer"
        component={Timer}
        // options={{title: 'Timer'}}
      />

      <Drawer.Screen
        options={{swipeEnabled: false}}
        name="ItemList"
        component={ItemList}
        // options={{title: 'Counter'}}
      />

      <Drawer.Screen
        options={{swipeEnabled: false}}
        name="FlatItemsList"
        component={FlatItemsList}
        // options={{title: 'FlatItemsList'}}
      />

      <Drawer.Screen
        options={{swipeEnabled: false}}
        name="AsyncStorageKeyValue"
        component={AsyncStorageKeyValue}
        // options={{title: 'AsyncStorageKeyValue'}}
      />

      <Drawer.Screen
        options={{swipeEnabled: false}}
        name="ActivityIndicator"
        component={ActivityIndication}
        // options={{title: 'ActivityIndication'}}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
