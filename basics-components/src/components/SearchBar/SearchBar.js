import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={props.inputPlaceholder || ''}
        value={props.inputValue || ''}
        onChangeText={props.inputOnChangeText}
      />
      <Button
        title={props.buttonTitle || 'Button'}
        style={styles.button}
        onPress={props.buttonOnPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    width: '70%'
  },
  button: {
    width: '30%'
  }
});

export default SearchBar;
