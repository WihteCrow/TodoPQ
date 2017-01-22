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
        this.class = props.class;
        this.text = props.text;
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.button, this.class]}>
                    <Text style={styles.text}>{this.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        height: 40,
        width: 100,
        borderRadius: 4,
        backgroundColor:"red",
        justifyContent:"center"
    },
    buttonText: {
        textAlign: "center",
        color: "#FFF"
    },

    active: {

    },
    primary: {

    }
});