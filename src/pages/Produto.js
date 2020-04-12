import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native';

function Produto({navigation}){
  return(
    <ScrollView style={{backgroundColor:'white'}}>

    <View style={styles.body}>

      <TouchableOpacity style={styles.Produto} onPress={() => {}}>

        <Text style={styles.TxtButton}> Comidas </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Produto} onPress={() => {}}>
        <Text style={styles.TxtButton}> Bebidas </Text>
      </TouchableOpacity>

    </View>
    </ScrollView>
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

export default Produto;