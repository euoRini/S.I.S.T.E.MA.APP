import React, {useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import CurrencyInput from '../CurrencyInput/index';

export default function InputCurrency() {
  const [value, setValue] = useState(0);
  const handleValueChange = useCallback(val => {
    setValue(val);
  }, []);

  return (
    <CurrencyInput
      max={100000000}
      onValueChange={handleValueChange}
      style={styles.input}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#28a745',
    fontSize: 32,
    textAlignVertical: 'bottom',
    borderWidth:3,
    borderColor: '#28a745',
    borderRadius: 10,
    margin:15,
    padding: 20,
    borderRadius: 10,
    textAlign: 'right',
    width: '65%',
    height: '12%',
    marginBottom: 10,
  },
});
