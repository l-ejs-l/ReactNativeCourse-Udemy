import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

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
    const placesOutput = places.map((place, i) => <ListItem key={i} placeName={place} />);

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="An awesome place"
            value={placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button title="Add" style={styles.placeButton} onPress={this.placeSubmitHandler} />
        </View>
        <View style={styles.listContainer} children={placesOutput} />
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
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});
