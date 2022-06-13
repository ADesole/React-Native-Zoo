import React from "react";
import { NativeBaseProvider, Box,Center, Button, View } from "native-base";
import {StyleSheet,Alert, Text } from "react-native";
import AnimalList from "../animal/AnimalList";
import AnimalDetail from "../Detail/AnimalDetail";
import TypeDetail from "../Detail/TypeDetail";
import TypeList from "../type/TypeList";

export default function App() {
    const showAlert = () =>
    Alert.alert(
        "Congrats you clicked me",
        "Don't click on anything you see",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
  return (
    <NativeBaseProvider>
        <View style={{flex: 1,justifyContent: "center"}}>
      <Box alignSelf="center" > Hello world 
      <Button onPress={showAlert}>Click Me</Button>

      </Box>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },})