import React from 'react';

import {View, ScrollView, FlatList} from 'react-native';

import ListItem from './ListItem';

const placeOutput = props => {


    return <FlatList data={props.places}
                     renderItem={(info) => (
                         <ListItem placeName={info.item.name}
                                   placeImage={info.item.image}
                                   onItemPressed={() => props.onItemDeleted(info.item.key)}/>
                     )}>
    </FlatList>
}


export default placeOutput;
