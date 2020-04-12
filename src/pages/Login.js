import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, TextInput,} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

function Main({navigation}) {
  
  return (
    <>
      <View style={styles.body}>
        <Image style={styles.img} source={require('../img/logoIFRJ.png')} />
        <View style={styles.inputConj}>
          <MaterialIcons name="perm-identity" size={30} color="#fff"/>
          <TextInput placeholder='Matrícula' style={styles.textinput} />
        </View>
        <View style={styles.inputConj}>
          <MaterialIcons name="lock" size={30} color="#fff"/>
          <TextInput placeholder='Senha' secureTextEntry={true} style={styles.textinput} />
        </View>	      
        
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            navigation.navigate('Main');
          }}>
          <Text style={styles.text}> Entrar </Text>
        </TouchableOpacity>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#202020',
    flex: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: '#fff',
    fontSize: 18,
    textAlign: 'left',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  inputIcon: {
    position: 'absolute',
    top:10,
    left:37
  },
  inputConj:{
    paddingHorizontal: 20,
    marginBottom: 10,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  textinput: {
    backgroundColor: '#202020',
    width: '75%',
    borderRadius:5,
    paddingHorizontal: 8,
    color: '#fff',
    height: 50,
    borderBottomWidth:1,
    borderColor: '#fff',
    fontSize: 15,
  },
  img: {
    position: 'relative',
    resizeMode: 'contain',
    width: '100%',
    height: '50%',
  },
  text: {
    color: '#383838',
    fontWeight: '700',
    fontSize: 17,
    textTransform: 'uppercase',
  },
  menuButton: {
    marginTop:20,
    width: '75%',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
    borderColor:'#383838',
    borderBottomWidth:1,
    borderRightWidth:1,
    borderTopWidth:1,
    borderLeftWidth:1,
    paddingHorizontal: 50,
    paddingVertical: 14,
    borderBottomEndRadius: 100,
    borderTopStartRadius:100,
    marginBottom: 10,
  },
});

export default Main;
