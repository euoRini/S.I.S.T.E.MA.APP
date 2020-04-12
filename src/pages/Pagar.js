import React from 'react';
import InputCurrency from '../components/functions/currencyinput';
import {View, Text, StyleSheet, TouchableOpacity,TextInput, StatusBar} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import StyleGlobal from '../styles/style';
import Info from './Info';

function Pagar({navigation}) {
  const matricula = navigation.getParam('matricula');
  
  return (
    <>
      <StatusBar barStyle="default" />
      <View style={StyleGlobal.body}>

        <View style={{flexDirection:'row-reverse', marginBottom:10}}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              navigation.navigate('Scan');
            }}>

            <MaterialIcons name="credit-card" size={40} color="#202020"/>
          </TouchableOpacity>

          <TextInput
            editable={false}
            placeholder={'Matrícula'}
            style={styles.textinput}
            keyboardType={'numeric'}
            value={matricula}
          />
        </View>

          
          <TouchableOpacity style={StyleGlobal.menuButton} onPress={()=>{navigation.navigate('Main')}}>
            <Text style={StyleGlobal.text}>Voltar</Text>
          </TouchableOpacity>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  textinput: {
    width: '50%',
    borderRadius: 10,
    paddingHorizontal: 5,
    color: '#fff',
    height: 60,
    backgroundColor: '#202020',
    borderColor: '#383838',
    fontSize: 18,
    borderWidth:2,
    fontWeight:'700',
    margin: 1,
    borderRadius: 10,
    textAlignVertical:'center',
  },
  textButton: {
    color: '#202020',
    fontWeight: '700',
    fontSize: 17,
    textTransform: 'uppercase',
  },
  iconButton:{
    alignItems: 'center',
    backgroundColor: '#fff',    
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 100,
    marginLeft: 10,
  },
});

export default Pagar;
