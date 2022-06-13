import { observer } from "mobx-react";
import zooStore from '../stores/zooStore';
import { View, Text } from 'react-native';
import {Image} from 'native-base'

function AnimalDetail() {

  return (
    <View style={{flex: 1,justifyContent: "center"}}>
        <Text>The name is {zooStore.animals[0].name}</Text>
    <Image
    source={{
      uri: zooStore.animals[0].image_link,
    }}
    alt="image"
    style={{ width: 150, height: 150  }}
  />
        <Text>The habitat is {zooStore.animals[0].habitat}</Text>
  
  </View>
  );
}

export default observer(AnimalDetail);
