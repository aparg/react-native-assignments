import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import TopicDisplayer from './TopicDisplayer';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loadingMoreData, setLoadingMoreData] = useState(false);
  const [endReached, setEndReached] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_start=0 &_limit=10`)
      .then(res => {
        return res.json();
      })
      .then(resJson => setData(resJson))
      .catch(err => console.log(err));
  }, []);

  const loadMore = () => {
    setLoadingMoreData(true);
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${data.length} &_limit=5`,
    )
      .then(res => res.json())
      .then(resJson => {
        setLoadingMoreData(false);
        if (resJson.length === 0) {
          //when all items have been fetched
          setEndReached(true);
          Alert.alert(
            'End of List',
            'No more data to be fetched',
            [
              {
                text: 'OK',
              },
            ],
            {
              cancelable: true,
            },
          );
        }
        setData([...data, ...resJson]);
      })
      .catch(err => console.log(err));
  };

  const renderItem = ({item}) => {
    return (
      <View key={item.id} style={styles.dataBox}>
        <View style={styles.dataBoxSection}>
          <Text style={styles.dataTitle}>Post ID:</Text>
          <Text style={styles.content}>{item.id}</Text>
        </View>
        <View style={styles.dataBoxSection}>
          <Text style={styles.dataTitle}>Email:</Text>
          <Text style={styles.content}>{item.title}</Text>
        </View>
        <View style={styles.dataBoxSection}>
          <Text style={styles.dataTitle}>Body:</Text>
          <Text style={styles.content}>{item.body}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <TopicDisplayer value="FetchData" />
        {data.length != 0 ? (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            onEndReached={() => !endReached && !loadingMoreData && loadMore()}
          />
        ) : (
          <ActivityIndicator size="large" color="#fff" />
        )}
        {loadingMoreData && <ActivityIndicator size="large" color="white" />}
      </View>
    </SafeAreaView>
  );
};

const styles = {
  main: {
    backgroundColor: '#5D89EE',
    height: '100%',
  },
  dataBox: {
    margin: 5,
    borderRadius: 15,
    backgroundColor: '#587EDE',
    padding: 10,
  },
  dataTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  dataBoxSection: {
    margin: 10,
  },
  content: {
    fontSize: 15,
    color: '#fff',
  },
};
export default FetchData;
