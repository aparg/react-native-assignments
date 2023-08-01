import * as React from 'react';
import Main from './Main';
import Timer from './components/Timer';
import Counter from './components/Counter';
import ItemList from './components/ItemList';
import FlatItemsList from './components/FlatItemsList';
import FetchData from './components/FetchData';
import AsyncStorageKeyValue from './components/AsyncStorageKeyValue';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dimension from './components/Dimension';
import ActivityIndication from './components/ActivityIndication';
import NewTab from './components/NewTab';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeScreen" component={Main} />

      <Tab.Screen name="NewTab" component={NewTab} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
