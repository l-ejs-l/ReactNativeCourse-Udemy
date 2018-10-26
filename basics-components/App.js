import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import placeImage from "./src/assets/concepcion.jpg";
import List from "./src/components/List/List";
import SearchBar from "./src/components/SearchBar/SearchBar";
import ListItemDetailModal from "./src/components/ListItemDetailModal/ListItemDetailModal";

class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  onPressedSearchBarButtonHandler = inputValue => {
    this.setState(state => ({
      places: state.places.concat({
        key: Math.random().toString(),
        name: inputValue,
        image: placeImage
      }),
      selectedPlace: null
    }));
  };

  onSelectedListItemHandler = key => {
    this.setState(state => {
      return {
        selectedPlace: state.places.find(place => place.key === key)
      };
    });
  };

  onDeleteItemHandler = () => {
    this.setState(state => ({
      places: state.places.filter(
        place => place.key !== state.selectedPlace.key
      ),
      selectedPlace: null
    }));
  };

  onCloseItemHandler = () => {
    this.setState({ selectedPlace: null });
  };

  render() {
    const { places, selectedPlace } = this.state;

    return (
      <View style={styles.container}>
        <ListItemDetailModal
          selectedPlace={selectedPlace}
          onDeleteItem={this.onDeleteItemHandler}
          onCloseItem={this.onCloseItemHandler}
        />
        <SearchBar
          inputPlaceholder={"An awesome place"}
          buttonTitle={"Add"}
          buttonOnPress={this.onPressedSearchBarButtonHandler}
        />
        <List
          listItems={places}
          onItemPressed={this.onSelectedListItemHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center"
  }
});

export default App;
