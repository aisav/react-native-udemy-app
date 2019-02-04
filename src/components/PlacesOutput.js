import React from 'react';

import {View} from 'react-native';

import ListItem from './ListItem';

const placeOutput = props => {
    let placesList = props.places.map((place, i) => {
        return <ListItem key={i}
                         placeName={place}
                         onItemPressed={() => props.onItemDeleted(i)}>
        </ListItem>
    });

    return <View>{placesList}</View>
}


export default placeOutput;
