import {View, Text, Dimensions} from 'react-native';
import TopicDisplayer from './TopicDisplayer';

const Dimension = () => {
  let windowHeight = Dimensions.get('window').height.toFixed(2);
  let windowWidth = Dimensions.get('window').width.toFixed(2);
  return (
    <View style={styles.main}>
      <TopicDisplayer value="DIMENSIONS" />
      <Text style={styles.content}>Window height: {windowHeight}</Text>
      <Text style={styles.content}>Window width: {windowWidth}</Text>
    </View>
  );
};

const styles = {
  main: {
    height: '100%',
    backgroundColor: '#5D89EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontFamily: 'LilitaOne-Regular',
    fontSize: 30,
    color: '#fff',
  },
};

export default Dimension;
