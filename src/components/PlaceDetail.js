import React from 'react';

import {View, Image, Text, Modal, Button, StyleSheet} from 'react-native';


const placeDeatail = props => {
    let modalContent = null;
    if (props.selectedPlace)
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} resizeMode="cover" style={styles.placeImage}/>
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        )

    return (
        <Modal visible={props.selectedPlace !== null}
               animationType="slide" onRequestClose={props.onModalClosed}>
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title="Delete" color="red" onPress={props.onItemDeleted}/>
                    <Button title="Close" onPress={props.onModalClosed}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22,
    },
    placeImage: {
        marginRight: 8,
        width: "100%",
        height: 300,
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
    },
})


export default placeDeatail;
