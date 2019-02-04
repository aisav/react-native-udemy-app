import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const placeInput = props => {


    return (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.placeInput}
            value={props.placeName}
            placeholder="Input any text here"
            onChangeText={props.placeNameChangedHandler}>
        </TextInput>
        <Button
            title="Add"
            onPress={props.placeNameSubmitHandler}
            style={styles.placeButton}/>
    </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',         // dividing layout horizontal parts: 'column', //by default
        width: '100%',                // by width, flex is by height
        justifyContent: 'space-between', //Horizontal, space between the children,
        alignItems: 'center',        //Vertical, each children will start from
    },
    placeInput: {
        width: '70%',
    },
    placeButton: {
        width: '30%',
    },
})

export default placeInput

