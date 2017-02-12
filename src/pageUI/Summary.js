/**
 * Created by crow on 2017/1/26.
 */


import React, {Component} from 'react'
import {ScrollView, View, StyleSheet, Image} from 'react-native'
import { Actions } from 'react-native-router-flux';

import {CategoryList} from '../component/List'
import Search from '../component/Search'


const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop: 20,
        overflow: 'hidden',
        backgroundColor: 'whitesmoke'
    },
    white: {
        backgroundColor: 'white'
    },
    box: {
        paddingTop: 10,
        paddingBottom: 10
    }
});

const arr = [
    {
        title: 'mac 精准软件',
        name: 'mac 精准软件',
        image: 'http://ww3.sinaimg.cn/crop.33.0.846.476.1000/5d652e00gw1fbsxlx63tij20qj0d8wfe.jpg'
    },
    {
        title: 'mac 精准软件',
        name: 'mac 精准软件',
        image: 'http://ww3.sinaimg.cn/crop.33.0.846.476.1000/5d652e00gw1fbsxlx63tij20qj0d8wfe.jpg'
    },
    {
        title: 'mac 精准软件',
        name: 'mac 精准软件',
        image: 'http://ww3.sinaimg.cn/crop.33.0.846.476.1000/5d652e00gw1fbsxlx63tij20qj0d8wfe.jpg'
    },
    {
        title: 'mac 精准软件',
        name: 'mac 精准软件',
        image: 'http://ww3.sinaimg.cn/crop.33.0.846.476.1000/5d652e00gw1fbsxlx63tij20qj0d8wfe.jpg'
    },
    {
        title: 'mac 精准软件',
        name: 'mac 精准软件',
        image: 'http://ww3.sinaimg.cn/crop.33.0.846.476.1000/5d652e00gw1fbsxlx63tij20qj0d8wfe.jpg'
    },
    {
        title: 'mac 精准软件',
        name: 'mac 精准软件',
        image: 'http://ww3.sinaimg.cn/crop.33.0.846.476.1000/5d652e00gw1fbsxlx63tij20qj0d8wfe.jpg'
    },
    {
        title: 'mac 精准软件',
        name: 'mac 精准软件',
        image: 'http://ww3.sinaimg.cn/crop.33.0.846.476.1000/5d652e00gw1fbsxlx63tij20qj0d8wfe.jpg'
    }
];


export default class Summary extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    render() {
        return (
            <View style={[styles.view]}>
                <Search searchStyle={styles.white} />
                <ScrollView style={styles.box}>
                    {
                        arr.map((value, key) => (
                            <CategoryList onPress={Actions.add} style={styles.white} data={value} key={key}/>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}