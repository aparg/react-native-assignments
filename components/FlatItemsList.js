import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import TopicDisplayer from './TopicDisplayer';

const FlatItemsList = item => {
  const [numberOfItems, setNumberOfItems] = useState(7);

  let arr = [
    {name: 'Item 1', value: 'ItemValue', other: 'OtherValue'},
    {name: 'Item 2', value: 'ItemValue', other: 'OtherValue'},
    {name: 'Item 3', value: 'ItemValue', other: 'OtherValue'},
    {name: 'Item 4', value: 'ItemValue', other: 'OtherValue'},
    {name: 'Item 5', value: 'ItemValue', other: 'OtherValue'},
    {name: 'Item 6', value: 'ItemValue', other: 'OtherValue'},
    {name: 'Item 7', value: 'ItemValue', other: 'OtherValue'},
    {name: 'Item 8', value: 'ItemValue', other: 'OtherValue'},
    {name: 'Item 9', value: 'ItemValue', other: 'OtherValue'},
    {name: 'Item 10', value: 'ItemValue', other: 'OtherValue'},
    {name: 'Item 11', value: 'ItemValue', other: 'OtherValue'},
  ];

  const paginatedList = arr.slice(0, numberOfItems);

  const loadMore = () => {
    const numberOfAddedPosts = 3;
    let incrementedNumber = numberOfItems;
    for (let i = 0; i < numberOfAddedPosts; i++)
      if (incrementedNumber < arr.length) incrementedNumber++;
    console.log(incrementedNumber);
    setNumberOfItems(incrementedNumber);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemText}>{item.value}</Text>
        <Text style={styles.itemText}>{item.other}</Text>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <TopicDisplayer value="FLATLIST" />
      <FlatList
        data={paginatedList}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        // horizontal={true}
      />
      <Pressable
        onPress={() => loadMore()}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#587EDE' : '#fff',
          },
          styles.loadMorePressable,
        ]}>
        <Text>Load More...</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#5D89EE',
    height: '100%',
  },
  item: {
    margin: 10,
    borderRadius: 15,
    backgroundColor: '#587EDE',
  },

  itemText: {
    color: '#fff',
    margin: 3,
    padding: 5,
  },

  loadMorePressable: {
    borderRadius: 5,
    alignSelf: 'flex-end',
    padding: 5,
  },
});

export default FlatItemsList;
