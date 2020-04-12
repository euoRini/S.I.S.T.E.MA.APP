import {  StyleSheet } from 'react-native';
const noturno = true;
if (noturno){
  var corPrincipal = '#202020';
  var divisoria = '#383838';
  var corPreenchimento = '#ededed';
  var corText = '#fff';
} else {
var corPrincipal = '#ededed';
var divisoria = '#CDCDCD';
var corPreenchimento = '#383838';
var corText = '#fff';
}

const StyleGlobal = StyleSheet.create({
  body: {
    backgroundColor: corPrincipal,
    flex: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: corText,
    fontSize: 18,
    textAlign: 'left',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  text: {
    color: divisoria,
    fontWeight: '700',
    fontSize: 17,
    textTransform: 'uppercase',
  },
  menuButton: {
    width: '60%',
    alignItems: 'center',
    backgroundColor: corPreenchimento,
    borderColor:divisoria,
    borderWidth:2,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  textinput: {
    backgroundColor: corPrincipal,
    width: '75%',
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 5,
    color: corText,
    height: 60,
    borderColor: corPreenchimento,
    borderWidth: 1,
    fontSize: 18,
  },
});
export default StyleGlobal;