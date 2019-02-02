import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends React.Component {

    state = {
        placeName: ''
    }

    placeNameChangedHandler = (val) => {
        this.setState({
            placeName: val
        })

    }

    render() {
        return (
            // Try setting `flexDirection` to `column`.
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 3, backgroundColor: 'red'}}/>
                <View style={{flex: 1, backgroundColor: 'blue'}}/>
                <View style={{flex: 2, flexDirection: 'row'}}>
                    <View style={{flex: 7, backgroundColor: 'orange'}}/>
                    <View style={{flex: 1}}/>
                    <View style={{flex: 7, backgroundColor: 'orange'}}/>
                    <View style={{flex: 1}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
