import {View, Text, Button, StyleSheet, Alert, Pressable} from 'react-native';
import TopicDisplayer from './TopicDisplayer';

function NewTab() {
  return (
    <View style={styles.main}>
      <TopicDisplayer value="NEWTAB" />
    </View>
  );
}

styles = StyleSheet.create({
  main: {
    backgroundColor: '#5D89EE',
    height: '100%',
    justifyContent: 'center',
  },
});

export default NewTab;
