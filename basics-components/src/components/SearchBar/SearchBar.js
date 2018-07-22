import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

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

SearchBar.propTypes = {
  inputPlaceholder: PropTypes.string,
  inputValue: PropTypes.string,
  inputOnChangeText: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string,
  buttonOnPress: PropTypes.func.isRequired
};

export default SearchBar;
