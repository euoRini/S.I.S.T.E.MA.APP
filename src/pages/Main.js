import React from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import ExtBtn from '../components/functions/sair';
import StyleGlobal from '../styles/style';

function Main({navigation}) {
  
  return (
    <>
      <View style={StyleGlobal.body}>
        <TouchableOpacity
          style={StyleGlobal.menuButton}
          onPress={() => {
            navigation.navigate('Produtos');
          }}>
          <Text style={StyleGlobal.text}> Catálogo </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={StyleGlobal.menuButton}
          onPress={() => {
            navigation.navigate('Pagar');
          }}>
             
          <Text style={StyleGlobal.text}> Dúvidas </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={StyleGlobal.menuButton}
          onPress={() => {
            navigation.navigate('Info');
          }}>
             
          <Text style={StyleGlobal.text}> Info </Text>
        </TouchableOpacity>

        <TouchableOpacity style={StyleGlobal.menuButton} onPress={()=>{
            fetch('https://sistemaifrj.herokuapp.com/users')
            .then(response => response.json())
            .then(users => console.warn(users))
          }
        }>
          <Text style={StyleGlobal.text}> TESTE </Text>          
        </TouchableOpacity>

        <ExtBtn/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
});

export default Main;
