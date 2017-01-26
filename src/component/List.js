/**
 * Created by crow on 2017/1/26.
 */

import React, {Component} from 'react'
import {View, Text, StyleSheet, Platform, ListView} from 'react-native'

import {SwipeListView} from 'react-native-swipe-list-view';
import {List, ListItem, SearchBar} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ffffff',
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    hideBtn: {
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 75,
        justifyContent: 'center'
    },
    icon: {
        fontSize: 30,
        color: '#ffffff'
    },
    finished: {
        backgroundColor: 'green',
        left: 0
    },
    deleted: {
        backgroundColor: 'red',
        right: 0
    }
});


export class SwipeList extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    render() {
        const {data} = this.props
        return (
            <SwipeListView
                dataSource={this.ds.cloneWithRows(data)}
                renderRow={ data => (
                    <ListItem
                        containerStyle={styles.item}
                        roundAvatar
                        title={data.name}
                        badge={!!data.count && data.count}
                        leftIcon={{name: data.leftIconName, type: data.leftIconType}}
                    />)}
                renderHiddenRow={ data => (
                    <View style={styles.rowBack}>
                        <View style={[styles.hideBtn, styles.finished]}>
                            <Icon name="check" style={styles.icon}/>
                        </View>
                        <View  style={[styles.hideBtn, styles.deleted]}>
                            <Icon name="delete-forever" style={styles.icon}/>
                        </View>
                    </View>)}
                leftOpenValue={75}
                rightOpenValue={-75}
            />
        )
    }
}