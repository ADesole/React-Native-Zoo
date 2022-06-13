import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import AnimalList from './component/animal/AnimalList';
import AnimalDetail from './component/Detail/AnimalDetail';
import TypeDetail from './component/Detail/TypeDetail';
import Home from "./component/Home/home"
import TypeList from './component/type/TypeList';

export default function App() {
  return (
    <>
        <NativeBaseProvider>
        {/* <Home /> */}
        {/* <AnimalList /> */}
        {/* <AnimalDetail /> */}
        {/* <TypeDetail /> */}
        {/* <TypeList /> */}
        </NativeBaseProvider>
        </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
