import React from 'react';
import {
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import StyleGlobal from '../../styles/style';

export default function ExitBtn() {
  function exitFunction() {
    Alert.alert(
      'Fechando o aplicativo',
      'Deseja realmente sair? ',
      [
        {text: ' Não ', onPress: () => console.log('Fechamento cancelado')},
        {text: ' Sim ', onPress: () => {BackHandler.exitApp();},},
      ],
      {cancelable: false},
    );
    return true;
  }
  return (
    <TouchableOpacity style={StyleGlobal.menuButton} onPress={exitFunction}>
      <Text style={StyleGlobal.text}> Sair </Text>
    </TouchableOpacity>
  );
}
