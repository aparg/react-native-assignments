import {Pressable, ScrollView} from 'react-native';
import {DrawerLayoutAndroid} from 'react-native';
import TopicDisplayer from './TopicDisplayer';
import {useRef} from 'react';

const NavigationDrawer = () => {
  const drawer = useRef(null);
  const navigationView = () => (
    <ScrollView>
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
        <TopicDisplayer value="ScrollView" />
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
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={250}
      drawerPosition="left"
      renderNavigationView={navigationView}></DrawerLayoutAndroid>
  );
};

export default NavigationDrawer;
