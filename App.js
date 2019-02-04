import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

import PlaceInput from './src/components/PlaceInput';
import PlacesOutput from './src/components/PlacesOutput';


export default class App extends React.Component {

    state = {
        placeName: '',
        places: [],
    }

    placeNameChangedHandler = (event) => {
        this.setState({
            placeName: event
        })
    }

    placeNameSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
            return;
        }

        this.setState(prevState => {
            return {
                places: prevState.places.concat(this.state.placeName),
                placeName: ''
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <PlaceInput
                    placeName={this.state.placeName}
                    placeNameChangedHandler={this.placeNameChangedHandler}
                    placeNameSubmitHandler={this.placeNameSubmitHandler}
                />

                {/*<View style={styles.listContainer}>{this.renderPlaces(places)}</View>*/}
                <PlacesOutput places={this.state.places}/>
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


});
