/**
 * Created by crow on 2017/1/23.
 */

import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import {Actions} from 'react-native-router-flux'

import {FormLabel, FormInput, Button, Text} from 'react-native-elements'

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center"
    },
    button: {
        marginTop: 15
    },

    textCenter: {
        textAlign: "center"
    },

    center: {
        alignItems: "center"
    },

    logo: {
        width: 100,
        resizeMode: 'contain',
    }
});

export default class Login extends React.Component {
    render(){
        const title = this.props.title || 'No Title';
        const data = this.props.data || 'No Data';
        return (
            <View style={[styles.view, this.props.style]}>
                <View style={styles.center}>
                    <Image style={styles.logo} source={require('../images/logo.png')}/>
                </View>
                <FormLabel>用户名</FormLabel>
                <FormInput placeholder="请输入用户名" focus />
                <FormLabel>密码</FormLabel>
                <FormInput secureTextEntry={true} placeholder="请输入密码" />
                <Button title="登录" buttonStyle={styles.button}/>
                <Button title="注册" onPress={() => Actions.register()} buttonStyle={styles.button}/>
            </View>
        );
    }
}