import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

import PlaceInput from './src/components/PlaceInput';
import PlacesOutput from './src/components/PlacesOutput';


export default class App extends React.Component {

    constructor() {

        super();

        this.state = {
            placeName: "",
            places: [],
        }

        this.itemDeletedHandler = this.itemDeletedHandler.bind(this)
    }

    placeNameChangedHandler = (event) => {
        this.setState({
            placeName: event
        })
    }

    placeNameSubmitHandler = () => {
        const { placeName } = this.state;

        if (placeName.trim() === '') {
            return;
        }

        this.setState(prevState => {
            return {
                places: prevState.places.concat( {
                    key: Math.random(),
                    value: placeName}),
            }
        })
    }

    itemDeletedHandler = (key) => {
        this.setState(previosState => {
                places: previosState.places.filter((place, i) => key !== place.key)
            }
        )
    }

    render() {

        const { placeName, places } = this.state;

        return (
            <View style={styles.container}>
                <PlaceInput
                    placeName={placeName}
                    placeNameChangedHandler={this.placeNameChangedHandler}
                    placeNameSubmitHandler={this.placeNameSubmitHandler}
                />

                <PlacesOutput places={places}
                              onItemDeleted={() => this.itemDeletedHandler()}/>
            </View>
        );
    }
}

const
    styles = StyleSheet.create({
        container: {
            flex: 1,                      //occupies full available height
            padding: 80,
            backgroundColor: '#fff',
            justifyContent: 'flex-start', //Horizontal, children(this time one View) are starting from  the left of layout
        },


    });
