import React from 'react';
import { Text, View } from 'react-native';
import {Image} from 'native-base'

const AnimalItem = ({ animal }) => {
  return <Text>The {animal.name} is of type {animal.animal_type}</Text>
};

export default AnimalItem;