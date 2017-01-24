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

export default class Register extends React.Component {
    render(){
        const title = this.props.title || 'No Title';
        const data = this.props.data || 'No Data';
        return (
            <View style={[styles.view, this.props.style]}>
                <View style={styles.center}>
                    <Image style={styles.logo} source={require('../images/logo.png')}/>
                </View>
                <FormLabel>手机号</FormLabel>
                <FormInput placeholder="请输入手机号" focus />
                <FormLabel>邮箱</FormLabel>
                <FormInput placeholder="请输入邮箱" />
                <FormLabel>密码</FormLabel>
                <FormInput secureTextEntry={true} placeholder="请输入密码" />
                <Button title="注册" buttonStyle={styles.button}/>
            </View>
        );
    }
}