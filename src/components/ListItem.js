import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const listItem = (props) => {
    return <TouchableOpacity onPress={()=>props.onItemPressed()}>
        <View style={styles.listItem}>
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
    }
})

export default listItem;