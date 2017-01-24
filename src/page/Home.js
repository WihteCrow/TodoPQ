/**
 * Created by crow on 2017/1/23.
 */


import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {Actions} from "react-native-router-flux";

import Button from '../component/Button';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
});

export default class Home extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Replace screen</Text>
                <Button onPress={Actions.pop}>Back</Button>
            </View>
        );
    }
}