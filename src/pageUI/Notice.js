/**
 * Created by crow on 2017/1/27.
 */


import React, {Component} from 'react'
import {ScrollView, View, StyleSheet, Image} from 'react-native'
import {List, ListItem} from 'react-native-elements'

import {SettingList} from '../component/List'



export default class Message extends Component {
    render() {
        return (
            <View>
                <SettingList list={list} hideChevron={true} />
            </View>
        )
    }
}