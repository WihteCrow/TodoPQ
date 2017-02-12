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
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: '我是收藏',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '我是收藏',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    }
];

const list2 = [
    {
        name: '反馈帮助中心',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: '夜间模式',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: '设置',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    }
];


export default class Setting extends Component {
    render() {
        return (
            <View>
                <SettingList list={list} />
                <SettingList list={list2} />
            </View>
        )
    }
}