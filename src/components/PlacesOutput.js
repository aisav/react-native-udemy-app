import React from 'react';

import {StyleSheet, View} from 'react-native';

import ListItem from './ListItem';

const placeOutput = props => {
    let placesList = props.places.map(
        (place, id) => {
            return <ListItem
                key={id}
                placeName={place}>
            </ListItem>
        });

    return <View>{placesList}</View>
}


export default placeOutput;
