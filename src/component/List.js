/**
 * Created by crow on 2017/1/26.
 */

import React, {Component} from 'react'
import {View, Text, StyleSheet, Platform, Image, ListView} from 'react-native'

import {SwipeListView} from 'react-native-swipe-list-view';
import {List, ListItem, SearchBar} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {UserImage} from './ImageCom'

const styles = StyleSheet.create({
    swipeListView: {
    },
    swipeListViewFirst: {
        borderColor: '#ebebeb',
        borderTopWidth: 1,
    },
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
    },
    categoryList: {
        marginBottom: 15,
        borderColor: '#ebebeb',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 5
    },
    imageTitle: {
        fontSize: 12,
        ...Platform.select({
            ios: {
                fontWeight: '500'
            }
        })
    },
    titleImage: {
        borderColor: 'red',
        borderBottomWidth:1,
        height: 100,
    },

    media: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center'
    },

    mediaLeft: {

    },
    mediaBody: {
        marginLeft: 10
    },
    text: {
        fontSize: 10,
        fontWeight: 'normal',
        color: '#ddd'
    }
});

// TODO 类目
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
            !!data.length &&
            <SwipeListView
                dataSource={this.ds.cloneWithRows(data)}
                renderRow={ (data, secId, rowId, rowMap) => (
                    <View style={[styles.swipeListView, (rowId == 0 && styles.swipeListViewFirst)]}>
                        <ListItem
                            containerStyle={styles.item}
                            roundAvatar
                            title={data.name}
                            badge={!!data.count && data.count}
                            leftIcon={{name: data.leftIconName, type: data.leftIconType}}
                        />
                    </View>)}
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


// TODO 分享类目
export class CategoryList extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    render() {
        const {data, style, onPress} = this.props
        return (
            <View style={[styles.categoryList, style]} key={data.key}>
                <Image
                    resizeMode='contain'
                    style={styles.titleImage}
                    source={require('../images/logo.png')}  />
                <View style={[styles.media]}>
                    <UserImage style={styles.mediaLeft} source='../images/logo.png' />
                    <View  style={[styles.mediaBody]}>
                        {data.title && <Text onPress={onPress} style={styles.imageTitle}>{data.title}</Text>}
                        <Text style={styles.text}>关注</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export const SettingList = ({list, hideChevron}) => {
    return (
        <List containerStyle={{marginBottom: 5}}>
            {
                list.map((l, i) => (
                    <ListItem
                        roundAvatar
                        hideChevron={hideChevron}
                        avatar={{uri:l.avatar_url}}
                        key={i}
                        title={l.name}
                    />
                ))
            }
        </List>
    )
};