import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const listItem = (props) => {
    return <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
    </View>
}


const styles = StyleSheet.create( {
    listItem: {
        width: '100%',
        backgroundColor: 'grey',
        padding: 12,
        marginTop: 8,
    }
})

export default listItem;