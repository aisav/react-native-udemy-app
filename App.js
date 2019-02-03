import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends React.Component {

    state = {
        placeName: ''
    }

    placeNameChangedHandler = (event) => {
        this.setState({
            placeName: event
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.placeInput}
                        value={this.state.placeName}
                        placeholder="Input any text here"
                        onChangeText={this.placeNameChangedHandler}>
                    </TextInput>
                    <Button
                            title="Add"
                            onPress={this.placeNameChangedHandler}
                            style={styles.placeButton}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 80,
        backgroundColor: '#fff',
        justifyContent: 'flex-start', //children are starting from  the top
    },
    inputContainer: {
        flexDirection: 'row',         // flexDirection: 'column', //by default
        width: '100%',
        justifyContent: 'space-between', //space between the children,
        alignItems: 'center',
    },
    placeInput: {
        width: '70%',
    },
    placeButton: {
        width: '30%',
    },
});
