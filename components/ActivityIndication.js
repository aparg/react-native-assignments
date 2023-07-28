import {ActivityIndicator, StyleSheet, View} from 'react-native';

const ActivityIndication = () => {
  return (
    <View style={styles.main}>
      <ActivityIndicator size="large" color={'white'} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#5D89EE',
    justifyContent: 'center',
  },
});

export default ActivityIndication;
