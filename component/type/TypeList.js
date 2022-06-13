import { observer } from "mobx-react";
import zooStore from '../stores/zooStore';
import { View } from 'react-native';
import { Button } from "native-base";
import TypeItem from "./TypeItem";

function TypeList() {

  const TypeList = zooStore.animals.map((animal) => <TypeItem animal={animal} key={animal.id} /> );

  return (
    <View style={{flex: 1,justifyContent: "center"}}>{TypeList}</View>
  );
}

export default observer(TypeList);
