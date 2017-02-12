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
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 1,
        paddingBottom: 5,
        paddingTop: 5,
        borderColor: '#ebebeb'
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
        const {searchStyle} = this.props
        return (
            <SearchBar containerStyle={[styles.searchBar, searchStyle]} icon={{style: styles.searchIcon}} inputStyle={styles.searchInput} round lightTheme placeholder='搜索'/>
        );
    }
}