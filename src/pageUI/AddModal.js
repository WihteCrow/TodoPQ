/**
 * Created by crow on 2017/1/27.
 */

import React, {Component} from 'react'
import {ScrollView, View, StyleSheet, Image} from 'react-native'
import {List, ListItem} from 'react-native-elements'

import {SettingList} from '../component/List'


const list = [
    {
        name: '我的关注',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    },
    {
        name: '我是收藏',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
    },
    {
        name: '我是收藏',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
    }
];

export default class AddModal extends Component {
    render() {
        return (
            <View>
                <SettingList list={list} hideChevron={true} />
            </View>
        )
    }
}