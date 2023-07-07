import React from 'react';
import {View, Text} from 'react-native';

const ItemDetailsScreen = ({route}) => {
  const {item} = route.params;

  return (
    <View>
      <Text>Name: {item.name}</Text>
      <Text>Description: {item.description}</Text>
      {/* Display other related data of the item */}
    </View>
  );
};

export default ItemDetailsScreen;
