import React from 'react';
import { View, Text, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: 22},
        {name: 'Friend #2', age: 32},
        {name: 'Friend #3', age: 35},
        {name: 'Friend #4', age: 38},
        {name: 'Friend #5', age: 30},
        {name: 'Friend #6', age: 23},
    ]
  return (
    <View>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friends) => friends.name}
      data={friends}
      renderItem={({item}) => {
          return <Text>{item.name} - Age: {item.age}</Text>
      }}/>
    </View>
    )
};

export default ListScreen;