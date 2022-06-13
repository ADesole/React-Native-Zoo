import React from 'react';
import { Text, View } from 'react-native';
import {Image} from 'native-base'

const AnimalItem = ({ animal }) => {
  return <Text>{animal.name}</Text>
};

export default AnimalItem;