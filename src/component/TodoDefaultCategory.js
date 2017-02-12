/**
 * Created by crow on 2017/1/27.
 */


import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import {CATEGORIES} from '../config/CategoryConfig'


const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#ebebeb',
        marginBottom: 5
    },

    item: {
        flex: 1,
        alignItems: 'center',

    },
    itemRound: {
        alignItems: 'center',
        justifyContent: 'center',
        height:30,
        width:30,
        backgroundColor: 'blue',
        borderRadius: 15,
        position: 'relative'
    },
    icon: {
        color: '#fff',
        fontSize: 20
    },
    superscript: {
        position: 'absolute',
        width: 12,
        height: 12,
        borderRadius:6,
        backgroundColor: 'red',
        right:-2,
        top:0,
        zIndex: 1,
    },
    superscriptText: {
        fontSize: 7,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'transparent',
        lineHeight: 12
    }
});

export default class TodoDefaultCategory extends Component {
    render() {
        return (
            <View style={styles.view}>
                {
                    CATEGORIES.map((item, index) => (
                        <View style={styles.item} key={index}>
                            <View style={styles.itemRound}>
                                <View style={styles.superscript}>
                                    <Text style={styles.superscriptText}>1</Text>
                                </View>
                                <Icon style={styles.icon} type={item.iconType} name={item.iconName} />
                            </View>
                        </View>
                    ))
                }
            </View>
        )
    }
}