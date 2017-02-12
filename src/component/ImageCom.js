/**
 * Created by crow on 2017/1/27.
 */


import React, {Component} from 'react'
import {StyleSheet, Image} from 'react-native'

const styles = StyleSheet.create({
    avatar: {
        borderRadius: 17,
        width: 34,
        height: 34
    }
});

export const UserImage = ({source, style}) => {
    return (
        <Image
            style={[
                styles.avatar, style]}
            source={require('../images/logo.png')}
        />
    )
};