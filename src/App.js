/**
 * Created by crow on 2017/1/23.
 */


import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Scene, Reducer, Router, Switch, Modal, Actions, ActionConst} from 'react-native-router-flux'

import Login from './page/Login'
import Register from './page/Register'
import Category from './page/Category'
import TabIcon from './page/TabIcon'
import TabView from './page/TabView'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabBarStyle: {
        backgroundColor: '#eee'
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd'
    },
});

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        console.log('ACTION:', action);
        return defaultReducer(state, action);
    };
};

// define this based on the styles/dimensions you use
const getSceneStyle = (props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    };
    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : 64;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
};

export default class App extends Component {
    render() {
        return (
            <Router getSceneStyle={getSceneStyle}>
                <Scene key="root">
                    <Scene key="login" direction="vertical" component={Login} title="登录"/>
                    <Scene key="register" renderBackButton>
                        <Scene key="registerModal" direction="vertical" component={Register} title="注册"/>
                    </Scene>
                    <Scene key="tabBar" initial>
                        <Scene key="main" tabs tabBarStyle={styles.tabBarStyle} tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle} >
                            <Scene key="tab1" initial title="首页" icon={TabIcon} navigationBarStyle={{ backgroundColor: 'red' }} titleStyle={{ color: 'white' }}>
                                <Scene key="tab1_1" hideNavBar component={TabView} title="内容汇总" />
                                <Scene key="tab1_2" component={TabView} title="Tab #1_2" titleStyle={{ color: 'black' }} />
                            </Scene>
                            <Scene key="tab2" title="TODO" icon={TabIcon}>
                                <Scene key="TodoCategory" component={Category} title="TODO"/>
                                <Scene key="tab2_2" component={TabView} title="Tab #2_2" hideBackImage onBack={() => alert('Left button!')} backTitle="Left" duration={1} panHandlers={null} />
                            </Scene>
                            <Scene key="tab3" component={TabView} title="Tab #3" hideTabBar icon={TabIcon} />
                            <Scene key="tab4" component={TabView} title="Tab #4" hideNavBar icon={TabIcon} />
                            <Scene key="tab5" component={TabView} title="Tab #5" hideTabBar icon={TabIcon} />
                        </Scene>
                    </Scene>
                </Scene>
                <Scene key="error" component={Error}/>
            </Router>
        );
    }
}