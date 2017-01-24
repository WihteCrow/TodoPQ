/**
 * Created by crow on 2017/1/22.
 */


import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.text = props.text;
        this.onPressBtn = props.onPress;
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPressBtn} style={[styles.button]}>
                    <Text style={styles.text}>{this.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        height: 40,
        width: 100,
        borderRadius: 4,
        backgroundColor:"red",
        justifyContent:"center"
    },
    text: {
        textAlign: "center",
        color: "#FFF"
    },

    active: {

    },
    primary: {

    }
});