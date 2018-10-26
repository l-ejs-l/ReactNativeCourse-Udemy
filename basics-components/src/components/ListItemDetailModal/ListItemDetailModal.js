import React from "react";
import PropTypes from "prop-types";
import { View, Image, Text, Button, Modal, StyleSheet } from "react-native";

const ListItemDetailModal = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.modalImage} />
        <Text style={styles.modalTitle}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      visible={props.selectedPlace !== null}
      animationType="slide"
      onRequestClose={props.onCloseItem}
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <Button title={"Delete"} onPress={props.onDeleteItem} />
        <Button title={"Close"} onPress={props.onCloseItem} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 25
  },
  modalImage: {
    width: "100%",
    height: 200
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 28
  },
  buttonDelete: {},
  buttonClose: {}
});

ListItemDetailModal.propTypes = {
  selectedPlace: PropTypes.shape({
    image: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.number
    ]),
    name: PropTypes.string
  }),
  onDeleteItem: PropTypes.func.isRequired,
  onCloseItem: PropTypes.func.isRequired
};

export default ListItemDetailModal;
