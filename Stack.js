// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Timer from './components/Timer';
import Counter from './components/Counter';
import ItemList from './components/ItemList';
import FlatItemsList from './components/FlatItemsList';
import FetchData from './components/FetchData';
import AsyncStorageKeyValue from './components/AsyncStorageKeyValue';
import Dimension from './components/Dimension';
import ActivityIndication from './components/ActivityIndication';
import Drawer from './Drawer';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Drawer"
          component={Drawer}
          // options={{title: 'Dimension'}}
        />
        <Stack.Screen
          name="Dimension"
          component={Dimension}
          // options={{title: 'Dimension'}}
        />

        <Stack.Screen
          name="FetchData"
          component={FetchData}
          // options={{title: 'FetchData'}}
        />

        <Stack.Screen
          name="Counter"
          component={Counter}
          // options={{title: 'Counter'}}
        />

        <Stack.Screen
          name="Timer"
          component={Timer}
          // options={{title: 'Timer'}}
        />

        <Stack.Screen
          name="ItemList"
          component={ItemList}
          // options={{title: 'Counter'}}
        />

        <Stack.Screen
          name="FlatItemsList"
          component={FlatItemsList}
          // options={{title: 'FlatItemsList'}}
        />

        <Stack.Screen
          name="AsyncStorageKeyValue"
          component={AsyncStorageKeyValue}
          // options={{title: 'AsyncStorageKeyValue'}}
        />

        <Stack.Screen
          name="ActivityIndicator"
          component={ActivityIndication}
          // options={{title: 'ActivityIndication'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
