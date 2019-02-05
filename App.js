import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

import PlaceInput from './src/components/PlaceInput';
import PlacesOutput from './src/components/PlacesOutput';
import PlaceDetail from './src/components/PlaceDetail';
import baby from './assets/baby.jpeg';


export default class App extends React.Component {

    constructor() {

        super();

        this.state = {
            placeName: "",
            places: [],
            selectedPlace: null,
        }

        this.itemDeletedHandler = this.itemDeletedHandler.bind(this)
    }

    placeNameChangedHandler = (event) => {
        this.setState({
            placeName: event
        })
    }

    placeNameSubmitHandler = () => {
        const {placeName} = this.state;

        if (placeName.trim() === '') {
            return;
        }

        this.setState(prevState => {
            return {
                places: prevState.places.concat({
                    key: Math.random(),
                    name: placeName,
                    image: baby,
                })
            }
        })
    }

    itemDeletedHandler = () => {
        this.setState(prevState => {
                return {
                    places: prevState.places.filter((place, i) => prevState.selectedPlace.key !== place.key),
                    selectedPlace: null
                }
            }
        )
    }

    itemStelectedHandler = (key) => {
        this.setState(prevState => {
            return {
                selectedPlace: prevState.places.find((place) => {
                    return key === place.key
                })
            }
        })

    }

    modalClosedHandler = () => {
        this.setState(
            {
                selectedPlace: null
            })
    }

    _keyExtractor = (item, index) => "pdf-page-" + index;


    render() {

        const {placeName, places} = this.state;

        return (
            <View style={styles.container}>
                <PlaceInput
                    placeName={placeName}
                    placeNameChangedHandler={this.placeNameChangedHandler}
                    placeNameSubmitHandler={this.placeNameSubmitHandler}
                    keyExtractor={this._keyExtractor}/>

                <PlaceDetail selectedPlace={this.state.selectedPlace}
                             onItemDeleted={this.itemDeletedHandler}
                             onModalClosed={this.modalClosedHandler}
                             keyExtractor={this._keyExtractor}/>


                <PlacesOutput places={this.state.places}
                              onItemSelecteted={this.itemStelectedHandler}
                              keyExtractor={this._keyExtractor}/>
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
