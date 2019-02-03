import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import ListItem from './src/components/ListItem';

export default class App extends React.Component {

    state = {
        placeName: '',
        places: []
    }

    placeNameChangedHandler = (event) => {
        this.setState({
            placeName: event
        })
    }

    placeSubmitHandler = () => {
        if (this.state.placeName.trim()===''){
            return ;
        }

        this.setState (prevState => {
            return {
                places: prevState.places.concat(this.state.placeName),
                placeName: ''
            }
        })
    }

    render() {
        let placesOutput = this.state.places.map(
            (place, id)=> {
                return <ListItem key={id} placeName={place}></ListItem>})
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
                            onPress={this.placeSubmitHandler}
                            style={styles.placeButton}/>
                </View>
                <View>{placesOutput}</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,                      //occupies full available height
        padding: 80,
        backgroundColor: '#fff',
        justifyContent: 'flex-start', //Horizontal, children(this time one View) are starting from  the left of layout
    },
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
});
