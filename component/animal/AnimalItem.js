import React from 'react';
import { Text, View } from 'react-native';
import {Image} from 'native-base'

const AnimalItem = ({ animal }) => {
  return (
    <View>
  <Text>{animal.name}</Text>
  <Image
        source={{
          uri: animal.image_link,
        }}
        alt="image"
        style={{ width: 60, height: 60  }}
      />
      </View>);
};

export default AnimalItem;