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
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HomeScreen"
        useLegacyImplementation={false}>
        <Drawer.Screen
          name="HomeScreen"
          component={Main}
          // options={{title: 'HomeScreen'}}
        />
        <Drawer.Screen
          name="Dimension"
          component={Dimension}
          // options={{title: 'Dimension'}}
        />

        <Drawer.Screen
          name="FetchData"
          component={FetchData}
          // options={{title: 'FetchData'}}
        />

        <Drawer.Screen
          name="Counter"
          component={Counter}
          // options={{title: 'Counter'}}
        />

        <Drawer.Screen
          name="Timer"
          component={Timer}
          // options={{title: 'Timer'}}
        />

        <Drawer.Screen
          name="ItemList"
          component={ItemList}
          // options={{title: 'Counter'}}
        />

        <Drawer.Screen
          name="FlatItemsList"
          component={FlatItemsList}
          // options={{title: 'FlatItemsList'}}
        />

        <Drawer.Screen
          name="AsyncStorageKeyValue"
          component={AsyncStorageKeyValue}
          // options={{title: 'AsyncStorageKeyValue'}}
        />

        <Drawer.Screen
          name="ActivityIndicator"
          component={ActivityIndication}
          // options={{title: 'ActivityIndication'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MyDrawer;
