import { observer } from "mobx-react";
import zooStore from '../stores/zooStore';
import { View, Text } from 'react-native';
import {Image} from 'native-base'
import TypeDetailItem from "./TypeDetailItem";

function TypeDetail() {
  const TypeDetail = zooStore.animals.filter(animal => animal.animal_type !== "Mammal").map((animal) => <TypeDetailItem animal={animal} key={animal.id} />)

  return (
    <View style={{flex: 1,justifyContent: "center"}}><Text>The animals with type Mammal</Text>{TypeDetail}</View>
  );
}

export default observer(TypeDetail);
