import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import PropTypes from "prop-types";

class SearchBar extends Component {
  state = {
    inputValue: ""
  };

  changeInputValueHandler = val => {
    this.setState({ inputValue: val });
  };

  submitHandler = () => {
    if (this.state.inputValue.trim() !== "") {
      this.props.buttonOnPress(this.state.inputValue);
      // this.setState({ inputValue: "" });
    }
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={this.props.inputPlaceholder || ""}
          value={this.state.inputValue}
          onChangeText={this.changeInputValueHandler}
        />
        <Button
          title={this.props.buttonTitle || "Button"}
          style={styles.button}
          onPress={this.submitHandler}
        />
      </View>
    );
  }
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  input: {
    width: "70%"
  },
  button: {
    width: "30%"
  }
});

/**
 * PropTypes
 */
SearchBar.propTypes = {
  inputPlaceholder: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonOnPress: PropTypes.func.isRequired
};

export default SearchBar;
