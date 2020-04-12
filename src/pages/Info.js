import React, {Component} from 'react';
import {View, ActivityIndicator, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import StyleGlobal from '../styles/style';

export default class Info  extends Component{
  
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: []
    }
  }
  
  componentDidMount(matricula) {
    fetch(`https://sistemaifrj.herokuapp.com/users/20181020150085`).then((response) => response.json())
      .then((responseJson) => {
        this.setState ({
          isLoading: false,
          data: [responseJson]
        });
      })
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={StyleGlobal.body}>
          <ActivityIndicator size="large" animating color="#fff"/>
        </View>
      );
    }else{
      return (

        <View style={styles.body}>
          <FlatList 
            data={this.state.data}
            renderItem={({item}) =>
            <View style={{flex: 1}}>

              <View style={styles.cabecalho}>
                <Text style={styles.title}>{item.nome}</Text>
              </View>

              <View style={styles.main}>
                <View style={styles.datagroup}>
                  <Text style={styles.textT}>Matricula:</Text>
                  <Text style={styles.text}>{item.matricula}</Text>
                </View>
                <View style={styles.datagroup}>
                  <Text style={styles.textT}>Email:</Text>
                  <Text style={styles.text}>{item.email}</Text>
                </View>

                <View style={styles.datagroup}>
                  <Text style={styles.textT}>Saldo</Text>
                  <Text style={styles.text}>{item.saldo}</Text>
                </View>
              </View>
             </View> 
            }
            keyExtractor={item => item.matricula}
          />
         <View style={styles.btnGrp}>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => {
              navigation.navigate('Main');
              }}>
              <Text style={StyleGlobal.text}> O </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => {
              navigation.navigate('Scan');
              }}>
              <Text style={StyleGlobal.text}> X </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
body:{
  display:'flex',
  backgroundColor: '#202020',
  flex: 1,
  alignItems: 'stretch',
},

btnGrp:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-evenly',
},

cabecalho:{
  height:100,
  flex:2,  
  marginBottom:10,
  width:'100%',
  paddingHorizontal:20,
  justifyContent:'center',
  borderBottomColor: "#383838",
  borderBottomWidth: 2,
  backgroundColor: '#383838'
},
main:{
  flex:1,
  flexDirection:'column',
  alignItems:'stretch',
  marginBottom:30,
  width:'100%',
  paddingVertical:20,
  paddingHorizontal:20,

},
menuButton: {
  width: '45%',
  alignItems: 'center',
  backgroundColor: '#202020',
  borderColor:'#383838',
  borderWidth:2,
  paddingHorizontal: 50,
  paddingVertical: 10,
  borderRadius: 10,
  marginBottom: 10,
},
text:{
  color: '#FFF',
  fontSize: 18,
  textAlign: 'justify',
},
textT:{
  color: '#FFF',
  fontSize: 25,
  textAlign: 'justify',
  fontWeight: 'bold',
},
title:{
  color: '#fff',
  fontSize: 38,
  fontWeight: '500',
  textAlign: 'center',
  fontWeight: 'bold',
},
datagroup:{
  paddingVertical: 25,
  borderBottomColor: "#383838",
  borderBottomWidth: 2,
},
})