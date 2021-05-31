import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles/styles';

const ListScreen = () => {
    const friends = [
        {name: 'Arthur', age: 22},
        {name: 'Mary', age: 32},
        {name: 'George', age: 35},
        {name: 'Agatha', age: 38},
        {name: 'Neil', age: 30},
        {name: 'Charles', age: 23},
    ]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Using FlatList</Text>
      <FlatList
      style={styles.flatList}
      keyExtractor={(friends) => friends.name}
      data={friends}
      renderItem={({item}) => {
          return (
          <Text style={styles.list}>{item.name} - Age: {item.age}</Text>)
      }}/>
    </View>
    )
};

export default ListScreen;
