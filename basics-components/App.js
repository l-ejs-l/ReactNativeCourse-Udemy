import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import List from './src/components/List/List';
import SearchBar from './src/components/SearchBar/SearchBar';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangeHandler = val => {
    this.setState({ placeName: val });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() !== '') {
      this.setState(state => {
        return {
          places: state.places.concat(state.placeName),
          placeName: ''
        };
      });
    }
  };

  render() {
    const { placeName, places } = this.state;

    return (
      <View style={styles.container}>
        <SearchBar
          inputPlaceholder={'An awesome place'}
          inputValue={placeName}
          inputOnChangeText={this.placeNameChangeHandler}
          buttonTitle={'Add'}
          buttonOnPress={this.placeSubmitHandler}
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
