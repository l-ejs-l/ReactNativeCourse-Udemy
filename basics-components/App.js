import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: ''
  };

  placeNameChangeHandler = val => {
    this.setState({ placeName: val });
  };

  render() {
    const { placeName } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={{ width: 300, borderColor: 'black', borderWidth: 1 }}
          value={placeName}
          onChangeText={this.placeNameChangeHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
