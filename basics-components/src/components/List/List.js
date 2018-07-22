import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import ListItem from '../ListItem/ListItem';

const List = props => {
  const renderList = props.listItems.map((item, i) => <ListItem key={i} item={item} />);

  return <View style={styles.listContainer}>{renderList}</View>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

List.propTypes = {
  listItems: PropTypes.array.isRequired
};

export default List;
