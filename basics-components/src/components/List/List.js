import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

const List = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.listItems}
      renderItem={info => (
        <ListItem
          item={info.item.name}
          onItemPressed={() => props.onItemPressed(info.item.key)}
          image={info.item.image}
        />
      )}
    />
  );
};

/**
 * Styles
 */
const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

/**
 * PropTypes
 */
List.propTypes = {
  listItems: PropTypes.array.isRequired,
  onItemPressed: PropTypes.func.isRequired
};

export default List;
