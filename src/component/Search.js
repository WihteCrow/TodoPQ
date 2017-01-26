/**
 * Created by crow on 2017/1/26.
 */


import React, {Component} from 'react'
import {StyleSheet, Platform} from 'react-native'

import {SearchBar} from 'react-native-elements'

const styles = StyleSheet.create({
    searchBar: {
        alignItems: "flex-start",
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    searchInput: {
        margin: 0,
        borderRadius: 4
    },
    searchIcon: {
        left: 10,
        top: 8.5,
        ...Platform.select({
            android: {
                top: 12
            }
        })
    }
});


export default class Search extends Component {
    render() {
        return (
            <SearchBar containerStyle={styles.searchBar} icon={{style: styles.searchIcon}} inputStyle={styles.searchInput} round lightTheme placeholder='搜索'/>
        );
    }
}