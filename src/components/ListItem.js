import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';


const listItem = (props) => {
    return <TouchableOpacity onPress={()=>props.onItemPressed()}>
        <View style={styles.listItem}>
            <Image resizeMode="cover" source={props.placeImage} style={styles.placeImage}/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
}


const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        backgroundColor: 'grey',
        padding: 12,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    placeImage: {
        marginRight: 8,
        width: 30,
        height: 30,
    }
})

export default listItem;