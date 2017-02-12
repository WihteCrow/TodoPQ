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
import Summary from './pageUI/Summary'
import Setting from './pageUI/Setting'
import Message from './pageUI/Message'
import Notice from './pageUI/Notice'
import AddModal from './pageUI/AddModal'

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
                            <Scene key="home" title="首页" icon={TabIcon} navigationBarStyle={{ backgroundColor: 'red' }} titleStyle={{ color: 'white' }}>
                                <Scene key="summary" hideNavBar="true" component={Summary} title="内容汇总" />
                            </Scene>
                            <Scene key="tab2" initial title="TODO" icon={TabIcon}>
                                <Scene key="TodoCategory" hideNavBar component={Category} title="TODO"/>
                                <Scene key="tab2_2" component={TabView} title="Tab #2_2" hideBackImage onBack={() => alert('Left button!')} backTitle="Left" duration={1} panHandlers={null} />
                            </Scene>
                            <Scene key="add" component={AddModal} title="加" hideNavBar icon={TabIcon} />
                            <Scene key="notice" component={Notice} title="通知" hideNavBar icon={TabIcon} />
                            <Scene key="setting" component={Setting} title="更多" icon={TabIcon} />
                        </Scene>
                    </Scene>
                </Scene>
                <Scene key="error" component={Error}/>
            </Router>
        );
    }
}