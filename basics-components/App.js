import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import List from './src/components/List/List';
import SearchBar from './src/components/SearchBar/SearchBar';

export default class App extends React.Component {
  state = {
    places: []
  };

  buttonOnPressHandler = inputValue => {
    this.setState(state => ({ places: state.places.concat(inputValue) }));
  };

  render() {
    const { places } = this.state;

    return (
      <View style={styles.container}>
        <SearchBar
          inputPlaceholder={'An awesome place'}
          buttonTitle={'Add'}
          buttonOnPress={this.buttonOnPressHandler}
        />
        <List listItems={places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});
