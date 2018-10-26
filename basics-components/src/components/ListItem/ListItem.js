import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";

const ListItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image source={props.image} style={styles.listItemImage} />
      <Text>{props.item}</Text>
    </View>
  </TouchableOpacity>
);

/**
 * Styles
 */
const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  listItemImage: {
    width: 30,
    height: 30,
    marginRight: 8
  }
});

/**
 * PropTypes
 */
ListItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onItemPressed: PropTypes.func.isRequired,
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number
  ])
};

export default ListItem;
