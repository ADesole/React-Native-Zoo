import { observer } from "mobx-react";
import zooStore from '../stores/zooStore';
import { View } from 'react-native';
import AnimalItem from "./AnimalItem";
import { Button } from "native-base";

function AnimalList() {

  const animalList = zooStore.animals.map((animal) => <AnimalItem animal={animal} key={animal.id} /> );

  return (
    <View style={{flex: 1,justifyContent: "center"}}>{animalList}</View>
  );
}

export default observer(AnimalList);
