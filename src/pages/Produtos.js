import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity,ScrollView} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

function Produtos({navigation}){

  return(
  <>
    <ScrollView style={{backgroundColor:'white'}}>
    <View style={styles.body}>
      <TouchableOpacity style={styles.Produto} onPress={()=>{navigation.navigate('Produto')}}>
            <MaterialIcons name="credit-card" size={50} color="#28a745"/>
            <Text style={styles.TxtButton}> Comidas </Text>
            
      </TouchableOpacity>
      <TouchableOpacity style={styles.Produto} onPress={() => {}}>
            <MaterialIcons name="credit-card" size={50} color="#28a745"/>
            <Text style={styles.TxtButton}> Bebidas </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Produto} onPress={() => {}}>
            <MaterialIcons name="credit-card" size={50} color="#28a745"/>
            <Text style={styles.TxtButton}> Bebidas </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Produto} onPress={() => {}}>
            <MaterialIcons name="credit-card" size={50} color="#28a745"/>
            <Text style={styles.TxtButton}> Bebidas </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Produto} onPress={() => {}}>
            <MaterialIcons name="credit-card" size={50} color="#28a745"/>
            <Text style={styles.TxtButton}> Bebidas </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Produto} onPress={() => {}}>
            <MaterialIcons name="credit-card" size={50} color="#28a745"/>
            <Text style={styles.TxtButton}> Bebidas </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Produto} onPress={() => {}}>
            <MaterialIcons name="credit-card" size={50} color="#28a745"/>
            <Text style={styles.TxtButton}> Bebidas </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Produto} onPress={() => {}}>
            <MaterialIcons name="credit-card" size={50} color="#28a745"/>
            <Text style={styles.TxtButton}> Bebidas </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Produto} onPress={() => {}}>
            <MaterialIcons name="credit-card" size={50} color="#28a745"/>
            <Text style={styles.TxtButton}> Bebidas </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Produto} onPress={() => {}}>
            <MaterialIcons name="credit-card" size={50} color="#28a745"/>
            <Text style={styles.TxtButton}> Bebidas </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Produto} onPress={() => {}}>
            <MaterialIcons name="credit-card" size={50} color="#28a745"/>
            <Text style={styles.TxtButton}> Bebidas </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Produto} onPress={() => {}}>
            <MaterialIcons name="credit-card" size={50} color="#28a745"/>
            <Text style={styles.TxtButton}> Bebidas </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Produto} onPress={() => {}}>
            <MaterialIcons name="credit-card" size={50} color="#28a745"/>
            <Text style={styles.TxtButton}> Bebidas </Text>
      </TouchableOpacity>

    </View>
    </ScrollView>
        
    <TouchableOpacity style={styles.backButton} onPress={() => {}}>
        <Text style={styles.txtbackbttn}> VOLTAR </Text>
    </TouchableOpacity>

  </>
  );
}
const styles = StyleSheet.create({
  body:{
    backgroundColor:'white',
    flex: 1,
    flexDirection:'row',
    flexWrap: 'wrap',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    paddingVertical:60,
    paddingHorizontal:25,
  },
  backButton:{
    backgroundColor: '#28a745',
    padding:25,
    borderRadius:10,
    margin:14,
    justifyContent:'center',
    alignItems:'center',
  },
  txtbackbttn:{
    color: '#fff',
    fontSize: 20,
    fontWeight:'600',
  },


  Produto:{
    padding:25,
    borderWidth:3,
    borderColor: '#28a745',
    borderRadius: 10,
    margin:14,
    justifyContent:'center',
    alignItems:'center',
  },
  TxtButton:{
    color: '#28a745',
    fontSize: 20,
    fontWeight:'600',
  },
});
export default Produtos;