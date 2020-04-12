import React, { useState, useEffect } from 'react';
import { Alert, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {MaterialIcons} from '@expo/vector-icons';

export default function App({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if( type != 128){
      Alert.alert(
        'Código de barras inválido',
        'O código de barras lido é invalido, por favor tente novamente',
        [
          {text: 'Okay, tentar novamente', onPress: ()=>{setScanned(false), console.log('\nCódigo inválido\n')}},
        ],
        {cancelable: false},
      );
    }else{
      Alert.alert(
        'Código de barras escaneado ',
        `Matrícula: ${data}\nA matrícula escaneada confere com a do cartão?`,
        [
          { text: ' Não, escanear novamente ', onPress: () => {setScanned(false), console.log('\nFalha na leitura\n')}},
          { text: ' Sim ', onPress: () => {navigation.navigate('Pagar',{matricula:`${data}`}),console.log(`\nCódigo lido corretamente.\nMatrícula: ${data}\n`)}},
        ],
        {cancelable: false},
      );
    }    
  };

  if (hasPermission === null) {
    return <Text>Requisitando a permissão do uso da câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Acesso à câmera negado.</Text>;
  }

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      >
        <View style={styles.body}>
          <Text style={styles.title}>
            IFRJ Barcode Scanner
          </Text>
        </View>
      </BarCodeScanner>
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center',}} onPress={()=>{navigation.navigate('Pagar')}}>
        <Text style={{color:'white', fontWeight:'100', fontSize:18, marginBottom:15}}> Voltar </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    borderColor:'black',
    fontSize:30,
    fontWeight:'600',
    color: 'white',
  },
  body: {
    paddingHorizontal:10,
    paddingVertical:30,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  corpo: {
    alignItems: 'center',
    justifyContent: 'center',
  },  
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 17,
    textTransform: 'uppercase',
    textAlign:'center',
    textAlignVertical:'center',
  },
  menuButton: {
    width: '55%',
    alignItems: 'center',
    backgroundColor: '#28a745',
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 50,
    marginBottom: 10,
  },
  returnButton: {
    alignItems: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 100,
  },
});