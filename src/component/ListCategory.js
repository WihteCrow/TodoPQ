/**
 * Created by crow on 2017/1/25.
 */

import React, {Component} from 'react'
import {createStore} from 'redux'
import {connect} from 'react-redux'
import {View, StyleSheet, Image} from 'react-native'
import {Actions} from 'react-native-router-flux'

import {List, ListItem, SearchBar} from 'react-native-elements'
import ActionButton from 'react-native-circular-action-menu'
import Icon from 'react-native-vector-icons/Ionicons';

import {CATEGORYCONFIG, CATEGORIES} from '../config/CategoryConfig'
import {addCategory} from '../module/action/CategoryAction'

import {SwipeList} from '../component/List'


const styles = StyleSheet.create({
    view: {},
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    actionButton: {
        justifyContent: "center",
        alignItems: "flex-end"
    },
    listContainer: {
        borderBottomWidth: 0
    }
});

/**
 * 是否显示
 * @param count
 * @returns {*}
 */
function getCount(count) {
    if (count >  0) {
        return {value: count}
    }

    return false
}

class ListCategory extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    render() {
        const {dispatch, categories} = this.props
        return (
            <View style={[styles.view]}>
                {/*默认类目*/}
                <List containerStyle={styles.listContainer}>
                    {
                        CATEGORIES.map((item, index) => (
                            <ListItem
                                roundAvatar
                                key={index}
                                title={item.name}
                                badge={getCount(item.count)}
                                leftIcon={{name: item.leftIconName, type: item.leftIconType}}
                            />
                        ))
                    }
                </List>

                {/*自定义类目*/}
                <SwipeList data={categories} />

                {/* 创建按钮 */}
                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="新建文件夹"
                                       onPress={() => dispatch(addCategory('1231', CATEGORYCONFIG.FOLDER))}>
                        <Icon name="ios-folder-outline" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="新建TODO组" onPress={() => dispatch(addCategory('1231', CATEGORYCONFIG.LIST))}>
                        <Icon name="ios-list" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="新建共享组" onPress={() => dispatch(addCategory('1231', CATEGORYCONFIG.GROUP))}>
                        <Icon name="group" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }
}

function getCategory(categories) {
    return categories
}


export default connect(getCategory)(ListCategory)