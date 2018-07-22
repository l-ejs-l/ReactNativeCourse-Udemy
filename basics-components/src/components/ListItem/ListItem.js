import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ListItem = props => (
  <View style={styles.listItem}>
    <Text>{props.item}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee'
  }
});

ListItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

export default ListItem;
